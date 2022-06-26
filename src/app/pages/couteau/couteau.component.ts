import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Couteau } from 'src/app/model/couteau/couteau';
import { CouteauService } from 'src/app/services/couteauService/couteau.service';

@Component({
  selector: 'app-couteau',
  templateUrl: './couteau.component.html',
  styleUrls: ['./couteau.component.css']
})
export class CouteauComponent implements OnInit {

  id = 1;
  public couteau = new Couteau;
  myDestroy: Subject<any> = new Subject<any>();
  constructor(private couteauService:CouteauService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || "1")
    this.couteau = this.couteauService.findOne(this.id);
  }
}
