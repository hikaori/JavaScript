//クロージャーとはファンクションを引数に持つもの。

/////// step1 変数にfunction　が格納され、それが呼ばれる形を理解しよう //// 
function square(x){
	return x * x
}
function volume(x){
	return x * x * x
}
var a = square
var b = volume
console.log(a(2)); // 2 * 2  -output -> 4
console.log(b(2)); // 2 * 2 * 2 - output -> 8
// 変数に格納されているfunctionを呼ぶ時は、変数名()の形で変数内に格納されているfunctionを呼ぶことができる。


/////// step2 functionの中にfunctionがある形を理解しよう //// 
function html_tag(tag){
	function message(msg){
		console.log("<"+ tag + ">" + msg + "</" + tag + ">");  //解説１
	}
	return message;
}
var h1 = html_tag('p');　// html_tag() functionが呼ばれ、message　function がmsgには何も入っていない状態で実行され　message functionが返される。（"<"+ p + ">" + msg + "</" + p + ">"）tagに引数のpが入っている。
var h2 = h1('hello');　//h1には、message functionが
// var h3 = html_tag('p')('hello');  // h２、h３の２行で書くもの（上部2行）を１行で書くとこうなる。


