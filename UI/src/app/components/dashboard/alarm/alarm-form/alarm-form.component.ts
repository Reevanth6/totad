import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { AlarmService } from 'src/app/service/alarm.service';

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.scss']
})
export class AlarmFormComponent implements OnInit {
  @Input() type: string;
  @Output() close = new EventEmitter<string>();
  @Output() submit = new EventEmitter<string>();

  public device:string;
  public language:string;
  public daily:string;
  public enable:string;
  public date:string;
  public time:string;
  public text:string;
  public repetition:number;
  public volume:number = 0;
  public url:string;
  public count:number;
  public announcement:string;

  constructor(private alarmService: AlarmService) { }

  ngOnInit(): void {
  }

  closePopup(){
    this.close.emit();
  }

  submitAlarm(){
    if(this.validate()){
      var req = {
        device: this.device,
        language: this.language,
        daily: this.daily,
        enable: this.enable,
        date: this.date,
        time: this.time,
        text: this.text,
        repetition : this.repetition,
        volume: this.volume,
        url: this.url,
        count: this.count,
        announcement: this.announcement
      };
      console.log(req);
      this.alarmService.submitAlarmToMicroService(req).pipe(first()).subscribe(res => console.log('res :' + res));
      this.closePopup();
    }
  }

  validate(){
    if(!this.device || this.device.trim() == '' || !this.language || this.language.trim() == '' ||
    !this.daily || this.daily.trim() == '' || !this.enable || this.enable.trim() == '' ||
    !this.date || this.date.trim() == '' || !this.time || this.time.trim() == '' ||
    this.repetition == 0 || this.volume == 0 ||
    !this.url || this.url.trim() == '' || this.count == 0 ||
    !this.announcement || this.announcement.trim() == '')
      return false;
    else
      return true;
  }

}
