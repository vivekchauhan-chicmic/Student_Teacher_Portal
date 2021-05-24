import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalRoutingModule } from './internal-routing.module';
import { InternalComponent } from './internal.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [InternalComponent, MyStudentsComponent, UpdatePasswordComponent, NavbarComponent, StudentComponent, ViewProfileComponent, DashboardComponent],
  imports: [
    CommonModule,
    InternalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InternalModule { }
