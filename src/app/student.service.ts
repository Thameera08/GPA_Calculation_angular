import { AddStudentComponent } from './add-student/add-student.component';
import { Injectable } from '@angular/core';
import{Student}from './student.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students:Student[]=[];

  constructor() { }

  getStudents(): Observable<Student[]>{
    return of(this.students);
  }

  addStudent(student:Student):void{
    this.students.push(student);
  }
}
