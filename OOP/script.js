//Lesson 1. Task 1.
'use strict';
var user = {
    name : 'Cris',
    surname : 'Simons'
};
console.log(user.name);
user.name = 'Brain';
console.log(user.name);
delete user.name
console.log(user.name);

//Lesson 1. Task 2.
//Упрощенный

var car = {
    model : 'Renault',
    speed : 160,
    run : function () {
        console.log(car.model + ' едет со скоростью ' + car.speed);
    },
    stop : function () {
        console.log(car.model + ' остановилась');
    }
};
car.run();
car.stop();
//Стандартный

var car = {};
    car.model = 'Renault';
    car.speed = 160;
    car.run = function () {
        console.log(car.model + ' едет со скоростью ' + car.speed);
    };
    car.stop = function () {
        console.log(car.model + ' остановилась');
    };
car.run();
car.stop();
// Синтаксис массивов

var car = {};
    car['model'] = 'Renault';
    car['speed'] = 160;
    car['run'] = function () {
        console.log(car.model + ' едет со скоростью ' + car.speed);
    };
    car['stop'] = function () {
        console.log(car.model + ' остановилась');
    };
car['run']();
car['stop']();

//Lesson 1. Task 3.
var tv = {
    currentChannel : 1,
    nextChannel : function(){
        tv.currentChannel++;
    },
    previousChannel : function(){
        tv.currentChannel--;
    },
    setChannel : function(number){
        tv.currentChannel = number;
    }
};
console.log(tv.currentChannel); 
tv.setChannel(3);
console.log(tv.currentChannel);

//Lesson 1. Task 4.
var mp3 = {
    brand : 'Apple',
    model : 'iPod',
    codeName: 'Nano',
    memory : 16,
    haveDisplay: true,
    battery : 600,
    state : 'off',
    powerOn : function(){
        mp3.state = 'on'
    }
};
console.log(mp3.state);
mp3.powerOn();
console.log(mp3.state);

//Lesson 1. Task 5.
var peoples = {
    developers : [
        {
            name : 'John',
            age : 28,
            expirience : 1,
            languages : ['Java', 'JavaScript', 'SQL']
        }, {
            name : 'Bill',
            age : 30,
            expirience : 5,
            languages : ['HTML', 'CSS', 'JavaScript']
        }, {
            name : 'Mike',
            age : 32,
            expirience : 4,
            languages : ['Phyton', 'SQL']
        }
    ]
};
console.log(peoples.developers[1].name);

//Lesson 1. Task 6.
function isEmpty(obj){
    for (var key in obj){
        return console.log("false");
    };
    return console.log("true");
};

var testPoint = {
    name: 1
}; 

isEmpty(testPoint);

//Lesson 1. Task 7.
// var salaries = {
//     John : 100,
//     Bill : 300,
//     Mike : 250
// };

var salaries = {
    John : 400,
    Cris : 150,
    Brain : 600,
    Bill : 300,
    Mike : 50
};
var temp = 0;
var res;
for (var key in salaries){
    temp += salaries[key];
    res = temp / (Object.keys(salaries).length)
};
console.log('Средняя зарплата = ' + res);

//```````````````````````````````````````````````````````
//```````````````````Lesson 2````````````````````````````
//Lesson 2. Task 1.
var calculator = {
    read : function (){
        this.firstNumber = Number(prompt('Введите первое число', 0));
        this.secondNumber = Number(prompt('Введите второе число', 0));
    },
    sum : function (){
        return this.firstNumber + this.secondNumber;
    },
    mul : function (){
        return this.firstNumber * this.secondNumber;
    }
};
calculator.read();
console.log('Cумма sum() =', calculator.sum());
console.log('Произведение mul() =', calculator.mul());


//Lesson 3. Task 1.
//Метод bind
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"
//Анонимную функцию обвертку
var user = {
   name: "Tom",
   useFormat :  format
};
function format (beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
};
var tomFormat = function(){
	user.useFormat("<<<", ">>>")
};
tomFormat(); // "<<<Tom>>>"

//Lesson 3. Task 2.
function mul(a, b) {
   return a * b;
}
var doubleMul = mul.bind(null, 2);// Ваш код
var qudraMul = mul.bind(null, 4);// Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20

//Lesson 3. Task 3.
function bind(func, context) {
   return function() {
   	return func.call(context, arguments)
   };
};
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"
