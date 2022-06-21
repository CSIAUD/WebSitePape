import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Guitare } from 'src/app/model/guitare/guitare';
import { GuitareService } from 'src/app/services/guitareService/guitare.service';

@Component({
  selector: 'app-guitare-list',
  templateUrl: './guitare-list.component.html',
  styleUrls: ['./guitare-list.component.css']
})
export class GuitareListComponent implements OnInit {
  
  public guitares: Guitare [] = [];
  myDestroy: Subject<any> = new Subject<any>();
  constructor(private guitareService:GuitareService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.guitares = this.guitareService.findAll();
  }
}
