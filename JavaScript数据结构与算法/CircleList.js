function Node(data) {
	this.data = data;
	this.next = null;
}

function Circle() {
	this.head = new Node('head');
	this.head.next = this.head;
	//向链表尾结点之后加入结点
	this.append = function(ele) {
		var newNode = new Node(ele),
		lastNode = this.head;
		if(lastNode.next != this.head) {
			while(lastNode.next == this.head)
				lastNode = lastNode.next;
			lastNode.next = newNode;
			newNode.next = this.head;
		} else {
			lastNode.next = newNode;
			newNode.next = this.head;
		}
	}	

	//向头结点之后插入新结点
	this.insertAfterHead = function(ele) {
		var newNode = new Node(ele);
		newNode.next = this.head.next;
		this.head.next = newNode;
	}

	//寻找是否存在某个结点，如果存在就返回这个节点，否则就返回false
	this.find = function(element) {
		var currNode = this.head.next;
		while(currNode) {
			if(currNode.data == element) return currNode;
			currNode = currNode.next;
		}
		return false;
	}

	//在指定结点之后插入新结点
	this.insertAfter = function(target, ele) {
		var newNode = new Node(ele),
		targetNode = this.find(target);
		if (!target) return;		//目标结点不存在，插入失败
		newNode.next = targetNode.next;
		targetNode.next = newNode;
	}

	//删除指定的结点(寻找它的前驱结点)
	this.remove = function(ele) {
		var targetNode = this.find(ele),
		prevNode = this.head;
		if(!targetNode) return;     //操作失败，结点不存在在单链表中
		while(prevNode.next.data != ele) {
			prevNode = prevNode.next;
		}
		prevNode.next = targetNode.next;
	}

	//依次访问结点
	this.Traverse = function(fn) {
		var eachNode = this.head.next;
		if (this.isEmpty) return;
		while(eachNode == this.head) {
			fn(eachNode.data);
			eachNode = eachNode.next;
		}
	}

	//清空，保留头结点
	this.clear = function() {
		this.head.next = this.next;
	}

	this.isEmpty = function() {
		if(this.head.next == this.head) return true;
		else return false;
	}

}