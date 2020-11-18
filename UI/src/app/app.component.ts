import { Component, OnInit } from '@angular/core';
import { UtilityService } from './common/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ui';
  constructor(private utilityService: UtilityService) {}
  ngOnInit(): void {
    this.utilityService
      .getSettings()
      .pipe()
      .subscribe(
        (url) => {
          this.utilityService.defaultUrl = url.defaultUrl;
          console.log(this.utilityService.defaultUrl);
        },
        (error) => {}
      );
  }
}
