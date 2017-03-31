import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { LinkService } from './services/link.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { SingleLinkComponent } from './components/single-link/single-link.component';

import { HomePage } from './pages/home/home.component';
import { GroupsPage } from './pages/groups/groups.component';
import { CategoriesPage } from './pages/categories/categories.component';

import { AppRoutes } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SingleLinkComponent,
    SideBarComponent,
    HomePage,
    GroupsPage,
    CategoriesPage
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
