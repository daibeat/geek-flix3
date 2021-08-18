import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesContainerComponent } from './movies-container/movies-container.component';

const routes: Routes = [
  { path: 'movies-container', component: MoviesContainerComponent },
  { path: '', redirectTo: '/movies-container', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
