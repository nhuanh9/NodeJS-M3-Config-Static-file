import {Student} from "../model/Student.js";

export class StudentService {
    constructor() {
        this.listStudent = [];
        this.listStudent.push(new Student(1, 'NA', 7));
        this.listStudent.push(new Student(2, 'NAL', 8));
        this.listStudent.push(new Student(3, 'Trụ', 9));
        this.listStudent.push(new Student(4, 'NTQ', 10));
        this.listStudent.push(new Student(5, 'Hiếu', 7));
    }
    findAll() {
        return this.listStudent;
    }
    add(student) {
        this.listStudent.push(student);
    }
}
