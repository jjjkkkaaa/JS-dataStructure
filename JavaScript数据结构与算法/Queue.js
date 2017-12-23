function Queue() {
	this.dataStore = [];

	//入队列
	this.enqueue = function(data) {
		this.dataStore.push(data);
	}

	//出队列
	this.dequeue = function() {
		if(this.isEmpty()) {
			console.log("队列为空！");
			return;
		}
		this.dataStore.shift();
	}

	//获取队列头元素
	this.front = function() {
		if(this.isEmpty()) return;
		else return this.dataStore[0];
	}

	//获取队列尾元素
	this.back = function() {
		if(this.isEmpty()) return;
		else return this.dataStore[this.dataStore.length-1];
	}

	//盘队列是否为空
	this.isEmpty = function() {
		if(!this.dataStore.length) return true;
		else return false;
	}

	//清空队列
	this.clear = function() {
		this.dataStore = [];
	}

	//显示队列
	this.display = function() {
		for(var i = 0, len = this.dataStore.length; i<len; i++) 
			console.log(this.dataStore[i]);
	}
}

var main = function() {
	var obj = {
		name: 'Shipley',
		sex: 'male',
		age: 20,
		school: 'cqupt'
	},
	queue = new Queue();
	for(var i in obj) {
		queue.enqueue(obj[i]);
	}
	console.log('队列是否为空：', queue.isEmpty());
	queue.display();
	console.log('队列头元素:' + queue.front());
	console.log('队列尾元素:' + queue.back());
	console.log('删除队列元素后');
	queue.dequeue();
	queue.display();

}();