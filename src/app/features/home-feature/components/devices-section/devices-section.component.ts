import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface InfoDevice{
  name: string;
  description: string;
  icon: string;
}

interface Device{
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-devices-section',
  templateUrl: './devices-section.component.html',
  styleUrls: ['./devices-section.component.scss'],
  imports: [CommonModule, MatIconModule]
})
export class DevicesSectionComponent implements OnInit {
  infoItems = <InfoDevice[]>[];
  devices = <Device[]>[];
  constructor() { }

  ngOnInit() {
    this.initInfoDevice();
    this.initDevices();
  }

  initInfoDevice(){
    this.infoItems = [
      {name: 'Total Consumtion', description: '2,7 kHW', icon: 'park-lightning'},
      {name: 'Humidity', description: '54.0%', icon: 'drops'},
      {name: 'Pressure', description: '1008hPA', icon: 'fluent-temperature'}
    ]
  }

  initDevices(){
    this.devices = [
      {name: 'Thermostat', description: 'Opening', image: 'assets/images/thermostat.jpg'},
      {name: 'Lightning', description: 'Closed', image: 'assets/images/light-bulb.jpg'},
      {name: 'Google Home', description: 'Opening', image: 'assets/images/google-home.png'}
    ]
  }
}
