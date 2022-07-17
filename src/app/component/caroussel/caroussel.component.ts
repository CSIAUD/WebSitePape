import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'comp-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements AfterViewInit {
  @Input() imgs: any;
  @Input() sens = '';
  init = true;
  delay = 2; // temps entre 2 Slides en secondes
  anim = 1; // temps animation Slides en secondes
  ratio = 0;

  constructor() {
  }

  ngAfterViewInit(): void {
    if(this.init){
      this.init = false;
      if(this.sens == "horizontal"){
        this.ratio = environment.ratioHorizontal
      }else if(this.sens == "vertical"){
        this.ratio = environment.ratioVertical
      }else if(this.sens == "accueil"){
        this.ratio = environment.ratioAccueil
      }
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
