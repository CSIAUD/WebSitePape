import { getLocaleEraNames } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() accueil = false;

  init = true;

  constructor(private router: Router) {}
  
  ngAfterViewInit(): void {
    if(this.init){
      this.init = false;
      
      let main = document.querySelector("comp-explanation > main");
      if(this.accueil && main){
        main.classList.remove("mt-20"); 
      }
    }
  }

  ngOnInit(): void {
  }

  public redirect(page: string){
    console.log(page.toLowerCase())
    if(page.toLowerCase() == "guitare"){
      this.router.navigate(['guitares'])
    }else if(page.toLowerCase() == "couteau"){
      this.router.navigate(['couteaux'])
    }
  }
}
