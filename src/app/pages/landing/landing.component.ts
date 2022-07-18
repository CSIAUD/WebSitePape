import { Component, OnInit } from '@angular/core';
import { Explanation } from 'src/app/model/explanation/explanation';
import { Landing } from 'src/app/model/landing/landing';
import { ExplanationsService } from 'src/app/services/explanationService/explanation.service';
import { LandingService } from 'src/app/services/landingService/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  landing = new Landing;
  public explanations: Explanation [] = [];
  accueil = true;

  constructor(private landingService: LandingService, private explanationService: ExplanationsService) { }

  ngOnInit(): void {
    this.landing = this.landingService.get();
    this.explanations = this.explanationService.getAccueil();
  }
}
