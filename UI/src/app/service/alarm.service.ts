import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  public ip: string = '254.254.254.254';

  constructor(private http: HttpClient) { }

  submitAlarmToMicroService(req:any){
    return this.http.get('http://' + this.ip + '/alarm?device=' + req.device + '&language=' + req.language +
    '&daily=' + req.daily + '&enable=' + req.enable + '&date=' + req.date + '&time=' + req.time +
    '&text=' + req.text + '&repetition=' + req.repetition + '&volume=' + req.volume + '&url=' + req.url +
    '&count=' + req.count + '&announcement=' + req.announcement , {}).pipe(map(response => {
      return response;
    }));
  }


}
