import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  isScroll : boolean = false;

  @HostListener('window:scroll', [])
  scrollUser(){
    if(scrollY>0){
      this.isScroll = true;
    }else{
      this.isScroll = false;

    }
  }

}
