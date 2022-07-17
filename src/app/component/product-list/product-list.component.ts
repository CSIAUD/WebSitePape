import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'comp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewChecked {
  @Input() location = '';
  @Input() products: any;
  @Input() sens = '';
  ratio = 0;

  constructor() {}

  ngAfterViewChecked(): void {
    if(this.sens == "horizontal"){
      this.ratio = environment.ratioHorizontal
    }else if(this.sens == "vertical"){
      this.ratio = environment.ratioVertical
    }
    this.resizeImg();
  }

  resizeImg(){
    let imgs = document.querySelectorAll('#list li>img');
    if(imgs.length > 0){
      imgs.forEach(img => {
        (img as HTMLElement).style.height = img.getBoundingClientRect().width * this.ratio + "px"
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