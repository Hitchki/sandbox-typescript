screenlog('abcd');
var xx = ['aa', 'bb', 'cc'];
var mySearch;
mySearch = function (src, sub) {
    var result = src.indexOf(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var suchResultat;
suchResultat = mySearch('adfaf', 'f');
screenlog(suchResultat);
function createSquare(config) {
    screenlog('adf');
    var colorValue = config.color;
    return { color: colorValue, area: 2 };
}
/* function printObject(labelledObject :  {label: string, adress: string}) {
 alert(labelledObject.label);
 } */
printObject({ label: "franz" }, 8);
function printObject(labelledObject, num) {
    screenlog(labelledObject.label);
}
var numbersArray = [1, 2, null];
var num1 = undefined;
var num2 = null;
var num3 = 45;
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
;
var colorName = Color[1];
var list = ["ss", undefined];
//alert(list[1]);
function consl() {
    //alert('adfadsf');
    return;
}
screenlog(consl());
console.log(consl());
var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = new Student("Jane", "M.", "User");
/*function screenlog(toBeLogged) {
    document.body.innerHTML += '<br>' + toBeLogged;
}*/
//document.body.innerHTML = greeter(user); 
//# sourceMappingURL=handbooktest1.js.map