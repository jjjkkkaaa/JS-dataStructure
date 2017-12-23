function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];	//储存元素

	this.clear = function() {
		delete this.dataStore;		//delete操作符删除对象的某个属性
		this.dataStore = [];
		this.listSize = this.pos = 0;
	}

	this.find = function(element) {
		for(var i = 0; i < this.dataStore.length; i++) {
			if (this.dataStore[i] == element) return i;
		}
		return -1;
	}

	this.toString = function() {
		return this.dataStore.join(' ');
	}

	this.insert = function(element, after) {
		var insertPos = this.find(after);
		if (insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	}		//在某个元素之后插入

	this.append = function(element) {
		this.dataStore[this.listSize++] = element;
	}

	this.remove = function(element) {
		var foundAt = this.find(this);
		if (foundAt > -1) {
			this.dataStore.splice(foundAt, 1);
			--this.listSize;
			return true;
		}
		return false;
	}	//删除某个元素

	this.front = function() {
		this.pos = 0;
	}

	this.end = function() {
		this.pos = this.listSize - 1;
	}

	this.prev = function() {
		if(this.pos > 0) --this.pos;
	}

	this.next = function() {
		if (this.pos < this.listSize -1) ++this.pos;
	}

	this.length = function() {
		return this.listSize;
	}

	this.currPos = function() {
		return this.pos;
	}

	this.moveTo = function(newPos) {
		this.pos = newPos;
	}

	this.getElement = function() {
		return this.dataStore[this.pos];
	}

	this.contains = function(element) {
		for(var i = 0;i < this.dataStore.length; i++) {
			if (this.dataStore[i] == element) return true;
		}
		return false;
	}
}

var mian = function() {
	var numberList = new List();
	for(var i = 0; i<10; i++) 
		numberList.append(i);
	console.log(numberList.toString());
}();