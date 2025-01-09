import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"Home page"},
  {path:"about",component:AboutComponent,title:"About page"},
  {path:"portifolio",component:PortifolioComponent,title:"Portifolio page"},
  {path:"contact",component:ContactComponent,title:"contact page"},
  {path:"**",component:NotFoundComponent,title:"Not Found"}
];


