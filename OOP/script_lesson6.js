//Lesson 6. Task 1.
var square = {
    x1 : 2,
    y1 : 4,
    x2 : 10,
    y2 : 3,
    toString : function () {
        return 'Это прямоугольник!';
    },
    valueOf : function () {
        var a;
        var b;
        a = this.y1 - this.y2;
        b = this.x2 - this.x1;
        return (2 * (a + b));

    }
};
console.log(String(square));
console.log(Number(square));

//Lesson 6. Task 2.
var str = 'Login1,LOgin2,login3,loGin4';
str = str.toLowerCase();
console.log(str.split (','));

//Lesson 6.Task 4.
function addTwoDays (date) {
    date.setDate(2);
    console.log(date);
};
var myDate = new Date();
addTwoDays(myDate);

//Lesson 6. Task 5.
var arr = ['Джаз', 'Блюз'];
console.log(arr);
arr.push('Рок-н-Рол');
console.log(arr);
arr.reverse();
arr.splice(1, 1, 'Классика');
arr.reverse();
console.log(arr);
var firstElem = arr.shift();
console.log(arr);
console.log(firstElem);
arr.splice (0, 0, 'Рэп', 'Регги');
console.log(arr);

//Lesson 6. Task 6.
function newArray () {
    Array.call(this);
};
newArray.prototype = Object.create(Array.prototype);
newArray.prototype.constructor = newArray;

newArray.prototype.sortDesc = function (arr) {
    arr.sort();
    arr.reverse();
    return arr;
};
var na = new newArray ();
var taskSixArr = [5, 1, 4, 2, 3];
na.sortDesc(taskSixArr);
console.log(taskSixArr);

//Lesson 6. Task 7.
function deleteEvenNumbers(array) {
    array;
    function condition(value) {
        return value % 2 != 0
    }
    return array.filter(condition);
};
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr);

//Lesson 6. Task 8.
var mapArr = ['Tom', 'Sam', 'Bob'];
function addLi(value) {
    return '<li>' + value + '</li>';
};
console.log(mapArr.map(addLi));

//Lesson 6. Task 9.
function matrixToArray (matrix) {
    matrix;
    function reducer(acc, currValue) {
        return acc + ',' + currValue;
    }
    return matrix.reduce(reducer);
};
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
arr = matrixToArray(arr);
console.log(arr.split(','));

