import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 user :{username: any,password: any} = {username :"", password:""};

  constructor(public userservice : UsersService) {}

  registerUser(){
    // const loginValue = document.getElementById("login")?.ariaValueMax;
    console.log(this.user);
    alert("Registered Success!!!");
  }

  ngOnInit(): void {}

}
