import { getLocaleEraNames } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Explanation } from 'src/app/model/explanation/explanation';
import { ExplanationsService } from 'src/app/services/explanationService/explanation.service';

@Component({
  selector: 'comp-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.css']
})
export class ExplanationComponent implements OnInit {
  @Input() explanations: Explanation [] = [];

  constructor() {}

  ngOnInit(): void {
  }

}
