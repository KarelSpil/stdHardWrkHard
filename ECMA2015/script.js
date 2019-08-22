"use strict";

//Lesson 1. Task 1.
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y,,...z] = arr;
console.log(x);
console.log(y);
console.log(z);

//Lesson 1. Task 2.
let names = {
    first  : "Tom",
    second : "Sam",
    third  : "Ray",
    fourth : "Bob"
};
let {first : f, third : xi, fifth = "Name №5"} = names;
console.log(f);
console.log(xi);
console.log(fifth);

//Lesson 1. Task 3.
let data = {
    names : ["Sam", "Tom", "Ray", "Bob"],
    ages : [20, 24, 22, 26],
};
let {names : [name1, name2, name3, name4], ages : [age1, age2, age3, age4]} = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

//Lesson 1. Task 4.
function mul (...all) {
    let newArr = all.filter(function(number){
        if (typeof number == "number"){
            return number;		
        };
    });
    let res = 1;
    if (typeof newArr[0] == "number"){
        function mult (value) {
            return res *= value;
        };
        newArr.forEach(mult);
        return res;
    } else if (typeof newArr[0] != "number"){
        return res = 0;
    };
};
console.log(mul(1, 'str', 2, 3, true));
console.log(mul(null, 'str', false, true));

//Lesson 2. Task 1.
let tv = {
    currentChannel : 0,
    nextChannel () {
        this.currentChannel = ++this.currentChannel;
        console.log(this.currentChannel);
    },
    previousChannel () {
        this.currentChannel = --this.currentChannel;
        console.log(this.currentChannel);
    },
    setChannel (number) {
        this.currentChannel = number;
        console.log(this.currentChannel);
    }
};
let t = tv;
t.nextChannel();
t.setChannel(78);

//Lesson 2. Task 2.
let mp3 = {
    _barand : 'Apple',
    _status : false,
    _memory : 16,
    getStatus () {
        return this._status;
    },
    on () {
        this._status = true;
    },
    off () {
        this._status = false;
    }
};
let m = mp3;
console.dir(m);
console.log(m.getStatus());
m.on();
console.log(m.getStatus());

//Lesson 2. Task 3.
class Tv {
    constructor(){
    this.currentChannel = 0;
    }
    nextChannel () {
        this.currentChannel = ++this.currentChannel;
    }
    previousChannel () {
        this.currentChannel = --this.currentChannel;
    }
    setChannel (number) {
        this.currentChannel = number;
    }
};
const ti = new Tv();

class Mp3 {
    constructor (name){
    this._barand = name;
    this._status = false;
    this._memory = 16;
    }
    getStatus () {
        return this._status;
    }
    on () {
        this._status = true;
    }
    off () {
        this._status = false;
    }
};
const mp = new Mp3("Sony");



