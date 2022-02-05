const teacher = require('./person.js')

class Teacher extends teacher.Person {
    constructor(name, age, gendor, interests, subject) {
        super(name, age, gendor, interests);
        this.subject = subject;
    }
}
exports.Teacher = Teacher;