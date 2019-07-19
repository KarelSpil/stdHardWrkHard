function task1() {
    var number;
    number = Number(prompt('Введите любое целое число', '10'));
    if (number > 0) {
        number += 1;
    } else if (number < 0) {
        number -= 2;
    } else {
        number = 10;
    }
    console.log(number);
};

function task2() {
    var number;
    number = Number(prompt('Введите любое целое число', '10'));
    if (number > 0 && number % 2 == 0) {
        console.log('положительное четное');
    } else if (number > 0 && number % 2 == 1) {
        console.log('положительное нечетное');
    } else if (number < 0 && number % 2 == -1) {
        console.log('отрицательное нечетное');
    } else if (number < 0 && number % 2 == 0) {
        console.log('отрицательное четное');
    } else if (number === 0) {
        console.log('нулевое число')
    }
};

function task4 () {
    var k = Number(prompt('Введите оценку от 1-5', '3'));
    switch (k) {
        case 1:
            console.log('плохо');
            break;
        case 2:
            console.log('неудовлетворительно');
            break;
        case 3:
            console.log('удовлетворительно');
            break;
        case 4:
            console.log('хорошо');
            break;
        case 5:
            console.log('отлично');
            break;
        default:
            console.log('ошибка');
            break;
    } 
};

function task5 () {
    var a;
    var b;
    a = 13;
    b = 6;
    while (a >= b) {
        a -= b;
    }
    console.log('Длинна не занятой части отрезка а = ' + a);
};

function task6 () {
    var n = Number(prompt('input number (N > 0)', '133'));
    var res;
    do {
        res = n % 10;
        n /= 10;
        console.log(parseInt(res));
    } while (n >= 1);
};

function task7 () {
    var a;
    var b;
    a = 1;
    b = 3;
    var sum = 0;
    for (var i = a; i <= b; i++) {
        sum += i;
    }
    console.log(sum);
};

function task8 () {
    var n = 3;
    var res = 1;
    for (var i = 1; i <= n; i++){
        res *= i;
    }
    console.log(res);
};

// function task9 () {
//     var arr = [];
//     var i = 0;
//     var sum = 0;
//     arr[i] = Number(prompt('vvedi number', ''));
//     while (i < arr.length){
//         if (arr[i]) {
//             arr[i] = Number(prompt('vvedi number', ''));
//             console.log(arr);
//         } else if (arr[i] == null) {
//             break;
//         } else if (arr[i] == 0){
//             break;
//         }
//         sum += arr[i];
//         i++;
//     }
//     console.log(sum);
// };
// task9();



// function veryHardForMe() {
//     var arr = [];
//     var i = 0;
//     var sum = 0;
//     var numb;
    
//     while ( i < arr.length) {
//         arr[i] = prompt('djfk','');
//         sum += arr[i];
//         i++;
//     }
//     console.log(sum);
// };
// veryHardForMe();
