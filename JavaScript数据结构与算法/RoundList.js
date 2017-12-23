function Node(data) {
	this.data = data;
	this.next = null;
	this.previous = null;
}

function RoundList() {
	//定义头结点
	this.head = new Node('head');
	//向链表尾结点之后加入结点
	this.append = function(ele) {
		var newNode = new Node(ele),
		lastNode = this.head;
		while(lastNode.next != null) 
			lastNode = lastNode.next;
		lastNode.next = newNode;
		newNode.previous = lastNode;
	}

	//头结点之后插入新节点
	this.insertAfterHead = function(ele) {
		var newNode = new Node(ele);
		newNode.next = this.head.next;
		this.head.next = newNode;
		newNode.previous = this.head;
		if(!newNode.next)
			newNode.next.previous = newNode;

	}

	//寻找是否存在某个节点，如果存在就返回这个节点，否则就返回false
	this.find = function(element) {
		var currNode = this.head;
		while(currNode) {
			if(currNode.data == element) return currNode;
			currNode = currNode.next;
		}
		return false;
	}

	//在指定节点之后插入新节点
	this.insertAfter = function(target, ele) {
		var newNode = new Node(ele),
		targetNode = this.find(target);
		if (!target) return;		//目标结点不存在，插入失败
		newNode.next = targetNode.next;
		targetNode.next = newNode;
		newNode.previous = targetNode;
		if(!newNode.next)
			newNode.next.previous = newNode;
	}

	//删除指定的结点
	this.remove = function(ele) {
		var targetNode = this.find(ele);
		if(!targetNode) return;     //操作失败，结点不存在在单链表中
		targetNode.previous.next = targetNode.next;
		if(!targetNode.next) {
			targetNode.next.previous = targetNode.previous;
		}	//尾结点
		
	}

	//依次访问结点
	this.Traverse = function(fn) {
		var eachNode = this.head.next;
		while(eachNode) {
			fn(eachNode.data);
			eachNode = eachNode.next;
		}
	}

	//清空，保留头结点
	this.clear = function() {
		this.head.next = null;
	}
	//判断是否为空结点
	this.isEmpty = function() {
		if(this.head.next) return true;
		else return false;
	}
}
function visit(ele) {
	console.log(ele);
}

var main = function() {
	var data = ['a', 'b', 'c', 'd'];
	var llist  =new RoundList();
	data.forEach(function(item){
		llist.append(item);
	});
	llist.Traverse(visit);
	llist.append('e');
	llist.insertAfter('a', 'aaa');
	llist.insertAfterHead('ok!');
	console.log('新增节点之后');
	llist.Traverse(visit);
	llist.remove('c');
	llist.remove('b');
	console.log('删除节点之后');
	llist.Traverse(visit);
}();