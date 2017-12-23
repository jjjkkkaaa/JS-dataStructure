function Node(data, left, right) {
	this.data = data;
	this.leftChild = left;
	this.rightChild = right;
	this.show = show;
}

function show() {
	return this.data;
}
