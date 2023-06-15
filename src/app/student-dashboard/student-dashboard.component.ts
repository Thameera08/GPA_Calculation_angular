import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentsWithGPAs();
  }

  getStudentsWithGPAs(): void {
    this.studentService.getStudents()
      .subscribe(students => {
        this.students = students.filter(student => student.gpa !== undefined);
        this.sortStudentsByGPA();
      });
  }

  sortStudentsByGPA(): void {
    //this.students.sort((a, b) => b.gpa - a.gpa);
  }
}
