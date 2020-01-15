"use strict";
// 布尔 boolean
var isDone = false;
console.log(isDone);
// 数值 number
var decLiteral = 6;
console.log(decLiteral);
// 字符串 string
var name = 'bob';
console.log(name);
// 数组 array
var list = [1, 2, 3];
console.log(list);
var list2 = [1, 2, 3];
// 元组 tuple
var x = ['hello', 10];
console.log(x);
// 当访问一个已知索引的元素，会得到正确的类型
// 当访问一个越界元素，会使用联合类型替代
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[1];
// Any
var notSure = 4;
notSure = 'maybe a string';
notSure = false;
var list3 = [1, 'string', false];
// Void
function warnUser() {
    console.log('no return ');
}
var unusable = undefined;
// null undefined
var u = undefined;
// never
// object
// 类型断言
var someValue = 'this is a string';
var strLength = someValue.length;
var strLength2 = someValue.length;
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'size 10 object' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
module.exports = {};
