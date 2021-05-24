import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LINKS } from 'src/app/constant';
import { UserService } from 'src/app/services/user.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  regForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.regForm = this.formBuilder.group({
      current_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required]

    });
  }

  get f() { return this.regForm.controls; }

  onSubmit() {
    if (this.regForm.valid) {
      this.userService.updatePassword(this.regForm.value).subscribe(async res => {
        if (res.status) {
          this.regForm.reset();
          localStorage.clear();
          this.router.navigateByUrl(`${LINKS.INTERNAL}${LINKS.LOGIN}`);

        }
      })
    }
  }
}


