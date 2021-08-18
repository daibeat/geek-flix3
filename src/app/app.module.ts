import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesContainerComponent,
    MovieDetailComponent,
    MovieCardComponent,
    MovieDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
