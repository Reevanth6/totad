import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { AlarmService } from 'src/app/service/alarm.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.scss']
})
export class AlarmFormComponent implements OnInit {
  @Input() type: string;
  @Input() editreq: any;
  @Output() close = new EventEmitter<string>();

  deviceList:any[];
  // selectedItems = [];
  dropdownSettings:any;
  public device:any[];
  public language:string = "English";
  public daily:string = 'no';
  public enable:string = 'no';
  public date:string;
  public time:string;
  public text:string;
  public repetition:number;
  public volume:number = 0;
  public url:string;
  public mp3Url:string;
  public loading: boolean;
  // public count:number;
  public announcement:string = 'no';
  invalid:any = {};
  submitted = false;
  id = 0;

  constructor(private alarmService: AlarmService) {}

  ngOnInit(): void {

    this.deviceList = [
      'Device1',
      'Device2',
      'Device3'
    ];
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    if(this.type == 'Edit'){
      this.id = this.editreq.id;

      this.device = this.editreq.deviceName.split('|');
      this.language = this.editreq.language;
      this.daily = (this.editreq.daily) ? 'yes' : 'no';
      this.enable = (this.editreq.enable) ? 'yes' : 'no';
      this.date = this.editreq.date;
      this.time = this.editreq.time;
      this.text = this.editreq.text;
      this.repetition = this.editreq.repetition;
      this.announcement = (this.editreq.announcement) ? 'yes' : 'no';
      this.volume = this.editreq.volume;
      this.url = this.editreq.url;
      this.mp3Url = this.editreq.mp3Url;
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
        deviceName: this.device.join('|'),
        language: this.language,
        daily: this.announcement == 'no' && this.daily == "yes",
        enable: this.announcement == 'no' && this.enable == 'yes',
        date: this.announcement == 'no' ? this.date : '',
        time: this.announcement == 'no' ? this.time : '',
        text: this.text,
        repetition : this.repetition,
        volume: this.volume,
        url: this.url,
        mp3Url: this.mp3Url,
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

    this.invalid.device = (!this.device || this.device.length == 0);
    this.invalid.language = (!this.language || this.language.trim() == '');
    this.invalid.daily = (!this.daily || this.daily.trim() == '');
    this.invalid.enable = (!this.enable || this.enable.trim() == '');
    this.invalid.date = (!this.date || this.date.trim() == '');
    this.invalid.time = (!this.time || this.time.trim() == '');
    this.invalid.repetition = (this.repetition <= 0);
    // this.invalid.volume = (this.volume == 0);

    return !(this.invalid.device || this.invalid.language || ((this.invalid.daily || this.invalid.enable ||
      this.invalid.date || this.invalid.time) && this.announcement == 'no') || this.invalid.repetition);

  }

  setDate(t){
    console.log(t);
  }

  uploadAudio(event) {
      const file = event.currentTarget.files[0];
      const filesize = file.size / 1024; // MB
      if (filesize > 4000) {
          alert('File size is more than 4000KB!');
          event.currentTarget.value = '';
          return;
      }
      this.loading = true;

      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', this.alarmService.uploadPreset);
      data.append('cloud_name', this.alarmService.cloudName);

      this.alarmService.cloudinaryUpload(data).subscribe(res => {
        this.mp3Url = res.secure_url;
        this.loading = false;
      });
  }
  onItemSelect(data){

  }
  onSelectAll(data){

  }

}
