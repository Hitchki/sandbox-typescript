/**
 * Created by ratna on 24.02.2016.
 */
var Animal = (function () {
    function Animal() {
    }
    ;
    Animal.prototype.sayHello = function () { alert("hello"); };
    return Animal;
})();
var animal1 = new Animal();
animal1.sayHello();
//# sourceMappingURL=test.js.map