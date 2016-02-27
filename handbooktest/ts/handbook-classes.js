"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
screenlog('handbook-classes');
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        screenlog(this.name + " moved " + meters + " m.");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(theName) {
        _super.call(this, theName);
    }
    ;
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        screenlog('Slithering...');
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);
var sam = new Snake("Sammy the Python");
sam.move();
/*interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;


interface ClockInterface {
    currentTime: Date;
    //constructor (h: number, m: number);
}

class clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {};
}*/
/*function screenlog(toBeLogged) {
    document.body.innerHTML += '<br>' + toBeLogged;
}*/
//document.body.innerHTML = greeter(user); 
//# sourceMappingURL=handbook-classes.js.map