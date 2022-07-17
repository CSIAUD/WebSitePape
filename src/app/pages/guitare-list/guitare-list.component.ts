import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Explanation } from 'src/app/model/explanation/explanation';
import { Guitare } from 'src/app/model/guitare/guitare';
import { ExplanationsService } from 'src/app/services/explanationService/explanation.service';
import { GuitareService } from 'src/app/services/guitareService/guitare.service';

@Component({
  selector: 'app-guitare-list',
  templateUrl: './guitare-list.component.html',
  styleUrls: ['./guitare-list.component.css']
})
export class GuitareListComponent implements OnInit {
  
  public explanations: Explanation [] = [];
  public guitares: Guitare [] = [];
  myDestroy: Subject<any> = new Subject<any>();
  constructor(private guitareService:GuitareService, private explanationService:ExplanationsService) {}

  ngOnInit(): void {
    this.getAll();
    this.explanations = this.explanationService.findByPage("Guitare");
  }

  getAll(){
    this.guitares = this.guitareService.findAll();
  }
}
