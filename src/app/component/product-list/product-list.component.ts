import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewChecked {
  @Input() location = '';
  @Input() products: any;

  constructor() {}

  ngAfterViewChecked(): void {
    this.resizeImg();
  }

  resizeImg(){
    let imgs = document.querySelectorAll('#list li>img');
    if(imgs.length > 0){
      imgs.forEach(img => {
        if(this.location == "guitare"){
          (img as HTMLElement).dataset['ratio'] = (16/9).toString();
          (img as HTMLElement).style.height = img.getBoundingClientRect().width * (16/9) + "px"
        }else{
          (img as HTMLElement).dataset['ratio'] = (3/4).toString();
          (img as HTMLElement).style.height = img.getBoundingClientRect().width * (3/4) + "px"
        }
      })
    }
  }

}
  
window.addEventListener('resize', resizeImg);

function resizeImg(){
  let imgs = document.querySelectorAll('#list li>img');
  if(imgs.length > 0){
    imgs.forEach(img => {
      if((img as HTMLElement).dataset['ratio']){
        let ratio = Number((img as HTMLElement).dataset['ratio']);
        (img as HTMLElement).style.height = img.getBoundingClientRect().width * ratio + "px"
      }
    })
  }
}