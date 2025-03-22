import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  @Input() isOn!: boolean;
  @Output() switch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggle(event: any){
    this.switch.emit(event.target.checked);
  }
}
