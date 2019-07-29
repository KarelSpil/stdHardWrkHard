//Task1. rewright function (Function Expression)
var add = function (x, y) {
    return x + y;
}
console.log(add(1, 5));

//Task2. 
function createArrayIterator (array) {
    var numberOfArrayElement = 0;
    return function () {
        return array[numberOfArrayElement++];
    }
};
var arr = [4, 2, 9];
var itr = createArrayIterator(arr);
console.log(itr()); //4
console.log(itr()); //2
console.log(itr()); //9
console.log(itr()); //undefined

//Task3. 
function createSafeSquareAreaAndPerimiter () {
    var height = 0;
    var width = 0;
    var arr = [];
    arr[0] = function (newNum) {
        if (newNum > 0 || newNum == Number) {
            height = newNum;
        } else {
            console.log('error: this is not a number');
        };
    };
    arr[1] = function (newNum) {
        if (newNum > 0 || newNum == Number) {
            width = newNum;
        }else {
            console.log('error: this is not a number');
        };
    };
    arr[2] = function () {
        return SquareArea = height * width;
    };
    arr[3] = function () {
        return Perimiter = ((height + width) * 2);
    };
    return arr;
};

var result = createSafeSquareAreaAndPerimiter();
result[0](2);
result[1](5);
console.log([result[2](), result[3]()]);

//Task4.

function digitSum (k){
    if (k > 0){
        k = k % 10 + digitSum(Math.floor(k / 10));
    };
    return k;
};
var res = digitSum(1234);
console.log(res);

//Task5.

function format(data, type){
    if (type=="number"){
        format = function (){
	    return Number(data);
	};
    } else if (type=="string"){
	format = function (){
	    return String(data);
	};
    } else if (type=="boolean"){
	format = function (){
	    return Boolean(data);
	};
    } else {
	return data;
    };
};

var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
