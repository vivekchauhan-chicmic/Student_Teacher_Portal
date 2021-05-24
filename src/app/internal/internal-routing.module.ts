import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternalComponent } from './internal.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { StudentComponent } from './student/student.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  {
    path: '', component: InternalComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
      { path: 'mystudents', component: MyStudentsComponent, canActivate: [AuthGuard] },
      { path: 'updatepassword', component: UpdatePasswordComponent },
      { path: 'viewprofile', component: ViewProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
