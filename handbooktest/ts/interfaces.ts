"use strict";

//http://stackoverflow.com/questions/25340601/typescript-hybrid-type-implementation

interface stringArray {
    [index: number]: string;
}

var myArray : stringArray;
myArray = ["franz", "karl"];

screenlog(myArray);

interface Dictionary {
    [index:string]: any;
    length: number;
}

var myDictionary : Dictionary;
//myDictionary.length1 = 5;
myDictionary = ["franz1", "karl1"];

screenlog(myArray);
console.log(myDictionary + ' length: ' + myDictionary.length);

//console.log(myDictionary.l);

var myArr : string[] = ["franz2", "karl2"];

console.log(myArr + ' length: ' + myArr.length);

function screenlog(toBeLogged) {
    document.body.innerHTML += '<br>' + toBeLogged;
}

interface Counter {
    (start:number): string;
    interval: number;
    reset(): void;
}

var counter = function getCounter(start:number):Counter{
    var counter = <Counter>function(start:number){};
    counter.interval = 123;
    counter.reset = function(){};
    return counter;
}

var countFunc = counter(1);

console.log(countFunc);
console.log(counter);


/*counter.reset();
counter.interval = 5.0;

counter(10);*/
