function HashTable() {
	this.table = new Array(137);

	// 散列函数
	this.simpleHash = function(data) {
		var total = 0;
		for(var i = 0, len = data.length;i < len; ++i) {
			total += data[i].charCodeAt();
		}

		return total % this.data.length;
 	}

	//将数据存入散列表
	this.put = function(key, data) {
		var pos = this.simpleHash(key);
		this.table[pos] = data;
	}

	//获取键值
	this.get = function(key) {
		return this.table[this.simpleHash(key)];
	}

	//显示散列表中的数据
	this.showData = function() {
		var n = 0;
		for(var i = 0, len = this.table.length; i < len; ++i) {
			if(this.table[i] != undefined)
				console.log(i + ':' + this.table[i]);
		}
	}

	//更好的散列函数
	this.betterHash = function(string) {
		const H = 37;
		var total = 0;
		for(var i = 0, len = string.length; i < len; ++i)
			total += H*total + string[i].charCodeAt();
		total = total % this.table.length;
		if (total< 0) total += this.table.length - 1;
		return total;
	}

	//散列整形化键
	// this.getRandomInt = function() {
	// 	return Math.floor(Math.random()*(max - min + 1)) + min;
	// }
}