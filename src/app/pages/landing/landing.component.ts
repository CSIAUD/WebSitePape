import { Component, OnInit } from '@angular/core';
import { Landing } from 'src/app/model/landing/landing';
import { LandingService } from 'src/app/services/landingService/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  landing = new Landing;

  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landing = this.landingService.get();
    
  }

}
