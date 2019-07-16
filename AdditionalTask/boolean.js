// // Boolean1,2,3
// var A;
// A = 346;
// // number is positive
// console.log(A >= 0); 
// // number is odd
// var oddd;
// oddd = A % 2;
// console.log(Boolean(oddd));
// // number is even
// console.log(!Boolean(oddd));

// // Boolean4,5.
// var A;
// var B;
// A = 1;
// B = -3;
// console.log(A > 2 && B <= 3);
// console.log(A >= 0 && B < -2);

// //Boolean6,7.
// var A, B, C;
// A = 13;
// B = 130;
// C = 200;
// console.log(A < B && B < C && A < C); //A<B<C
// console.log(A < B && B < C); //B between A & C

// // Boolean8,9,10,11.
// var A, B;
// A = 35;
// B = 24;
// console.log(Boolean((A % 2) && (B % 2))); //A & B  is odd
// console.log(Boolean((A % 2) || (B % 2))); //A or B is odd
// console.log(Boolean((A % 2 == 1) && (B % 2 == 0)));//A odd B even
// var res1;
// var res2;
// res1 = A % 2;
// res2 = B % 2;
// console.log(res1 == res2); // numbers A and B, have the same parity 

//Boolean12,13,14,15.
var A, B, C;
A = -123;
B = -2;
C = 0;
console.log(A >= 0 && B >= 0 && C >= 0);//All numbers is positive
console.log(A >= 0 || B >= 0 || C >= 0);//A or B or C is positive
var res1;
var res2;
var res3;
res1 = (A >= 0 && B < 0 && C < 0);
res2 = (B >= 0 && A < 0 && C < 0);
res3 = (C >= 0 && B < 0 && A < 0);
console.log(res1);
console.log(res2);
console.log(res3);
var resR1, resR2, resR3;
resR1 = (res1 == 1 && res2 == 0 && res3 == 0)
resR2 = (res1 == 0 && res2 == 1 && res3 == 0)
resR3 = (res1 == 0 && res2 == 0 && res3 == 1)
console.log(resR3);
console.log(resR1 && resR2 && resR3);
