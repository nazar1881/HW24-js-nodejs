const student = require('./person.js')

class Student extends student.Person {
    aboutMe() {
        console.log(`Hello i am a student, my name is ${this.name}. I am ${this.age} years old, my hobby is ${this.interests}`);
    }
}
exports.Student = Student;