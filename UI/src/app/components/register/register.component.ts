import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regesterFormBuilder: FormGroup;
  submitted = false;

  // tslint:disable-next-line: typedef
  get loginForm() { return this.regesterFormBuilder.controls; }

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.regesterFormBuilder = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
    localStorage.removeItem('userInfo');
  }

  signUp(){
    this.submitted = true;
  }

}
