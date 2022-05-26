import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'books', component : GenreComponent} ,   
  {path : 'home', component:HomeComponent },

  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
