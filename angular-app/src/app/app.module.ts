import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { NpPageComponent } from './np-page/np-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { RedElDirective } from './red-el.directive';
import { PractiseComponent } from './practise/practise.component';
import { ChildComponent } from './child/child.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UsdInrPipe,
    NpPageComponent,
    AboutMeComponent,
    AboutYouComponent,
    RedElDirective,
    PractiseComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
