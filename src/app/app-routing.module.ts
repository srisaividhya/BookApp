import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'genre', component : GenreComponent} ,   
  {path : 'home', component:HomeComponent },
  {path : 'authors', component:AuthorsComponent },
  {path : 'genre', component: GenreComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
