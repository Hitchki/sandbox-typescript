"use strict";
screenlog('handbook-classes');

class Animal {
    name:string;
    constructor(theName:string) { this.name = theName;}
    move(meters: number = 0) {
        screenlog(this.name + " moved " + meters + " m.");
    }
}

class Snake extends Animal {
    name: string;
    constructor(theName:string) { super(theName)};
    move(meters = 5) {
        screenlog('Slithering...');
        super.move(meters);
    }
}

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