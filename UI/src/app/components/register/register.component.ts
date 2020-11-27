import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlarmService } from 'src/app/service/alarm.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regesterFormBuilder: FormGroup;
  submitted = false;

  public user: any;
  invalid:any = {};

  constructor(private route: ActivatedRoute, private router: Router, public alarmService: AlarmService) { }

  ngOnInit(): void {
    this.user = {
      name: '',
      emailAddress: '',
      password: '',
      employeeID: 0,
      phone: 0,
      location: '',
      id:0
    };
  }

  signUp(){
    this.submitted = true;
    if(this.validate())
    {
      this.alarmService.register(this.user).subscribe(x => {
        this.router.navigate([ '/' ]);
      });
    }
  }

  validate(){
    this.invalid.emailEmpty = !(this.user.emailAddress && this.user.emailAddress.trim() != '');
    this.invalid.email = !(!this.invalid.emailEmpty && this.alarmService.validateEmail(this.user.email));
    this.invalid.password = !(this.user.password && this.user.password.trim() != '');
    this.invalid.name = !(this.user.name && this.user.name.trim() != '');


    return !(this.invalid.emailEmpty || this.invalid.emailInvalid || this.invalid.passwordEmpty || this.invalid.name);
  }

}
