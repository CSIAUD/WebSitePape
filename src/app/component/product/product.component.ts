import { AfterViewChecked, Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewChecked {
  @Input() product: any;

  constructor() {}

  ngAfterViewChecked(): void {
    resizeIframe()
  }
}

window.onresize = resizeIframe;

function resizeIframe(){
    let iframe = document.querySelector('iframe');
    if(iframe){
      iframe.style.height = iframe.getBoundingClientRect().width * (9/16) + "px"
    }
}