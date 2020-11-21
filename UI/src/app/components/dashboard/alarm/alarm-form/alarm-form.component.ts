import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.scss']
})
export class AlarmFormComponent implements OnInit {
  @Input() type: string;
  @Output() close = new EventEmitter<string>();
  @Output() submit = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  closePopup(){
    this.close.emit();
  }

}
