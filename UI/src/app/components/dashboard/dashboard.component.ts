import { Component, OnInit } from '@angular/core';
import { AlarmService } from 'src/app/service/alarm.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public alarmService: AlarmService) { }

  ngOnInit(): void {
  }

}
