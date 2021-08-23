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
import { MovieSimilarComponent } from './movie-similar/movie-similar.component';
import { MessagesComponent } from './messages/messages.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesContainerComponent,
    MovieDetailComponent,
    MovieCardComponent,
    MovieDescComponent,
    MovieSimilarComponent,
    MessagesComponent,
    CheckboxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzCheckboxModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
