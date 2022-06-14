import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Explanation } from 'src/app/model/explanation/explanation';
import { ExplanationsService } from 'src/app/services/explanation/explanation.service';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.css']
})
export class ExplanationComponent implements OnInit {
  @Input() page = '';
  public explanations: Explanation [] = [];
  myDestroy: Subject<any> = new Subject<any>();
  constructor(private explanationService:ExplanationsService) {}

  ngOnInit(): void {
    this.explanations = this.explanationService.findByPage(this.page);
  }

}
