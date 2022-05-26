import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
//import { AuthorsComponent } from './authors/authors.component';
/*  firebase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

import { FirebaseService } from './firebase.service'; */ 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    //GenreComponent,
    HomeComponent,
    //AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebase, 'my-book-app'),
    //AngularFireDatabaseModule
  ],
  //providers: [FirebaseService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
