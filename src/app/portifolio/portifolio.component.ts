import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { StarMainColorComponent } from "../star-main-color/star-main-color.component";
import { ImgsSrc } from '../imgs-src';

type snd = string | null | undefined;
@Component({
  selector: 'app-portifolio',
  imports: [ StarMainColorComponent],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css'
})
export class PortifolioComponent {

  imgSrc :snd  = "";
  getImgSrc(eventInfo:MouseEvent){
    let el = eventInfo.currentTarget as HTMLElement;
    this.imgSrc = el.firstElementChild?.getAttribute("src");
  }

  removeImgSrc(){
    this.imgSrc = "";
  }

  imgsrcs : Array<ImgsSrc> = [
    {src:"imges/poert1.png",
      alt:"poert1"
    },
    {src:"imges/port2.png",
      alt:"port2"
    },
    {src:"imges/port3.png",
      alt:"port1"
    },
    {src:"imges/poert1.png",
      alt:"poert1"
    },
    {src:"imges/port2.png",
      alt:"port2"
    },
    {src:"imges/port3.png",
      alt:"port1"
    }
  ]

  stopCloseImg(eventInfo:MouseEvent){
    eventInfo.stopPropagation();
  }



}
