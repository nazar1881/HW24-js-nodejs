const serverStudent = require('./student')
const serverTeacher = require('./teacher')

const stud = new serverStudent.Student('Vasya', 21, 'male', 'sport');
const teacher = new serverTeacher.Teacher('Borys', 47, 'male', 'Chess', 'math');

console.log(stud);
console.log(teacher);