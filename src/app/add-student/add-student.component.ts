import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {
    this.createForm();
  }

  createForm(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      marks: this.formBuilder.array([], Validators.required)
    });
  }

  get marks(): FormArray {
    return this.studentForm.get('marks') as FormArray;
  }

  addMark(): void {
    this.marks.push(this.formBuilder.control('', Validators.required));
  }

  removeMark(index: number): void {
    this.marks.removeAt(index);
  }

  addStudent(): void {
    if (this.studentForm.invalid) {
      return;
    }

    const student: Student = {
      name: this.studentForm.value.name,
      marks: this.studentForm.value.marks
    };

    this.calculateGPA(student);

    this.studentService.addStudent(student);
    this.studentForm.reset();
  }

  calculateGPA(student: Student): void {
    const totalSubjects = student.marks.length;
    const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / totalSubjects;
    student.gpa = this.calculateGPAFromAverage(average);
  }

  calculateGPAFromAverage(average: number): number {

    if (average >= 90) {
      return 4.0;
    } else if (average >= 80) {
      return 3.5;
    } else if (average >= 70) {
      return 3.0;
    } else if (average >= 60) {
      return 2.5;
    } else {
      return 2.0;
    }
  }
}
