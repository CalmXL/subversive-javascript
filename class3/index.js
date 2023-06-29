/**
 * javascript的数据类型和结构（Data types and data structure）
 * 
 * 数据类型：编程语言中用于存储与运算的工具
 * 数据结构：编程语言中用于表示数据意义(队列、栈、树)与操作的工具
 * 
 * 
 */

// 字符串类型的存储
// let str = '123';
// 字符串运算
// str += '4';

// 表现的是一种数据意义：数字 123 顺序排列
// const arr = [1, 2, 3];

// 数据的操作: 入栈
// arr.push(4);

/**
 * 变量与类型的无关性 （弱类型语言的特点）
 * 
 * 变量：映射内存地址的标识符 -> 0x0000
 * 类型：描述值在内存中如何存储的工具
 * 总结：弱类型语言是动态的通过值判断类型，根据类型来分配存储空间的
 */


/**
 * 1. 定义一个标识符 a
 * 2. a 作为一个变量
 * 3. 分配双精度 64 位的存储空间
 * 4. 将 1 存储到这个空间
 * 5. 重新分配字符串空间
 * 6. 将字符串 '1' 存储到该空间
 * 7. 将标识符 a 映射到新的空间地址
 * 
 * 标识符   地址     栈
 * a       0x0001  '1'
 *         0x0000  1 
 */
// let a = 1;
// a = '1';

/**
 * 强类型语言: 根据变量指定的类型先分配空间，将值存储到该空间
 * 
 * int a = '123'; x
 * byte b = 128; x(-128 ~ 127)
 */

// --------------------------------------------------------------

/**
 * 基本数据类型与原始值 （Primitive data type and primitive value）
 * 
 * 基本数据类型：语言最底层指定的数据类型 （不需要任何语言工具创建）
 * 
 * 类型的表示: 一般用来说首字母大写
 *                Null   Undefined   Boolean   Number   BigInt   String    Symbol
 * typeof 运算符  object  undefined   boolean   number   bigint   string    symbol
 * 
 * 原始值（基础数据类型值）： 语言最底层就指定的基本数据类型对应的值
 * Null   Undefined   Boolean     Number     BigInt        String         Symbol
 * null   undefiend   true/false  0, 1, 12   任意大小的整数  'abc', 'ABC'   Symbol(abc)
 */

// console.log(typeof null);

// let varNull = null;
// let varNumber = 3.14;
// let varBigInt = BigInt(123);

/**
 * 原始值的不可变性
 * 
 * 不可变：数据存储在内存中，不可更改（针对于 栈内存存储）
 * 
 * 标识符     地址      栈内存
 * a         0x0001   2
 *           0x0000   1
 */

// let a = 1;
// a = 2;

// ----------------------------------------------------

/**
 * 声明变量默认被分配的值（变量的默认初始化）
 * 
 * 1. 系统默认初始化：undefined(是 JS 系统中默认分配的值)
 *    undefined 是缺省值的情况下默认分配的值。
 * 2. 手动默认初始化：声明变量与初始化都操作 
 *    var a = 1;
 *    Variable declaration + Value initialzation
 *  原则上不明确类型的引用类型缺省的时候初始化： null
 *    let obj = null; 语义化更好
 * 
 * 引用值：数据的容器
 *      { a: 1, b: 2 }
 *      { 1, 2, 3 }
 *  
 * 总结： 系统默认会对变量初始化的时候指定为原始值, 原始值的系统默认值为 undefined
 *        null 为空指针，指针位指向任何内存空间
 */

/**
 * 标识符     栈         堆
 * obj       null ->  
 * obj       0x0000    { a: 1, b: 2 }
 */

// let obj = null; // 语义化更好
// obj = { a: 1, b: 2 };


/**
 * 值的真假性 （truthy / falsy / falsey）
 * 
 * Boolean 类型是逻辑性的值： true/false -> 真假、正反、是否
 * 
 * 用 Boolean 逻辑看待值的真假性
 * 用 Boolean() 转换布尔值：true -> truthy值(真值)
 *                        false  -> falsy值(假值)
 * 
 * falsy值：false, 0/-0/0n, ""/''/``, null， undefiend, NaN
 * truthy值：除了假值以外，都是真值
 * 
 * Java: if (...返回真假...) {}
 * JavaScript: if(...返回布尔值/返回真假值...) {}
 *              if (1/true) {}
 *              if (0/false) {}
 */

// console.log(Boolean(1));
// console.log(Boolean('')); 


/**
 * 对象(引用)数据类型 （Object data types）
 * 
 * 对象是一种内存存储为引用型数据类型
 * 引用：标识符可以通过地址引用一块内存空间（具备指针特性）
 * 
 * 总结：栈内存通过地址指针寻找堆内存中的特定空间，并获取到内存存储的值
 */


/**
 * 标识符         栈内存        指针        堆
 * obj x         0x0000       -x-->       { a: 1 }  (没有引用， 垃圾回收)
 * arr           0x0001       --->       [1, 2, 3]
 * obj           0x0002       -x-->          { b: 2 }
 * obj           null         --->
 * 
 */
// let obj = { a: 1 };
// let arr = [1, 2, 3];

// obj = { a: 2 };
// obj = null; // 断开引用，不等于堆内存空间的值被删除了，需要等待垃圾回收机制回收


/**
 * 引用值(对象值)
 * Object     Array     Date      Map(WeakMap)    Set(WeakSet)    Function
 * {}         []        标准时间    {}              []              funciton() {}
 */

/**
 * 引用值的可变性
 * 
 * 标识符             栈               指针          堆
 * obj               0x0000           --->        { a: 1 }
 * 
 * 标识符             栈               指针          堆
 * obj               0x0000           --->        { a: 2 }
 */


// let obj = { a : 1 };
// obj.a = 2;


/**
 * 引用值的属性访问
 * 总结：只有引用值类型的数据才会有属性
 * 
 * {
 *    a: 1,
 *    b: 2
 * }
 * 
 * 访问属性的方法
 * 1. 点语法
 * 
 *    1. obj
 *    2. 0x0000
 *    3. ---->
 *    4. { a: 1 }
 *    5.a
 * 
 * 2. 索引法
 *    属性的key => 字符串类型的
 *    obj[key]
 */

// const obj = {
//   a: 1,
//   b: 2
// };

// 多次访问只读的属性，可以提前保存一下
// console.log(obj.a);
// console.log(obj.b);

// console.log(obj['a']);

// const arr = [1, 2, 3];

// const arrobj = {
//   0: 1,
//   1: 2,
//   2: 3
// };


/**
 * 原始值的包装特性
 * 
 * 除了 Undefined、Null 以外, 每一种基本数据类型都有对应的对象包装器
 * 
 * 对象包装器：因为只有引用类型值有访问属性的能力
 *            原始值没有属性访问的能力
 * 为了让原始值有可访问属性的能力而设计的对象转换工具
 * 
 * Boolean Number BigInt String Symbol
 */


/**
 * 
 * String -> length
 * 
 * 1.创建标识符 str
 * 2. 开辟字符串存储空间
 * 3. 将 'abc' 存储到该空间
 * 4. 将空间地址映射到标识符 str
 * 5. 代码走到 length
 * 6. new String(str) 进行包装 => { length }
 * 7. 调用 String -> length 属性
 * 8. 输出 length  => 3
 * 9. 包装对象 { length } => 销毁
 */
let str = 'abc'; //  'abc'.length
console.log(str.length);

str.len = 123;

console.log(str.len);