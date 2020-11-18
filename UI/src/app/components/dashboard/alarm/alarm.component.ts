import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  public columnDefs: any;
  public rowData: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.columnDefs = [
      {headerName: 'Audio Text Data', field: 'textData', width: 120, resizable: true},
      {headerName: 'Daily', field: 'daily', width: 70, resizable: true},
      {headerName: 'Date', field: 'date', width: 70, resizable: true},
      {headerName: 'Time', field: 'time', width: 70, resizable: true},
      {headerName: 'Device Names', field: 'device', width: 120, resizable: true},
      {headerName: 'Current Volume Set', field: 'volume', width: 150, resizable: true},
      {headerName: 'Number of Times to Play', field: 'playCount', width: 170, resizable: true},
      {headerName: 'Status', field: 'status', width: 70, resizable: true},
      {headerName: 'Edit', width: 70, resizable: true},
      {headerName: 'Duplicate', width: 90, resizable: true},
      {headerName: 'Delete', width: 70, resizable: true}
  ];
    this.rowData = [{textData:'Thank you all for Support during sales time.',daily:'True',date:'20-10-24',time:'15:53',device:'Device1',volume:'100',playCount:'3',status:'True'},
    {textData:'Thank you all for Support during sales time.',daily:'True',date:'20-10-24',time:'16:00',device:'Device1',volume:'100',playCount:'3',status:'True'},
    {textData:'Good Morning',daily:'True',date:'20-10-28',time:'00:02',device:'Device1',volume:'100',playCount:'2',status:'True'}]
  }

}
