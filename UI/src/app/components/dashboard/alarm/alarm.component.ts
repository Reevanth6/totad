import { Component, OnInit } from '@angular/core';
import { AlarmService } from 'src/app/service/alarm.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  public columnDefs: any;
  public rowData: any[] = [];
  public type: string;


  constructor(public alarmService:AlarmService) { }

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
      {headerName: 'Edit', width: 70, resizable: true, cellRenderer: (data) => {
        return `<i class="fa fa-edit cursor-pointer" (click)='edit(data.data.id)'></i>`;
    }},
      {headerName: 'Duplicate', width: 90, resizable: true, cellRenderer: (data) => {
        return `<i class="fa fa-copy cursor-pointer" (click)='duplicate(data.data.id)'></i>`;
    }},
      {headerName: 'Delete', width: 70, resizable: true,
      // cellRenderer: (data) => {
      //   return `<i class="fa fa-trash cursor-pointer" (click)='delete(data.data.id)'></i>`;},
     cellRendererParams: { onClick: this.delete.bind(this),label:'click' }}
  ];
    this.rowData = [{id:1, textData:'Thank you all for Support during sales time.',daily:'True',date:'20-10-24',time:'15:53',device:'Device1',volume:'100',playCount:'3',status:'True'},
    {id:2, textData:'Thank you all for Support during sales time.',daily:'True',date:'20-10-24',time:'16:00',device:'Device1',volume:'100',playCount:'3',status:'True'},
    {id:3, textData:'Good Morning',daily:'True',date:'20-10-28',time:'00:02',device:'Device1',volume:'100',playCount:'2',status:'True'}]
  }

  delete(id){
    console.log('delete: ' + id);
  }

  edit(id){
    this.type = "Edit";
  }

  duplicate(id){
    console.log('duplicate: ' + id);
  }

  add(){
    this.type = "Add";
  }

  deleteAll(){
    console.log('deleteAll');
  }

  closePopup(){
    this.type="";
  }

  save(){
    this.type="";
  }

}
