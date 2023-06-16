import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = new FormControl("",[
    Validators.required,
    Validators.minLength(3)
  ])
  age =new FormControl("",[
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  email =new FormControl("",[
    Validators.required,
    Validators.email
  ])
  password =new FormControl("",[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirmPassword = new FormControl("")
  phoneNumber = new FormControl("")
  registerForm = new FormGroup({
    name:this.name,
    age:this.age,
    email:this.email,
    password:this.password,
    confirmPassword:this.confirmPassword,
    phoneNumber:this.phoneNumber
  })
  constructor(){
    this.name
  }
}
