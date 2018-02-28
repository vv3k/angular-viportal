import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = "USERNAME OR PASSWORD IS REQUIRED TO SIGN-IN";
  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSignIn(form: any) {
    if(form.uname.value === "admin" && form.passwd.value === "admin"){
      this.route.navigate(['/landing']);
    }
    else{//TODO: HOW TO SET VALIDITY OF FORMS FROM HERE?

    }
  }

}
