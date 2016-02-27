var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greeter1(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user1 = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter1(user1);
//# sourceMappingURL=student.js.map