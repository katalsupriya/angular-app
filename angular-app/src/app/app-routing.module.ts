import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NpPageComponent } from './np-page/np-page.component';
import { PractiseComponent } from './practise/practise.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about/:id',
    children:[
      {
        path:'aboutme',
        component:AboutMeComponent
      },
      {
        path:'aboutyou',
        component:AboutYouComponent
      }
    ]
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:PractiseComponent,
    path:'practise'
  },
  {
    component:HomeComponent,
    path:''
  },
  {
    component:NpPageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
