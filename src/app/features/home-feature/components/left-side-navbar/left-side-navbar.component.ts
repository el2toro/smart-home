import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-left-side-navbar',
  templateUrl: './left-side-navbar.component.html',
  styleUrls: ['./left-side-navbar.component.scss'],
  imports: [MatIconModule]
})
export class LeftSideNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
