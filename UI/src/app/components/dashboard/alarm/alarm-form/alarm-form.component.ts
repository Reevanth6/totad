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
  @Input() editreq: any;
  @Output() close = new EventEmitter<string>();

  public device:string = "Device1";
  public language:string = "English";
  public daily:string = 'no';
  public enable:string = 'no';
  public date:string;
  public time:string;
  public text:string;
  public repetition:number;
  // public volume:number = 0;
  // public url:string;
  // public count:number;
  public announcement:string = 'no';
  invalid:any = {};
  submitted = false;
  id = 0;

  constructor(private alarmService: AlarmService) { }

  ngOnInit(): void {
    if(this.type == 'Edit'){
      this.id = this.editreq.id;

      this.device = this.editreq.deviceName;
      this.language = this.editreq.language;
      this.daily = (this.editreq.daily) ? 'yes' : 'no';
      this.enable = (this.editreq.enable) ? 'yes' : 'no';
      this.date = this.editreq.date;
      this.time = this.editreq.time;
      this.text = this.editreq.text;
      this.repetition = this.editreq.repetition;
      this.announcement = (this.editreq.announcement) ? 'yes' : 'no';
    }
  }

  closePopup(){
    this.close.emit();
  }

  submitAlarm(){
    this.submitted = true;
    if(this.validate()){
      var req = {
        id: this.id,
        deviceName: this.device,
        language: this.language,
        daily: this.daily == "yes",
        enable: this.enable == 'yes',
        date: this.date,
        time: this.time,
        text: this.text,
        repetition : this.repetition,
        // volume: this.volume,
        // url: this.url,
        // count: this.count,
        announcement: this.announcement == 'yes',
        createdBy: this.alarmService.email
      };
      // this.alarmService.submitAlarmToMicroService(req).pipe(first()).subscribe(res => console.log('res :' + res));
      this.alarmService.addAlarm(req).subscribe(x => {
        this.closePopup();
      });
    }
  }

  validate(){
    // if(!this.device || this.device.trim() == '' || !this.language || this.language.trim() == '' ||
    // !this.daily || this.daily.trim() == '' || !this.enable || this.enable.trim() == '' ||
    // !this.date || this.date.trim() == '' || !this.time || this.time.trim() == '' ||
    // this.repetition == 0 || this.volume == 0 ||
    // !this.url || this.url.trim() == '' || this.count == 0 ||
    // !this.announcement || this.announcement.trim() == '')
    //   return false;
    // else
    //   return true;

    this.invalid.device = (!this.device || this.device.trim() == '');
    this.invalid.language = (!this.language || this.language.trim() == '');
    this.invalid.daily = (!this.daily || this.daily.trim() == '');
    this.invalid.enable = (!this.enable || this.enable.trim() == '');
    this.invalid.date = (!this.date || this.date.trim() == '');
    this.invalid.time = (!this.time || this.time.trim() == '');
    this.invalid.repetition = (this.repetition == 0);
    // this.invalid.volume = (this.volume == 0);

    return !(this.invalid.device || this.invalid.language || ((this.invalid.daily || this.invalid.enable ||
      this.invalid.date || this.invalid.time) && this.announcement != 'no') || this.invalid.repetition);

  }

  setDate(t){
    console.log(t);
  }

}
