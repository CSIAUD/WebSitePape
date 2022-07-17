import { AfterViewChecked, Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'comp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewChecked {
  @Input() product: any;
  @Input() sens = '';

  init = true;
  public apiURL = environment.apiURL

  constructor() {}

  ngAfterViewChecked(): void {
    if(this.init){
      this.init = false;
      resizeIframe();
    }
  }
}

window.onresize = resizeIframe;

function resizeIframe(){
    let iframe = document.querySelector('iframe');
    if(iframe){
      iframe.style.height = iframe.getBoundingClientRect().width * (9/16) + "px"
    }
}
