import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/model/link/link';
import { LinkService } from 'src/app/services/linkService/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  public links: Link[] = [];
  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.links = this.linkService.getAll();
  }

}
