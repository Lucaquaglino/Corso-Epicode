import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const rotte: Route[] = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'film',
      component: MoviesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  },
  {
    path: 'navBar',
    component: NavBarComponent,

},

]






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rotte),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
