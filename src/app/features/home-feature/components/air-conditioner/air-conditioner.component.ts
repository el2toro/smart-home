import { Component, HostListener, OnInit } from '@angular/core';
import { ToggleSwitchComponent } from "../../../../core/components/toggle-switch/toggle-switch.component";
import { SignalRService } from '../../../../services/signalr.service';

@Component({
  selector: 'app-air-conditioner',
  templateUrl: './air-conditioner.component.html',
  styleUrls: ['./air-conditioner.component.scss'],
  imports: [ToggleSwitchComponent]
})
export class AirConditionerComponent implements OnInit {
  isRotating = false;

  radius = 90; // Circle radius
  centerX = 100;
  centerY = 100;
  angle = 0; // Angle in degrees
  progress = 0; // Progress (0 - 100%)

  pointerX = 0; // Initial X
  pointerY = 0; // Initial Y (bottom of circle)

  arcPath = ''; // Path for progress arc
  dragging = false;
  pointer: any;

  isOn!: boolean;

  constructor(private signalRService: SignalRService) { }

  ngOnInit() {
    //this.configureSliderProgress();
   
    this.updatePointer();

    this.signalRService.startConnection();
     this.addMessageListener();
  }

  public addMessageListener = () => {
    this.signalRService.getHubConnection().on('ReceiveMessage', (isOn: boolean) => {
      //Update switch toggle on and off
      this.isOn = isOn
      console.log(isOn);
    });
  }

  sendMessage(event: any) {
    this.signalRService.sendMessage(event);
  }

  switchOnOff($event: any) {
    this.sendMessage($event);
  }

  configureSliderProgress(){
   // let knob = document.querySelector('.knob');
    let circle = document.getElementById('circle2')  as HTMLElement;
    let pointer = document.querySelector('.pointer') as HTMLElement;
    let text = document.querySelector('.text')  as HTMLElement;


    document.addEventListener('mousedown', (event) => {
      let element = (event.target  as HTMLElement).closest('.pointer');
      if(element){
        this.isRotating = true;
        console.log('is rotating')
      }
    })

    const rotateKnob = (event: MouseEvent) => {
      if(this.isRotating){
        let knobX = pointer?.getBoundingClientRect().left;
        let knobY = pointer?.getBoundingClientRect().top;

        let deltaX = event.clientX - knobX;
        let deltaY = event.clientY - knobY;

        let angleRad = Math.atan2(deltaY, deltaX);
        let angleDeg = (angleRad * 120 / Math.PI);

        let rotationAngle = (angleDeg - 125  + 360) % 360;

        if(rotationAngle <= 270){
          pointer.style.transform = `rotate(${rotationAngle}deg)`;

        let progressPercent = rotationAngle / 270;

        circle.style.strokeDashoffset = `${680 - 460 * progressPercent}`;

       // text.innerHTML = `${Math.round(progressPercent * 100)}`
        }
      };
    }

    document.addEventListener('mousemove', rotateKnob);

    document.addEventListener('mouseup', () => {
     this.isRotating = false;
    });
  }

  updatePointer() {
    // Convert angle to radians, ensuring 0° is at the bottom
    let angleRad = (this.angle - 100) * (Math.PI / 180);

    // Calculate pointer position
    this.pointerX = this.centerX + this.radius * Math.cos(angleRad);
    this.pointerY = this.centerY + this.radius * Math.sin(angleRad);
 
    console.log(this.pointerX, this.pointerY)

    // Convert angle (0-360) to progress (0-100%)
    this.progress = Math.round((this.angle / 270) * 100);

    // Update progress arc path
    this.arcPath = this.describeArc(this.centerX, this.centerY, this.radius,  -this.pointerX, this.angle - this.pointerY);
  }

  startDrag(event: MouseEvent | TouchEvent) {
    this.dragging = true;
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onMouseMove(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;

    let clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    let clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    // Calculate angle based on pointer movement
    let dx = clientX - this.centerX;
    let dy = clientY - this.centerY;

    let angleRad = Math.atan2(dy, dx);
    let angleDeg = (angleRad * 100 / Math.PI);

    let rotationAngle = (angleDeg - 135  + 360) % 360;

         if(rotationAngle <= 270){
          this.angle = rotationAngle
         }
           //pointer.style.transform = `rotate(${rotationAngle}deg)`;
    
    // Convert to degrees (Adjusting so 0° starts at the bottom)
    //this.angle = (Math.atan2(dy, dx) * (180 / Math.PI) + 460) % 360;

    this.updatePointer();
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  onMouseUp() {
    this.dragging = false;
  }

  describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    let start = this.polarToCartesian(x, y, radius, endAngle);
    let end = this.polarToCartesian(x, y, radius, startAngle);
    let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  }

  polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    let angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
}
