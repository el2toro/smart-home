import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-music-player-section',
  templateUrl: './music-player-section.component.html',
  styleUrls: ['./music-player-section.component.scss'],
  imports: [MatMenuModule, MatIconModule]
})
export class MusicPlayerSectionComponent implements OnInit {
  audioTrack: any;
  constructor() { }
  

  ngOnInit() {
    this.configureWaveSurfer();
  }

  configureWaveSurfer(){
    this.audioTrack = WaveSurfer.create({
      container: '.progress-bar',
      waveColor: '#7D7474',
      progressColor: '#0166FF',
      barWidth: 2,
      height: 80,
      cursorColor: 'transparent'
    })

    this.audioTrack.load('../../assets/audio/audio.mp3');
  }

  play(){
    this.audioTrack.play();
  }

  pause(){
    this.audioTrack.pause();
  }
}
