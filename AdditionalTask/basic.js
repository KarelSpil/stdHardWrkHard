// Begin1. a=! P=4*a ?
var a = 8;
var P;
P = 4 * a;
console.log(P);
// Begin2. a=! S=a*^2
var a = 7;
var S;
S = a*a;
console.log(S);
// Begin3. a,b=! S=a*b, P=2(a+b)
var a;
var b;
a = 5;
b = 2;
var S = a * b;
var P = 2*(a + b);
console.log('S= ' + S);
console.log('P= ' + P);
// Begin4. d=! L=pi*d
var d;
d = 30;
var L;
var pi = 3.14;
L = pi * d;
console.log('L= ' + L);
// Begin5. a=! V= a^3 S=6*a^2
var a;
a = 3;
var V, S;
V = a * a * a;
S = 6 * (a * a);
console.log('V= ' + V);
console.log('S= ' + S);
// Begin6. a,b,c=! V=a*b*c S=2*(a*b+b*c+a*c)
var a, b, c;
a = 10;
b = 2;
c = 4; 
var V, S;
V = a * b * c;
S = 2 *((a * b) + (b * c) + (a * c));
console.log('V= ' + V);
console.log('S= ' + S);
// Begin7. R=! L=2*pi*R S=pi*R^2
var R;
R = 10;
var L, S;
var pi=3.14;
L = 2 * pi * R;
S = pi *(R * R);
console.log('L= ' + L);
console.log('R= ' + S);
// Begin8. a,b=! res= (a+b)/2
var a, b;
a = 4;
b = 2;
var res;
res = ((a + b) / 2);
console.log('Midl number = ' + res);
// Begin9.
var a, b;
a = 2;
b = 5;
var res;
res = Math.sqrt(a * b);
console.log('Geometric sqrt = ' + res);
// Begin20. we have two points with cordinats (x1,y1) and (x2,y2)
// we need find how long on this formula =sqr((x2-x1)^2+(y2-y1)^2)
var x1, y1, x2, y2;
var result;
x1 = 3;
x2 = 5;
y1 = 5;
y2 = 6;
result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
console.log(result);
// Begin21.
var x1, x2, x3, y1, y2, y3;
var geronFormul;
var a, b, c;
var p;
x1 = 14;
x2 = 15;
x3 = 19;
y1 = 45;
y2 = 23;
y3 = 34;
a = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
b = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
c = Math.sqrt(Math.pow((x1 - x3), 2) + Math.pow((y1 - y3), 2));
p = ((a + b + c) / 2);
geronFormul = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log('Полупериметр = ' + p);
console.log("Площадь по формуле Герона = " + geronFormul);
// Begin23.
var A;
var B;
var C;
var D;
A = 30;
B = 'Avocado';
C = true;
console.log(A);
console.log(B);
console.log(C);
D = B;
B = A;
A = C;
C = D;
console.log('Novie zna4enija =', A);
console.log('Novie zna4enija =', B);
console.log('Novie zna4enija =', C);
// Begin27.
var A;
var tmp;
var resultPow;
A = 4;
resultPow = A * A;
tmp = resultPow;
console.log('A^2 = ' + resultPow);
A = tmp;
resultPow = A * A;
tmp = resultPow;
console.log('A^4 = ' + resultPow);
A = tmp;
resultPow = A * A;
tmp = resultPow;
console.log('A^8 = ' + resultPow);

