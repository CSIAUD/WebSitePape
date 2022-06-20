import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewChecked {
  @Input() products: any;

  constructor() {}

  ngAfterViewChecked(): void {
    resizeImg();
  }

}

window.addEventListener('resize', resizeImg);

function resizeImg(){
  let imgs = document.querySelectorAll('#list li>img');
  if(imgs.length > 0){
    imgs.forEach(img => {
      (img as HTMLElement).style.height = img.getBoundingClientRect().width * (16/9) + "px"
    })
  }
}