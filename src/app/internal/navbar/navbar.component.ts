import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL, LINKS } from "src/app/constant";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  LINKS = {
    dashboard: `${LINKS.INTERNAL}${LINKS.DASHBOARD}`,
    student: `${LINKS.INTERNAL}${LINKS.STUDENT}`,
    mystudents: `${LINKS.INTERNAL}${LINKS.MyStudents}`,
    viewprofile: `${LINKS.INTERNAL}${LINKS.VIEWPROFILE}`,
    updatepassword: `${LINKS.INTERNAL}${LINKS.UPDATEPASSWORD}`
  }

  user = JSON.parse(JSON.stringify(localStorage.getItem(`data`)));


  constructor(private router: Router) { }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/login")
  }
  ngOnInit(): void {

  }

}
