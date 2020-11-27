import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlarmService } from 'src/app/service/alarm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormBuilder: FormGroup;
  submitted = false;

  emailEmpty:boolean = false;
  emailInvalid:boolean = false;
  passwordEmpty:boolean = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public alarmService: AlarmService) { }

  public email: string;
  public password: string;
  public validateUser = true;

  ngOnInit(): void {
  }

  login(){
    this.submitted = true;
    if(this.validate())
    {
      this.alarmService.validateUser(this.email, this.password).subscribe(x => {
        this.validateUser = x==true;
      });
    }
  }

  validate(){
    this.emailEmpty = !(this.email && this.email.trim() != '');
    this.emailInvalid = !(!this.emailEmpty && this.alarmService.validateEmail(this.email));
    this.passwordEmpty = !(this.password && this.password.trim() != '');

    return !(this.emailEmpty || this.emailInvalid || this.passwordEmpty);
  }

}
