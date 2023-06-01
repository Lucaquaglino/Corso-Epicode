import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [

  {
    path: 'to-do',
    component: ToDoComponent,
  },
  {
    path: 'completati',
    component: CompletatiComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    CompletatiComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule,
    RouterModule.forRoot(routes),FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
