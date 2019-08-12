'use strict';

//Lesson 4. Task 3.
function Mp3 (brand, model, codeName, memory, haveDisplay, battery) {
    this.brand       = brand;
    this.model       = model;
    this.codeName    = codeName;
    this.memory      = memory;
    this.haveDisplay = haveDisplay;
    this.battery     = battery;
    this.__state     = 'off';
    this.track       = 'Beyonce - Halo'
};
Mp3.prototype.powerOn = function () {
    this.__state = 'on';
    console.log('Hi your ' + this.brand + ":" + this.model + " is " + this.__state);
};
Mp3.prototype.powerOff = function () {
    this.__state = 'off';
    console.log('Your ' + this.brand + ":" + this.model + " is " + this.__state);
};
Mp3.prototype.playMusic = function () {
    console.log('Now play : ' + this.track);
};
Mp3.prototype.stopMusic = function () {
    console.log(this.track + ' : stop play');
};

var ipod = new Mp3 ('Apple', 'ipod', 'Nano', 8, true, 400);
ipod.powerOn();

//Lesson 4. Task 4.
function GeometricalFigure () {
    this._figureCenterX = 0;
    this._figureCenterY = 0;
    this._figureCenter = [];
};
GeometricalFigure.prototype.__isCorrectData = function (value) {
    if (typeof value == 'number' && !isNaN(value)) {
        return true;
    }
    return false;
};
GeometricalFigure.prototype.setFigureCenterX = function (value){
    if ( this.__isCorrectData (value) ) {
        this._figureCenterX = value;
    }
};
GeometricalFigure.prototype.setFigureCenterY = function (value){
    if ( this.__isCorrectData (value) ) {
        this._figureCenterY = value;
    }
};
GeometricalFigure.prototype.getFigureCenter = function () {
    return this._figureCenter = [this._figureCenterX, this._figureCenterY];
};

var newFigure = new GeometricalFigure();

// Square Figure
function SquareFigure () {
    GeometricalFigure.call(this);
    this._sideLeghtSquare = 0;
    this._diagonalSquare = null;
};
SquareFigure.prototype = Object.create(GeometricalFigure.prototype);
SquareFigure.prototype.constructor = SquareFigure;

SquareFigure.prototype.setSideLeghtSquare = function (value) {
    if ( this.__isCorrectData (value) ) {
        this._sideLeghtSquare = value;
    }
};
SquareFigure.prototype.getdiagonalSquare = function () {
    return this._diagonalSquare = this._sideLeghtSquare * Math.SQRT2;
};
SquareFigure.prototype.info = function () {
    var allProperty = {
        figureCenterX : this._figureCenterX,
        figureCenterY : this._figureCenterY,
        figureCenter : this._figureCenter,
        sideLeghtSquare : this._sideLeghtSquare,
        diagonalSquare  : this._diagonalSquare
    };
    console.dir(allProperty);
}
var square = new SquareFigure();
// Circle  Figure
function CircleFigure () {
    GeometricalFigure.call(this);
    this._diagonalCircle = null;
    this._radiusCircle = null;
};
CircleFigure.prototype = Object.create(GeometricalFigure.prototype);
CircleFigure.prototype.constructor = CircleFigure;

CircleFigure.prototype.setDiagonalCircle = function (value) {
    if ( this.__isCorrectData (value) ) {
        this._diagonalCircle = value;
    }
};
CircleFigure.prototype.getRadiusCircle = function () {
    return this._radiusCircle =  this._diagonalCircle / 2;
};
CircleFigure.prototype.info = function () {
    var allProperty = {
        figureCenterX : this._figureCenterX,
        figureCenterY : this._figureCenterY,
        figureCenter : this._figureCenter,
        diagonalCircle : this._diagonalCircle,
        radiusCircle  : this._radiusCircle
    };
    console.dir(allProperty);
}
var circle = new CircleFigure();

