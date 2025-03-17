import { Component } from '@angular/core';
import { ShellComponent } from "./core/components/shell/shell.component";
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ShellComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'smart-home';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
      this.matIconRegistry.addSvgIcon('location', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/location.svg'));
      this.matIconRegistry.addSvgIcon('sun-cloud', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/sun-cloud.svg'));
      this.matIconRegistry.addSvgIcon('light-bulb', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/light-bulb.svg'));
      this.matIconRegistry.addSvgIcon('air-cond', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/air-cond.svg'));
      this.matIconRegistry.addSvgIcon('wifi', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/wifi.svg'));  
      this.matIconRegistry.addSvgIcon('siri', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/siri.svg'));  
      this.matIconRegistry.addSvgIcon('microphone', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/microphone.svg'));  
      this.matIconRegistry.addSvgIcon('notification', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/notification.svg'));   

      this.matIconRegistry.addSvgIcon('play', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/play.svg'));
      this.matIconRegistry.addSvgIcon('forward-step', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/forward-step.svg'));
      this.matIconRegistry.addSvgIcon('backward-step', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/backward-step.svg'));
      this.matIconRegistry.addSvgIcon('arrows-rotate', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrows-rotate.svg'));
      this.matIconRegistry.addSvgIcon('shuffle', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/shuffle.svg'));
      this.matIconRegistry.addSvgIcon('volume-off', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/volume-off.svg'));
      this.matIconRegistry.addSvgIcon('volume-low', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/volume-low.svg'));
      this.matIconRegistry.addSvgIcon('volume-high', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/volume-high.svg'));

      this.matIconRegistry.addSvgIcon('drops', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/drops.svg'));
      this.matIconRegistry.addSvgIcon('fluent-temperature', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/fluent-temperature.svg'));
      this.matIconRegistry.addSvgIcon('park-lightning', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/park-lightning.svg'));
      this.matIconRegistry.addSvgIcon('pluged-in', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/pluged-in.svg'));
      this.matIconRegistry.addSvgIcon('wave', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/wave.svg'));
    }
}
