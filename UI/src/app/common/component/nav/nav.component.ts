import { Component, OnInit } from '@angular/core';
import { AlarmService } from 'src/app/service/alarm.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  selection:number = 1;
  constructor(public alarmService: AlarmService) { }

  ngOnInit() {
  }

  logout(){
    this.alarmService.validUser = false;
  }

}
