function tinhtong(a,b)
{
	return a + b;

}
var x = tinhtong(5,6);
console.log(x);
//////////
function hello()
{
	console.log("hello");
}
function goiham(fn)
{
	fn();
}
goiham(hello);

///////////
var tong = function (){
	console.log("dang van do ");
}
tong();