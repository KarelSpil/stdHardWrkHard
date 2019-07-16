// Задание 1. дана сторона квадрата а нужно найти его площадь
var a;
a = 5;
var s;
s = a * a;
console.log( "Площадь квадрата S = " + s );

// Задаине 2. Двузначное число разбрать по чисельно
var g;
g = Number(prompt("Введите двухзначное число", '66'));
var r;
var l;
r = g % 10;
console.log("Правое число = " + r);
l = (g-(g % 10))/10
console.log("Левое число = " + l);

// Задание 3. проверить истинность высказывания.
var a;
var b;
a = 5;
b = 8;
console.log(a > 2);
console.log(b <= 3);

// Задание 4. дано 3 целых числа проверьте истинность a<b<c
var a, b, c;
a = 56;
b = 12;
c = 89;
console.log( a < b && b < c);

// Задание 5.Истинность что число нечетное трехзначное. 
var  h;
h = 111;
var n2; //Проверяем число на нечетность
n2 = ((h % 10) % 2);
var t3; //Проверяем число на трехзначность
t3 = (99 >h || h < 1000);
console.log((n2 != 0) && t3);

// Задание 6
var x = 1;
var y = 2;

var res1 = String(x) + y;
console.log(res1); //"12"
console.log(typeof res1); //string

var res2 = Boolean(x) + String(y);
console.log(res2); //"true2"
console.log(typeof res2); // string

var res3 = Boolean(x + y);
console.log(res3); // true
console.log(typeof res3); // boolean

var res4 = "x" * y;
console.log(res4); // NaN
console.log(typeof res4); // nuber

// Задание 7. Массивы
var newArr = [];
newArr[0] = 3;
newArr[1] = 'bananas';
newArr[2] = true;
newArr[3] = null;
console.log(newArr.length);
var newArrElement = prompt("Enter 5th element in array", "Jhonny");
newArr[4] = newArrElement;
console.log(newArr[4]);
console.log(newArr);
