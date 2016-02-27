screenlog('abcd');

interface StringArray {
    [index: number]: string;
}

var xx : StringArray = ['aa' , 'bb', 'cc'] ;


interface SearchFunction {
    (source: string, substring: string) : boolean;
}

var mySearch : SearchFunction;
mySearch = function(src: string, sub: string) {
    var result = src.indexOf(sub);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}

var suchResultat: boolean;

suchResultat = mySearch('adfaf', 'f');
screenlog(suchResultat);

interface SquareConfig {
    color?: string;
    width?: number;
    area: number;
}

function createSquare(config: SquareConfig) : SquareConfig {
    screenlog('adf');
    var colorValue = config.color;
    return { color: colorValue, area: 2};
}

/* function printObject(labelledObject :  {label: string, adress: string}) {
 alert(labelledObject.label);
 } */

printObject({label: "franz"}, 8);

interface ILabledObject {
    label: string;
    adress?: string;
}

function printObject(labelledObject :  ILabledObject, num: number) {
    screenlog(labelledObject.label);
}

var numbersArray  :Array<number> = [1,2,null];
var num1 : number = undefined;
var num2 : number = null;
var num3 : number = 45;

enum Color {red = 1, green = 2, blue = 4 };
var colorName : string = Color[1];

var list : Array<string> = ["ss", undefined];
//alert(list[1]);

function consl() : void {
    //alert('adfadsf');
    return;
}

screenlog(consl());
console.log(consl());


class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");

/*function screenlog(toBeLogged) {
    document.body.innerHTML += '<br>' + toBeLogged;
}*/

//document.body.innerHTML = greeter(user);