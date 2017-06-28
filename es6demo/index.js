
// let jason='jason张';
// let blog ='我是歌手'+jason+'，欢迎来到我的音乐世界'+'<br>';
// document.write(blog);
// document.write(blog.includes(jason)+'<br>');  // blog里面查找json这个字符串
// document.write(blog.startsWith(jason)+'<br>'); // 开头查找
// document.write(blog.endsWith(jason)+'<br>');  // 结尾查找
// document.write('jason张 |<br>'.repeat(2));  // 复制字符串


/* ------- 二进制声明/八进制声明 ------------ */
// let Binary=0B010101;  // 二进制声明 Binary
// console.log(Binary);
//
// let octal=0o666;  // 八进制声明 Octal
// console.log(octal);


/* -------- 数字判断和转换 --------- */
/* -------- Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true --------- */
// let a= 11/4;
// console.log(Number.isFinite(a));  //true
// console.log(Number.isFinite('jspang'));  //false
// console.log(Number.isFinite(NaN));  //false
// console.log(Number.isFinite(undefined));  //false

/* ----- NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true ----- */
// console.log(Number.isNaN(NaN));

/* ----- 判断是否为整数Number.isInteger(xx)/整数转换Number.parseInt(xxx)/浮点型转换Number.parseFloat(xxx) ----- */
// let a=13.14;
// let b=13;
// console.log(Number.isInteger(a));  // 判断是否为整数
// console.log(Number.isInteger(b));
// console.log(Number.parseInt(a));  // 转换成整数
// console.log(Number.parseFloat(a));  // 转换成浮点数

/* ----- 整数取值范围操作 ----- */
// 整数的操作是有一个取值范围的，它的取值范围就是2的53次方-1
// let a = Math.pow(2,53)-1;
// console.log(a); //9007199254740991
// // ES6提供了一个常数，叫做最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);  // 最大安全整数
// console.log(Number.MIN_SAFE_INTEGER);  // 最小安全整数
// // 安全整数判断isSafeInteger()
// console.log(Number.isSafeInteger(a));//false


/* ----- ES6中新增的数组知识（1） ----- */
// Array.from将json数组转换成数组
// let json={
//   '0': 'jason',
//   '1': 'zhang',
//   '2': 'singer',
//   length: 3
// }
// let arr=Array.from(json);  // 将json数组转化成数组
// console.log(arr);

// Arry.of方法
// es5的写法
// let stt='[1,2,3,4]';
// let see=eval(stt);
// console.log(see);

// let arr=Array.of('jason','歌手');
// console.log(arr);

// find() 实例方法
// value：表示当前查找的值
// index：表示当前查找的数组索引
// arr：表示当前数组
// let arr=[1,2,3,4,5];
// let demo=arr.find(function(value,inde,arr){
//   return value>1;
// });
// console.log(demo);

/* ----- ES6中新增的数组知识（2） ----- */
// fill( )实例方法，数组进行填
// 第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置
// let arr=['jason','singer','sichuan','man'];
// arr.fill('hello',1,3);
// console.log(arr);

// 数组的遍历
// let arr=['jason','singer','sichuan','man'];
// for (let item of arr) {
//   console.log(item);
// }
// 数组的索引
// for (let item of arr.keys()) {
//   console.log(item);
// }
// 同时输出索引和内容
// for (let item of arr.entries()) {
//   console.log(item);
// }
// for (let [index,val] of arr.entries()) {
//   console.log(index+':'+val);
// }

// entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值
let arr=['jason','singer','sichuan','man'];
let list=arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
