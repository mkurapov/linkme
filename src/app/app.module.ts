import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { LinkService } from './services/link.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePage } from './pages/home/home.component';
import { GroupsPage } from './pages/groups/groups.component';

import { AppRoutes } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePage,
    GroupsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
