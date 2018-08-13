import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

//Servicios
import { JokesService } from './services/jokes.service';
import { JokesComponent } from './components/jokes/jokes.component';


@NgModule({
  declarations: [
    AppComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
