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
/* Напишите функц mul(), которая принемает любое колво парам разного типа и возвращает произвед параметров типа Number.
Если парам типа Number отсутствуют, возвращает число 0.
Нельзя использовать arguments, но в функцию можно добавить один парам.
разобрать эту ерунду с Максом */

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

