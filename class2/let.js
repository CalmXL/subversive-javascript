/**
 * ES6 Block 块
 *    block-scoped 块(级)作用域
 * 
 * 限制变量可访问范围的工具作用域，这个范围就是作用域
 * 
 * 类似于函数作用域
 * 
 * ES6中
 * 函数体、if、for、while、或直接用 {} 声明的块等包含的 {} 都是块作用域
 */

// function test () {
//   var a = 1;
// }

// console.log(a); 


// ES5 中没有块的限制
/**
 * 为什么 ES5 没有块的概念？
 * 
 * ES5 中用 var 声明变量需要在预编译中进行初始化
 * 这样就没有办法以块作用域的概念限制外界访问 a 
 * 所以在 ES5 中要实现块作用域，必须使用 函数作用域
 */

// if (true) {
//   var a = 1;
// }

// if (false) {
//   var b = 2;
// }

// console.log(a); // 1
// console.log(b); // undefiend



/**
 * 预编译：{ a : undefined }
 * 执行期：{ a : 1 }
 */ 
// {
//   var a = 1;
// }

// console.log(a);

// function test () {
//   var b = 2;
// }

// console.log(b); // Uncaught ReferenceError: b is not defined



/**
 * ES6 中如何实现块作用域
 * let 在块中声明的变量是在代码执行期进行声明和初始化的
 * 所以支持了块作用域访问的限制
 */
// if (true) {
//   /**
//    * 块作用域： 
//    * 注意：不是let 创建了块作用域
//    *      使用 let 在 {} 里声明变量，JS 引擎会将 {} 解析成块级作用域
//    */
//   let a = 1;
// }

// console.log(a); // Uncaught ReferenceError: a is not defined


/**
 * 块作用域可以单独进行创建
 */

// console.log('up', b);
// // console.log('up', a);

// {
//   let a = 1;
//   var b = 2;
// }

// console.log('down', b);
// console.log('down', a);

/**
 * let 声明： 声明一个块作用域的局部变量
 */

// let a;
// console.log(a);
// a = 1;
// console.log(a);

/**
 * let 声明变量的访问限制
 */

// Uncaught ReferenceError: Cannot access 'a' before initialization
/**
 * 不能在初始化之前访问变量 a 
 * 
 * 『预编译』 找 let -> 变量 a
 * 『预编译』 { a } 
 * 『执行期』 打印a => Cannot access 'a' before initialization
 * 
 *  let 声明是在执行代码到这一行时开始初始化的 
 */
// console.log(a);
// let a = 1;
// console.log(a);

// 暂时性死区 Temporal Dead Zone
// let a = a + 1;
// console.log(a);

// var b = b + 1;
// console.log(b); // NaN 


/**
 * let 声明的变量为什么不是全局变量？
 * 
 * let 声明的变量不会在全局对象上创建创建(不是全局变量)
 * 对于在全局作用域 用 let 创建的变量而言，看作块作用域
 */

// let a = 1;
// console.log(window.a); // undefined


/**
 * 块作用域与函数作用域： 
 * 1. var 声明的变量，访问只能被限制在函数作用域范围内
 * 2. let 声明的变量，访问可以被限制在块作用域和函数作用域内
 */

/**
 * let 不允许重复声明
 */

// let a = 2;

/**
 * var 和 let 冲突
 * 
 * 在同一作用域下，var 和 let 不允许重复声明
 */


/**
 * 块无法限制 var 声明变量的访问范围
 */
let a = 1;

// {
//   var a  = 1; 
// }