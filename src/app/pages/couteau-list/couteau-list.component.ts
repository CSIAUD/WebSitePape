import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Couteau } from 'src/app/model/couteau/couteau';
import { Explanation } from 'src/app/model/explanation/explanation';
import { CouteauService } from 'src/app/services/couteauService/couteau.service';
import { ExplanationsService } from 'src/app/services/explanationService/explanation.service';

@Component({
  selector: 'app-couteau-list',
  templateUrl: './couteau-list.component.html',
  styleUrls: ['./couteau-list.component.css']
})
export class CouteauListComponent implements OnInit {

  public explanations: Explanation [] = [];
  public couteaux: Couteau [] = [];
  myDestroy: Subject<any> = new Subject<any>();
  constructor(private couteauService:CouteauService, private explanationService:ExplanationsService) {}

  ngOnInit(): void {
    this.getAll();
    this.explanations = this.explanationService.findByPage("Couteau");
  }

  getAll(){
    this.couteaux = this.couteauService.findAll();
  }
}
