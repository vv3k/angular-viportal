import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onRegister() {
    this.route.navigate([LoginComponent]);
  }
}
