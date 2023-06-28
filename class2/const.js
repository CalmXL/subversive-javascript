/**
 * const => constant 
 * con + stant
 * con: come => 一起全部
 * stant: stand
 * constant => 状态不变
 * 
 * const: 常量（常数变量）
 */

/**
 * const 与 let  比较不同点：
 * 1. 必须手动初始化
 * 2. 在初始化后，不可改变其值
 */
// Uncaught SyntaxError: Missing initializer in const declaration
// 未捕获的语法错误: 
// 在 const 声明中，丢失初始化器

// const a; 
// a = 1;

const a = 1;

// Uncaught TypeError: Assignment to constant variable
// 未捕获的类型错误：常数变量赋值
// 常量是只读的
a = 2;

/**
 * 书写：
 * 常量一般使用全大写，单词之前用下划线进行分隔
 * 1. 所有不能变更的或者不能变更都应该使用 const 
 * 2. 只有后续需要变更的值的量使用 let 
 * 3. var 尽量不使用
 */