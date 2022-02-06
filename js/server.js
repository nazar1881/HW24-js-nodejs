const serverStudent = require('./student')
const serverTeacher = require('./teacher')

const student = new serverStudent.Student('Vasya', 21, 'male', 'Sport');
const teacher = new serverTeacher.Teacher('Borys', 47, 'male', 'Chess', 'math');

console.log(student);
console.log(teacher);

student.aboutMe();
teacher.aboutMe();