import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

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
  confirmPassword = new FormControl("",[
    Validators.required,
  ])
  phoneNumber = new FormControl("",[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])
  showAlert:boolean = false;
  alertMsg:string = 'Please wait your account is being created!';
  alertColor:string='blue';
  inSubmission:boolean = false;
  registerForm = new FormGroup({
    name:this.name,
    age:this.age,
    email:this.email,
    password:this.password,
    confirmPassword:this.confirmPassword,
    phoneNumber:this.phoneNumber
  })
  constructor(private auth:AngularFireAuth){
  }
  ngOnInit(): void {

  }


  async register(){
    this.showAlert=true;
    this.alertMsg = 'Please wait your account is being created!';
    this.alertColor = 'blue';
    this.inSubmission = true;
    const {email,password} = this.registerForm.value;
    try{
      if(email && password){
        const userCrd = await this.auth.createUserWithEmailAndPassword(
          email,password
        )
        console.log(userCrd);

      }
    }catch(err){
      console.log(err)
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occurred please try again';
      this.alertColor = 'red';
    }
    this.alertMsg = 'Success! you account has been created';
    this.alertColor = 'green';
  }
}
