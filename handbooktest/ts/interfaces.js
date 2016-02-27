"use strict";
var myArray;
myArray = ["franz", "karl"];
screenlog(myArray);
var myDictionary;
//myDictionary.length1 = 5;
myDictionary = ["franz1", "karl1"];
screenlog(myArray);
console.log(myDictionary + ' length: ' + myDictionary.length);
//console.log(myDictionary.l);
var myArr = ["franz2", "karl2"];
console.log(myArr + ' length: ' + myArr.length);
function screenlog(toBeLogged) {
    document.body.innerHTML += '<br>' + toBeLogged;
}
var counter = function getCounter(start) {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
};
var countFunc = counter(1);
console.log(countFunc);
console.log(counter);
/*counter.reset();
counter.interval = 5.0;

counter(10);*/
//# sourceMappingURL=interfaces.js.map