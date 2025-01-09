import { Component } from '@angular/core';
import { StarMainColorComponent } from "../star-main-color/star-main-color.component";

@Component({
  selector: 'app-contact',
  imports: [StarMainColorComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  valueInput :string = "";
  emptyInput(eventInfo:Event){
    let target = eventInfo.target as HTMLInputElement;

    this.valueInput = target.value;
    if(this.valueInput!=""){
      target.nextElementSibling?.classList.add("animate-top")
    }else{
      target.nextElementSibling?.classList.remove("animate-top")
    }
  }
}
