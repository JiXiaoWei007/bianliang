

console.log('输出');
var a="1";
console.log(a);
a=5;
console.log(a);
a=a+a;
console.log(a);

//数字类型
var a="1";
console.log(a);
a=null;
console.log(a);
var tizhong="115";
console.log(tizhong);
var shenggao="170";
console.log(shenggao);

//字符串类型
var shuohua="我很幸运";
console.log(shuohua);

//布尔类型
var ishe="true";
console.log(ishe);

var ischi="false";
console.log(ischi);

// 空定义类型
var meiyou="null";
console.log(meiyou);

//未定义类型

var xinyuen;
console.log(xinyuen);
xinyuen="true";
console.log(xinyuen);

//复合数据类型  引用数据类型
var jixiaowei= new Object();
jixiaowei.nianlin="21";
jixiaowei.shenggao="170";
jixiaowei.tizhong="115";
jixiaowei.chi=function(){
	console.log("fan");
	console.log(jixiaowei);
	console.log(jixiaowei.tizhong);
}
 
jixiaowei.chi();

//算术运算符
var a=2;
var b=2;
var c=1+3;
var d=b+c;
var e=a*c;
var f=e/a;
var g=8%3;
/*console.log(a);
console.log(b);
console.log(c);
console.log(a+b);
console.log(d);
console.log(e);
console.log(f);
console.log(g);*/

var a=3;
a++;
a++;
var b=a++;
a--;
console.log(b);
console.log(a);


//比较运算符
var a=5;
var b=4;
var c=7;

var daan=a>=b;
var jieluen=b>c;
var jieguo=c>=a;
var jieguo2=a<=c;
var jieguo3=a==b;
b++;
var jieguo4=a>b++;
var jieguo5=a<++b;
console.log(jieguo3);
console.log(jieguo2);
console.log(jieguo);
console.log(jieluen);
console.log(daan);
console.log(jieguo4);
console.log(jieguo5);
console.log(c);
console.log(b);
console.log(a);



//逻辑运算符
var a=true;
var b=false;
var jieguo=a&&b;
var jieguo1=a||b;
console.log(jieguo);
console.log(jieguo1);

//
var a=2;
var b=3;
var jieluen=a+b/a*a+a*b+a-a++/b-b;
var suanfa=a+b*a++-b++/a*2-b;
console.log(suanfa);
console.log(jieluen);

