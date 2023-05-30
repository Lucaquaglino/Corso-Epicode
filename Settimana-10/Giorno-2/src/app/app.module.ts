import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { Route, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';

const routes:Route[] = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"post-attivi",
    component:PostAttiviComponent
  },
  {
    path:"post-inattivi",
    component:PostInattiviComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
