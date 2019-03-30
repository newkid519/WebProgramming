function greet(person) {
    return ('hello, ' + person.firstName + ' ' + person.lastName);
}
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
    return Student;
}());
var user = new Student('kennyzx', 'Coder', 'HE');
document.body.innerText = greet(user);
