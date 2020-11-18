import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  forgotFormBuilder: FormGroup;
  submitted = false;

  // tslint:disable-next-line: typedef
  get loginForm() { return this.forgotFormBuilder.controls; }

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.forgotFormBuilder = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
    localStorage.removeItem('userInfo');
  }

  genratePassword(){
    this.submitted = true;
  }

}
