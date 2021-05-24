import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '1'
  regForm: FormGroup;
  submitted = false;


  constructor(private formbuilder: FormBuilder, private UserService: UserService, private router: Router) { }

  ngOnInit(): void {


    this.regForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }
  get f() { return this.regForm.controls }
  onSubmit() {
    if (this.regForm.valid) {
      this.UserService.loginUser(this.regForm.value).subscribe(res => {

        localStorage.setItem('accessToken', res.data.token);
        localStorage.setItem('data', res.data.user);
        // console.log(localStorage.getItem('accessToken'));
        if (res.statusCode == 200) {
          this.router.navigateByUrl('/internal/dashboard');
        }

      });

    }

  }
}



