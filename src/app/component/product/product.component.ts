import { AfterViewChecked, Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewChecked {
  @Input() product: any;
  @Input() sens = '';
  ratio = 0;

  init = true;
  delay = 2; // temps entre 2 Slides en secondes
  anim = 1; // temps animation Slides en secondes
  public apiURL = environment.apiURL

  constructor() {}

  ngAfterViewChecked(): void {
    if(this.sens == "horizontal"){
      this.ratio = environment.ratioHorizontal
    }else if(this.sens == "vertical"){
      this.ratio = environment.ratioVertical
    }
    if(this.init){
      this.init = false;
      resizeIframe();
      this.carousselLoop(this.delay, this.anim);
    }
  }
  
  carousselLoop(delay: number, anim: number) {
  let caroussel = (document.querySelector("#caroussel") as HTMLElement);
  caroussel.style.height = caroussel.getBoundingClientRect().width * this.ratio +"px"
  let length = caroussel.children.length;
  if(caroussel){
    if(length>1){
      length--;
      setTimeout(() => {
        if(caroussel.dataset['nb']){
          let id = parseInt(caroussel.dataset['nb']);
          let center = caroussel.children[id];
          id = (id+1>length?0:id+1);
          let right = caroussel.children[(id)];
          caroussel.dataset['nb'] = id.toString();

          center.classList.replace('left-0', '-left-full');
          right.classList.replace('left-full', 'left-0');
          setTimeout(() => {
            let left = center;
            left.classList.remove('duration-1000');
            left.classList.replace('-left-full', 'left-full');
            setTimeout(() => {
            left.classList.add('duration-1000');
            }, 100);
          }, (anim*1000));
          this.carousselLoop(delay, anim);
        }
      }, ((delay + anim + 0.25)*1000));
    }else if(length==1){
      return;
    }else{
      setTimeout(() => {
        this.carousselLoop(delay, anim);
      }, 100);
    }
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
