import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    load();
    initDropDown();
    initMenu();
  }

  public toggleMenu(){
    let menu = document.querySelector('#menu');
    swapClass((menu as HTMLElement), "flex", "hidden")
  }
}

function toggleMenu(){
  let menu = document.querySelector('#menu');
  swapClass((menu as HTMLElement), "flex", "hidden")
}

function load(){
  document.querySelectorAll(".dropButton").forEach(button => {
    if(button){
      button.addEventListener("click", () => {
        swapClass((button as HTMLElement),"rotate-0","rotate-180");
        toggleDropDown((button.parentElement?.nextElementSibling as HTMLElement))
      });
    }
  });
}

function toggleDropDown(elem: HTMLElement){
  let status = elem.dataset['status'] == "open" ? true : false;
  console.log(elem)
  if(status){
    console.log("close")
    elem.dataset['status'] = "close"
    elem.style.height = "0px"
    setTimeout(()=>{
      swapClass(elem, 'hidden', 'flex')
    }, 600);
  }else{
    console.log("open")
    elem.dataset['status'] = "open"
    swapClass(elem, 'hidden', 'flex')
    setTimeout(()=>{
      elem.style.height = elem.dataset['height'] + "px"
    }, 100);
  }

}

function initMenu(){
  swapClass((document.querySelector('#menu') as HTMLElement), "flex", "hidden");

  document.querySelectorAll("#menu a").forEach( link => {
    link.addEventListener("click", toggleMenu)
  });
}

function initDropDown(){
  document.querySelectorAll(".dropDown").forEach(drop => {
    let elem = (drop as HTMLElement)
    elem.dataset["height"] = elem.getBoundingClientRect().height + ""
    elem.style.height = "0px"
    swapClass(elem, 'hidden', 'flex')
  })
}

function swapClass(elem: HTMLElement, class1: string, class2: string) {
  if(elem.classList.contains(class1)){
    elem.classList.replace(class1,class2);
  }else if(elem.classList.contains(class2)){
    elem.classList.replace(class2,class1);
  }else{
    console.log('La classe n\'est pas présente')
  }
}