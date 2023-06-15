import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './studetlist/studetlist.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/students', pathMatch:'full'},
  {path: 'student', component:StudentListComponent},
  {path: 'add-student', component:AddStudentComponent},
  {path: 'student-dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
