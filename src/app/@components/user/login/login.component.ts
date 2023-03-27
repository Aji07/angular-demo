import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login(){
    alert("Login Clicked");
    console.log('Login...')
  }
  constructor() {
    console.log();
   }

  ngOnInit(): void {
  }

}
