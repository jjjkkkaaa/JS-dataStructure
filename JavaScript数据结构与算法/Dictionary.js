//为什么使用数组而不是对象作为Dictionary的基础类？
//首先对象不等对对象属性进行排序，其次，数组也是对象

//键-值对的集合
function Dictionary() {
	this.dataStore = new Object();

	//添加键-值对 
	this.add = function(key, value) {
		this.dataStore[key] = value;
	}

	//寻找键-值对
	this.find = function(key) {
		return dataStore[key];
	}

	//删除
	this.remove = function(key) {
		if (this.find(key))
			delete this.dataStore[key];
	}

	//显示全部属性
	this.showAll = function() {
		for(var i in Object.keys(this.dataStore).sort())
			console.log(i + ':' + dataStore[i]);
	}

	this.count = function() {
		var n = 0;
		for(var i in Object.keys(this.dataStore))
			n++;
		return n;
	}

	this.clear = function() {
		for(var key in Object.keys(dataStore))
			delete this.dataStore[key];
	}
}