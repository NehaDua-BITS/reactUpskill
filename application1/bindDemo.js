function add(a, b)
{
	return a+b;
}

var add5 = add.bind(null, 5);

console.log(add5(10));
