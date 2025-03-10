import { Component, OnInit } from '@angular/core';
import { ToggleSwitchComponent } from "../../../../core/components/toggle-switch/toggle-switch.component";

@Component({
  selector: 'app-air-conditioner',
  templateUrl: './air-conditioner.component.html',
  styleUrls: ['./air-conditioner.component.scss'],
  imports: [ToggleSwitchComponent]
})
export class AirConditionerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  switchOnOff($event: any) {
    throw new Error('Method not implemented.');
    }
}
