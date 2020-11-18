import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormBuilder: FormGroup;
  submitted = false;

  // tslint:disable-next-line: typedef
  get loginForm() { return this.loginFormBuilder.controls; }

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginFormBuilder = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    localStorage.removeItem('userInfo');
  }

  login(){
    this.submitted = true;
  }

}
