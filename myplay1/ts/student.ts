class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person1 {
    firstname: string;
    lastname: string;
}

function greeter1(person : Person1) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user1 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter1(user1);
