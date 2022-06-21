import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Couteau } from 'src/app/model/couteau/couteau';
import { CouteauService } from 'src/app/services/couteauService/couteau.service';

@Component({
  selector: 'app-couteau-list',
  templateUrl: './couteau-list.component.html',
  styleUrls: ['./couteau-list.component.css']
})
export class CouteauListComponent implements OnInit {

  public couteaux: Couteau [] = [];
  myDestroy: Subject<any> = new Subject<any>();
  constructor(private couteauService:CouteauService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.couteaux = this.couteauService.findAll();
  }
}
