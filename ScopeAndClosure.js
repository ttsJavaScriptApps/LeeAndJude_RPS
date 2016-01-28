
​
function outer(){
	var a = "Lee";
	var b = {
		key: "value"
	};
	console.log(a)
	console.log(b)
	function inner(a,b){
		var a = "Jude"
		var v = {}
		b.name = "Assaf"
		console.log(a)
		console.log(b)
	}
​
	inner(a,b);
	console.log(a,b)
}
​
outer();
​
function(obj) {
	//do stuff to object
	obj.newVal = "abc";
}
​
​
