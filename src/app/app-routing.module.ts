import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ChansonChapitreComponent } from './pages/chanson-chapitre/chanson-chapitre.component';
import { ChansonPhotosComponent } from './pages/chanson-photos/chanson-photos.component';
import { MenuSaisonsComponent } from './pages/menu-saisons/menu-saisons.component';
import { PageTitreComponent } from './pages/page-titre/page-titre.component';
import { MenuChapitresComponent } from './pages/menu-chapitres/menu-chapitres.component';

const routes: Routes = [
  { path: '', component: PageTitreComponent },
  { path: 'menu', component: MenuComponent, children: [
    { path: 'chapitres', component: MenuChapitresComponent},
  { path: 'chanson', component: ChansonChapitreComponent },
  { path: 'photo', component: ChansonPhotosComponent },
  { path: 'saisons', component: MenuSaisonsComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
