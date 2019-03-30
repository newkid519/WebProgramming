function greet(person : Person) {
    return ('hello, ' + person.firstName + ' ' + person.lastName);
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleName : string, public lastName : string) {
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
}

let user = new Student('kennyzx', 'Coder', 'HE');

document.body.innerText = greet(user);

interface Person {
    firstName : string,
    lastName : string
}


