import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthenticationService) { }
  loginForm:any;
  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  userLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      console.log()
      this.authService.login(this.loginForm.value.userName, this.loginForm.value.password);
    }
  }
}
