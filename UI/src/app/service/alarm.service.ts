import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { alarmResponse } from '../model/alarm-response.model';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  public ip: string = '254.254.254.254';
  public baseUrl:string = "";//"https://localhost:44316";

  public validUser: boolean = false;
  public email: string;

  constructor(private http: HttpClient) { }

  submitAlarmToMicroService(req:any){
    return this.http.get('http://' + this.ip + '/alarm?device=' + req.deviceName + '&language=' + req.language +
    '&daily=' + req.daily + '&enable=' + req.enable + '&date=' + req.date + '&time=' + req.time +
    '&text=' + req.text + '&repetition=' + req.repetition + '&volume=' + req.volume + '&url=' + req.url +
    '&count=' + req.count + '&announcement=' + req.announcement , {}).pipe(map(response => {
      return response;
    }));
  }


  getAlarms() {
    return this.http.get<alarmResponse>(this.baseUrl + '/alarm' , {}).pipe(map(response => {
      return response;
    }));
  }

  addAlarm(alarm:any){
    return this.http.post(this.baseUrl + '/alarm', alarm , {}).pipe(map(response => {
      return response;
    }));
  }

  updateIp(ip:string){
    return this.http.post(this.baseUrl + '/alarm/UpdateIp?newIp=' + ip , {}).pipe(map(response => {
      return response;
    }));
  }

  validateUser(email:string,password:string){
    this.email = email;
    return this.http.get(this.baseUrl + '/user?email='+email+'&password='+password , {}).pipe(map(response => {
      this.validUser = response == true;
      return response;
    }));
  }

  register(user:any){
    return this.http.post(this.baseUrl + '/user', user , {}).pipe(map(response => {
      return response;
    }));
  }

  resetPassword(email:string){
    return this.http.post(this.baseUrl + '/user/reset?email=' + email , {}).pipe(map(response => {
      return response;
    }));
  }


  validateEmail(email){
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
  }


}
