import { Component, OnInit } from '@angular/core';
import { ToggleSwitchComponent } from "../../../../core/components/toggle-switch/toggle-switch.component";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Device{
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-main-dashboard-time-section',
  templateUrl: './main-dashboard-time-section.component.html',
  styleUrls: ['./main-dashboard-time-section.component.scss'],
  imports: [ToggleSwitchComponent, CommonModule, MatIconModule]
})

export class MainDashboardTimeSectionComponent implements OnInit {
  devices: Device[] = [
    { name: 'Light', description: 'Bahlom Ltd', icon: 'light-bulb' },
    { name: 'Air Con', description: 'Sharp 320', icon: 'air-cond' },
    { name: 'Wifi', description: 'D-KM 345', icon: 'wifi' }
  ];

  date!: Date;

  constructor() { }

  ngOnInit() {
    this. getTime();
  }

  switchOnOff(isOn: boolean) {
    console.log('is swiched on: ', isOn)
  }

  getTime(){
    setInterval(() => {
     this.date = new Date();
    }, 1000)
  }
}
