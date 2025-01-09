import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { StarMainColorComponent } from "../star-main-color/star-main-color.component";

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
}
