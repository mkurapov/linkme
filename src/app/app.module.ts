import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './reducers/'

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// import { linkReducer} from './reducer/links';
// import { layoutReducer} from './reducer/layout';


import { LinkService } from './services/link.service';


import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddLinkModalComponent } from './components/add-link-modal/add-link-modal.component'

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ListLinksComponent } from './components/list-links/list-links.component';
import { SingleLinkComponent } from './components/single-link/single-link.component';

import { HomePage } from './pages/home/home.page';
import { GroupsPage } from './pages/groups/groups.page';
import { CategoriesPage } from './pages/categories/categories.page';

import { AppRoutes } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddLinkModalComponent,
    ListLinksComponent,
    SingleLinkComponent,
    SideBarComponent,
    HomePage,
    GroupsPage,
    CategoriesPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
