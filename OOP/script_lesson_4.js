'use strict';

//Lesson 4. Task 3.
function Mp3 (brand, model, codeName, memory, haveDisplay, battery) {
    this.brand       = brand;
    this.model       = model;
    this.codeName    = codeName;
    this.memory      = memory;
    this.haveDisplay = haveDisplay;
    this.battery     = battery;
    this.__state       = 'off';
    this.track         = 'Beyonce - Halo'
};
Mp3.prototype.powerOn = function () {
    this.state = 'on';
    console.log('Hi your ' + this.brand + ":" + this.model + " is " + this.state);
};
Mp3.prototype.powerOff = function () {
    this.state = 'off';
    console.log('Your ' + this.brand + ":" + this.model + " is " + this.state);
};
Mp3.prototype.playMusic = function () {
    console.log('Now play : ' + this.track);
};
Mp3.prototype.stopMusic = function () {
    console.log(this.track + ' : stop play');
};

var ipod = new Mp3 ('Apple', 'ipod', 'Nano', 8, true, 400);
ipod.powerOn();