import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Guitare } from 'src/app/model/guitare/guitare';
import { GuitareService } from 'src/app/services/guitareService/guitare.service';

@Component({
  selector: 'app-guitare',
  templateUrl: './guitare.component.html',
  styleUrls: ['./guitare.component.css']
})
export class GuitareComponent implements OnInit {
  id = 1;
  public guitare = new Guitare;
  myDestroy: Subject<any> = new Subject<any>();
  constructor(private guitareService:GuitareService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || "1")
    this.guitare = this.guitareService.findOne(this.id);
  }
}
