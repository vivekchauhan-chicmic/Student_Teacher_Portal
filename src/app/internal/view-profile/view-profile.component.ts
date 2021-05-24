import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  student;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  ngOnInit(): void {
    this.userService.viewProfile().subscribe((students) => {
      console.log(students);

      this.student = students.data;
    });
  }
}















