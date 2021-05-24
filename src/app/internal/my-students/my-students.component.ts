import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { LINKS } from 'src/app/constant';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {

  form: FormGroup;
  studentsData;

  get studentsFormArray() {
    return this.form.controls.students as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      students: new FormArray([], minSelectedCheckboxes(1))
    });

    // async students
    this.userService.MyStudents().subscribe((students) => {
      console.log(students)

      console.log(students['data'])
      if (students) {
        this.studentsData = students['data'];
      }

      this.addCheckboxes();
    });
  }


  private addCheckboxes() {
    this.studentsData.forEach(() => this.studentsFormArray.push(new FormControl(false)));
  }


  submit() {
    const selectedStudentIds = this.form.value.students
      .map((checked, i) => checked ? this.studentsData[i]._id : null)
      .filter(v => v !== null);

    console.log(selectedStudentIds);
    let selectedStudents = {};
    selectedStudents['userIds'] = selectedStudentIds;
    this.userService.removeStudents(selectedStudents).subscribe(res => {
      console.log(res);

      // this.router.onSameUrlNavigation = 'reload';
      // this.router.navigateByUrl(`${LINKS.INTERNAL}${LINKS.STUDENT}`)
      // event.preventDefault();

      this.router.navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate([`${LINKS.INTERNAL}${LINKS.MyStudents}`]));
    })
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}




