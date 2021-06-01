import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChansonBdComponent } from './pages/chanson-bd/chanson-bd.component';
import { ChansonChapitreComponent } from './pages/chanson-chapitre/chanson-chapitre.component';
import { ChansonPhotosComponent } from './pages/chanson-photos/chanson-photos.component';
import { MenuSaisonsComponent } from './pages/menu-saisons/menu-saisons.component';
import { PageTitreComponent } from './pages/page-titre/page-titre.component';

const routes: Routes = [
  { path: '', component: PageTitreComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'chanson/', loadChildren: () => import('./pages/chanson-chapitre/chanson-chapitre.module').then(m => m.ChansonChapitreModule) },
  { path: 'chanson', component: ChansonChapitreComponent },
  { path: 'chanson/BD/:songId', component: ChansonBdComponent },
  { path: 'chanson/Photos/:songId', component: ChansonPhotosComponent },
  { path: 'saisons', component: MenuSaisonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
