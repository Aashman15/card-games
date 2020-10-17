import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { ShowFarasComponent } from './games/show-faras/show-faras.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    ShowFarasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
