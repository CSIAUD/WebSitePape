import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/model/link/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public guitareLinks: Link [] = [];

  constructor() {}

  ngOnInit(): void {
    this.initMenu();
    initDropDown();
  }

  public toggleMenu(){
    let menu = document.querySelector('#menu');
    swapClass((menu as HTMLElement), "flex", "hidden")
  }
  
  initMenu(){

    document.querySelectorAll("#menu a").forEach( link => {
      link.addEventListener("click", toggleMenu)
    });

    document.querySelectorAll(".dropButton").forEach(button => {
      if(button){
        button.addEventListener("click", () => {
          swapClass((button as HTMLElement),"rotate-0","rotate-180");
          toggleDropDown((button.parentElement?.nextElementSibling as HTMLElement))
        });
      }
    });

    swapClass((document.querySelector('#menu') as HTMLElement), "flex", "hidden");
  }
}

function toggleMenu(){
  let menu = document.querySelector('#menu');
  swapClass((menu as HTMLElement), "flex", "hidden")
}

function toggleDropDown(elem: HTMLElement){
  if(elem.dataset['status'] == "open"){
    elem.dataset['status'] = "close"
      swapClass(elem, 'hidden', 'flex')
  }else{
    elem.dataset['status'] = "open"
    swapClass(elem, 'hidden', 'flex')
  }
}

function initDropDown(){
  document.querySelectorAll(".dropDown").forEach(drop => {
      swapClass((drop as HTMLElement), 'hidden', 'flex')
  })
}

function swapClass(elem: HTMLElement, class1: string, class2: string) {
  if(elem.classList.contains(class1)){
    elem.classList.replace(class1,class2);
  }else if(elem.classList.contains(class2)){
    elem.classList.replace(class2,class1);
  }else{
    console.log('Erreur SwapClass')
  }
}