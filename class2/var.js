// var a; // undefiend
// var a = 1;  // var statement (var 语句)

/**
 * var 声明变量的种类
 * 1. 全局作用域变量 (gloablly-scoped variable 全局变量) 
 * 2. 函数作用域变量 (function-scoped variable 函数局部变量)
 */

// var a = 1; // 全局作用域变量

// function test () {
//   var a = 2; // 函数作用域变量
// }

/**
 * 1. 什么是作用域？
 *  限定变量可访问权限的范围
 * 
 * 全局作用域: 基于 window 或者 globalThis 的可访问范围
 * 函数作用域
 * 块级作用域
 */

/**
 * 全局作用域变量
 * 
 * 
 * 总结: 在全局作用域直接用 var 声明的变量，是以全局对象属性的形式被创建的
 */


/**
 * 函数作用域变量
 * 
 * 1. 函数内部的作用域叫做函数作用域, 也叫函数局部作用域
 * 2. 局部作用域可以访问全局作用域的变量
 * 3. 全局作用域无法访问函数作用域的变量
 * 4. 函数可以嵌套函数，作用域可以嵌套作用域
 * 
 * 内访外可以，外访内不行
 */

// var a = 1;

// function test () {
//   var b = 11;
//   console.log(a);

//   function test1 () {
//     var c = 3;
//     console.log(b);
//     console.log(a);
//   }

//   test1();
// }

// test();

/**
 * Uncaught ReferenceError: b is not defined
 * Uncaught: 未捕获
 * ReferenceError：引用错误，引用 b 产生了错误
 * b is not defined：变量 b 没有被定义
 */

// try { // 尝试运行一段程序，看它有没有错误
//   console.log(b);
  
// } catch (e) { // 有错误
//   console.log(e);
// }

// console.log('over');

/**
 * 变量提升: Variable Hoisting
 * 
 * 1. 代码执行的最开始，会进行预编译操作
 * 
 * 过程： 
 *    1. 『预编译』 找到 var -> 变量a
 *    2. 『预编译』 放入预编译容器 { a } 
 *    3. 『预编译』 给变量初始化 { a: undefined }
 *    4. 『执行期』 打印 a => undefined
 *    5. 『执行期』a = 1 => 将 1 赋值给变量 a
 * 
 *  总结： 尽量按照程序的逻辑顺序进行变量声明和访问
 *        变量提升是 var 声明的一个缺点
 */

// console.log(a);
 
// var a = 1;

// test();

// function test () {

// }


/**
 * 过程: 
 *    1. 『预编译』 找到 var -> 变量 a
 *    2. 『预编译』{ a }
 *    3. 『预编译』{ a: undefined }
 *    4. 『预编译』{ a: 2 }
 *    5. 『预编译』{ a: 1 }
 *    6. 『预编译』 打印 1 
 */
// a = 2;
// var a = 1;

// console.log(a);

/**
 * 暗示 (隐式 implicit)全局变量: 未有任何变量声明关键字声明的变量
 * 1. 不用任何关键字
 * 2. 必须手动初始化
 */

// b;
// a = 1;
// console.log(a); 

// function test () {
//   /**
//    * 1. 函数执行
//    * 2. a 被定义为全局
//    */
//   a = 1;
//   console.log(a);
// }

// test();
// console.log('global', a);



function test2 () {
  /**
   * var a 局部变量
   * b 暗示全局变量
   * 1 => b
   * b => a
   */
  // var a = b = 1;


  /**
   * a 局部变量
   * b 局部变量
   */
  var a, 
      b = a = 1;

  console.log('test2', a);
  console.log('test2', b);
}

test2();

try {
  console.log('global', a);
} catch (e) {
  console.log(e);
} 
console.log('global', b);

/**
 * var 最不合理的几点：
 *  1. 可以重复声明: 不要重复声明
 *  2. 变量提升: 注意声明与访问的顺序
 *  3. 暗示全局变量: 一定要用变量声明关键字声明变量
 */