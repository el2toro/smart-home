import { Component, OnInit } from '@angular/core';
import { MainDashboardTimeSectionComponent } from "../main-dashboard-time-section/main-dashboard-time-section.component";
import { MusicPlayerSectionComponent } from "../music-player-section/music-player-section.component";
import { AirConditionerComponent } from "../air-conditioner/air-conditioner.component";
import { DevicesSectionComponent } from "../devices-section/devices-section.component";

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
  imports: [MainDashboardTimeSectionComponent, MusicPlayerSectionComponent, AirConditionerComponent, DevicesSectionComponent]
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
