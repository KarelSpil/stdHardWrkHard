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
