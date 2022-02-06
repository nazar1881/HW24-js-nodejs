const teacher = require('./person.js')

class Teacher extends teacher.Person {
    constructor(name, age, gendor, interests, subject) {
        super(name, age, gendor, interests);
        this.subject = subject;
    }
    aboutMe() {
        console.log(`Hello i am a teacher, my name is ${this.name}. I am ${this.age} years old, my hobby is ${this.interests}. I teach ${this.subject}`);
    }
}
exports.Teacher = Teacher;