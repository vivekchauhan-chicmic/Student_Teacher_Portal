import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  title = 'StudentTeacherPortal';

  regForm: FormGroup;
  submitted = false;
  loading = false;


  constructor(private formbuilder: FormBuilder, private UserService: UserService, private router: Router) { }


  ngOnInit() {
    this.regForm = this.formbuilder.group({
      gender: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      secretKey: ['']
    });
  }
  get f() { return this.regForm.controls }
  onSubmit() {
    this.submitted = true;
    if (this.regForm.invalid) {
      return;
    }
    else {

      console.log(this.regForm.value)
      this.UserService.registerUser(this.regForm.value).subscribe(res => {
        console.log(res)
        this.router.navigate(['../login']);
      });
    }
  }
}













