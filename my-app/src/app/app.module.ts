import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCommonModule} from '@angular/material/core';

import {RouterModule} from '@angular/router';
import appRoutes from './routerConfig';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCommonModule,
    RouterModule,
   RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
