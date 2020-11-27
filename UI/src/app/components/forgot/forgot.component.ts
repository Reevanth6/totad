import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlarmService } from 'src/app/service/alarm.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  email: string;

  constructor(private route: ActivatedRoute, private router: Router, private alarmService: AlarmService) { }

  ngOnInit(): void {
  }

  genratePassword(){
    this.alarmService.resetPassword(this.email).subscribe(x => {
      this.router.navigate([ '/' ]);
    });
  }

}
