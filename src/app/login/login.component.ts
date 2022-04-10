import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(private service: ServiceService, private router: Router) {}
  get f() {
    return this.signInForm.controls;
  }
  ngOnInit(): void {
    //this.service.loginValue = false;
  }
  signinForm() {
    console.log(this.signInForm.value.email)
    if (this.signInForm.valid) {
      
          localStorage.setItem("Email",this.signInForm.value.email)
         // this.service.loginValue = true;
          this.router.navigate(['dashboard']);
       
    }else{
      alert("Please provide valid Email and Password")
    }
  }
}
