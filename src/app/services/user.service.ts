import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/environments/environment';
import { API_URL } from '../constant';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private HttpService: HttpService,
    private router: Router,
  ) { }

  isAdminRights(): boolean {
    return false;
  }

  loginUser(data) {
    return this.HttpService.postData(`${API_URL.LOGIN}`, data)
  }

  registerUser(data) {
    return this.HttpService.postData(`${API_URL.REGISTER}`, data)
  }

  getStudents(data?) {
    return this.HttpService.getData(`${API_URL.GET_STUDENTS}`, data)
  }

  addStudents(data) {
    return this.HttpService.postData(`${API_URL.ADDSTUDENT}`, data)

  }
  removeStudents(data) {
    return this.HttpService.postData(API_URL.REMOVESTUDENT, data);

  }

  viewProfile() {
    return this.HttpService.VIEWPROFILE(API_URL.VIEWPROFILE);
  }

  MyStudents() {
    return this.HttpService.MyStudents(API_URL.GET_STUDENT)
  }

  updatePassword(data) {
    console.log('inside userservice');

    return this.HttpService.putData(API_URL.UPDATEPASSWORD, data)

  }

}




