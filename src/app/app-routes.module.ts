import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LinkService } from './services/link.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePage } from './pages/home/home.component';
import { GroupsPage } from './pages/groups/groups.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePage },
  { path: 'groups', component: GroupsPage },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutes {}
