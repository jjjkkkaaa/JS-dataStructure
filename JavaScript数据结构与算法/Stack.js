function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = function(element) {
		this.dataStore[this.top++] = element;
	}	//入栈

	this.pop = function() {
		if (this.top == 0) return false;
		this.dataStore.splice(this.top-1, 1);
		--this.top;
	}	//出栈

	this.peak = function() {
		if (!this.dataStore[this.top-1]) return null;
		return this.dataStore[this.top-1];
	}	//访问栈顶元素

	this.clear = function() {
		this.top = 0;
	}
	this.isEmpty = function() {
		if (this.top == 0) return true;
		else return false;
	}

	this.length = function() {
		return this.top;
	}
	this.StackTraverse = function() {
		for(var i = 0;i < this.top;i++) console.log(this.dataStore[i]);
	}
}

var main = function() {
	var stack = new Stack();
	for(var i =2; i < 20; i+=2) 
		stack.push(i);
	stack.StackTraverse();
	console.log('栈的长度是:' + stack.length());
	console.log('栈顶元素是：' + stack.peak());
	console.log('是否为空栈：' + stack.isEmpty());
	stack.pop();
	stack.pop();
	console.log('删除两个元素后')
	stack.StackTraverse();
	console.log('栈的长度是:' + stack.length());
	console.log('栈顶元素是：' + stack.peak());
	console.log('是否为空栈：' + stack.isEmpty());
	stack.clear();
	console.log('清空栈后');
	console.log('栈的长度是:' + stack.length());
	console.log('栈顶元素是：' + stack.peak());
	console.log('是否为空栈：' + stack.isEmpty());
}();