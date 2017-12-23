//结点
function Node(data) {
	this.data = data;
	this.next = null;
}
//单链表
function LinkList() {
	this.head = new Node('head');	//头结点

	//向链表尾结点之后加入结点
	this.append = function(ele) {
		var newNode = new Node(ele),
		lastNode = this.head;
		while(lastNode.next != null) 
			lastNode = lastNode.next;
		lastNode.next = newNode;
	}

	//向单链表头结点之后插入新节点
	this.insertAfterHead = function(ele) {
		var newNode = new Node(ele);
		newNode.next = this.head.next;
		this.head.next = newNode;
	}

	//寻找单链表中是否存在某个节点，如果存在就返回这个节点，否则就返回false
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
	}

	//在单链表中删除指定的结点(寻找它的前驱结点)
	this.remove = function(ele) {
		var targetNode = this.find(ele),
		prevNode = this.head;
		if(!targetNode) return;     //操作失败，结点不存在在单链表中
		while(prevNode.next.data != ele) {
			prevNode = prevNode.next;
		}
		prevNode.next = targetNode.next;
	}

	//依次访问单链表结点
	this.Traverse = function(fn) {
		var eachNode = this.head.next;
		while(eachNode) {
			fn(eachNode.data);
			eachNode = eachNode.next;
		}
	}

	//清空单链表，保留头结点
	this.clear = function() {
		this.head.next = null;
	}

	this.isEmpty = function() {
		if(!this.head.next) return true;
		else return false;
	}

}

function visit(ele) {
	console.log(ele);
}

//主函数
var main = function() {
	var data = ['a', 'b', 'c', 'd'];
	var llist  =new LinkList();
	data.forEach(function(item){
		llist.append(item);
	});
	llist.Traverse(visit);
	llist.append('e');
	llist.insertAfter('a', 'aaa');
	llist.insertAfterHead('ok!');
	console.log('新增节点之后');
	llist.Traverse(visit);
	llist.remove('ok!');
	console.log('删除节点之后');
	llist.Traverse(visit);
}();

