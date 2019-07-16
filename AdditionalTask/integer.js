//Integer1. Данна длина в см, найти сколько полных метров. Деление на цело.
var L;
L = 860;
var res = L / 100;
console.log("Polnih metrov = ", parseInt(res));

//Interger2.Данна вес в кг, найти сколько полных тонн. Деление на цело.
var M;
M = 1200;
var res = M / 1000;
console.log("Polnih tonn = ", parseInt(res));

//Interger3.Данна вес файла в байтах, найти сколько клбай файл. Деление на цело.
var bite;
bite = 86546;
var kbite = bite / 1024;
console.log("Kbite  = ", parseInt(kbite));

//Interger4&5. Данно два отрезка A>B. Найти сколько раз отрезок B поместиться на
// отрезке A. И определить не занятое место на отрезке А.
var A;
var B;
A = 43;
B = 5;
console.log("Количество отрезков B на отрезке A = " + parseInt(A / B));
console.log("Свободно места отрезке A = " + parseInt(A % B));

// Interger6,7,8. Данно Двухзначное число разобрать его по числам, получить сумму, произведение этих чисел.
// поменять местами данные числа
var numb;
numb = 68;
console.log('Left part number = ' + parseInt(numb /10));
console.log('Right part number = ' + (numb % 10));
console.log('Summ part of number = ' + (parseInt(numb /10) + (numb % 10)));
console.log('Multiplication part of number = ' + (parseInt(numb /10) * (numb % 10)));
console.log('Swype part of number = ' + String(numb % 10) + String(parseInt(numb /10)));

// Interger9,10,11,12,13,14,15,16. We have three-digit number, show must go on xD
var numbThird;
numbThird = 385;
// First  part of  these number
console.log(parseInt(numbThird / 100));
// Second part of  these number
console.log(parseInt((numbThird % 100) / 10));
// Third part of  these number
console.log(numbThird % 10);
// Sum of these numbers
var firstNumber, secondNumber, thirdNumber;
firstNumber  = parseInt(numbThird / 100);
secondNumber = parseInt((numbThird % 100) / 10);
thirdNumber  = numbThird % 10;
console.log(firstNumber + secondNumber + thirdNumber);
// Multiplying these numbers
console.log(firstNumber * secondNumber * thirdNumber);
// Mirror of these number
console.log(String(thirdNumber)+ String(secondNumber) + String(firstNumber));
// First number move to the end
console.log(String(secondNumber) + String(thirdNumber) + String(firstNumber));

// Interger17,18. We have number more 999.
var number4th;
number4th = 34567;
// print the number of hundreds
var res = number4th % 1000;
console.log(parseInt(res / 100));
// print the number of thouthends
var res = number4th / 1000;
console.log(parseInt(res));

// Integer19,20,21,22,23. С начала суток прошло прошло N сек.(целое число)
//  1 hour = 60 min = 60 * 60 sec
//  1 hour = 3600 sec
var N;
N = 4504;
var result;
// Кол-во минут с начала суток.
result = N / 60;
console.log(parseInt(result));
// Кол-во часов с начала суток.
result = (N / 60) / 60;
console.log(parseInt(result));
// Кол-во сек с начала последней минуты.
result = N % 60;
console.log(parseInt(result));
// Кол-во сек с начала последней часа.
result = N % 3600;
console.log(parseInt(result));
// Кол-во мин с начала последней часа.
result = (N / 60) % 60;
console.log(parseInt(result));

// Integer24,25,26,27,28. we have Arr['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].
var Arr = [];
Arr[0] = 'monday';
Arr[1] = 'tuesday';
Arr[2] = 'wednesday';
Arr[3] = 'thursday';
Arr[4] = 'friday';
Arr[5] = 'saturday';
Arr[6] = 'sunday';
console.log(Arr);
var K;
K = 1; //1-365 days
var res;
// 1st janury monday
res = ((K % Arr.length) - 1);
console.log(Arr[res]);
// 1st janury thursday
// Arr[7] = Arr[3];
// Arr[8] = Arr[4];
// Arr[9] = Arr[5]; 
// Arr[3] = Arr[6];
// Arr[4] = Arr[0];
// Arr[5] = Arr[1];
// Arr[6] = Arr[2]; 
// Arr[0] = Arr[7];
// Arr[1] = Arr[8];
// Arr[2] = Arr[9];
// console.log(Arr);
// res = ((K % Arr.length) - 1);
// console.log(Arr[res]);

