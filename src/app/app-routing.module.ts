import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ChansonChapitreComponent } from './pages/chanson-chapitre/chanson-chapitre.component';
import { ChansonPhotosComponent } from './pages/chanson-photos/chanson-photos.component';
import { MenuSaisonsComponent } from './pages/menu-saisons/menu-saisons.component';
import { PageTitreComponent } from './pages/page-titre/page-titre.component';
import { MenuChapitresComponent } from './pages/menu-chapitres/menu-chapitres.component';
import { AudioPlayerComponent } from './pages/audio-player/audio-player.component';
import { BlocModalComponent } from './pages/bloc-modal/bloc-modal.component';

const routes: Routes = [
  { path: '', component: PageTitreComponent, data:{animation: 'isRight'} },
  { path: 'player', component: AudioPlayerComponent},
  { path: 'menu', component: MenuComponent, children: [
    { path: 'chapitres', component: MenuChapitresComponent, data: { animation: 'isLeft' }},
    { path: 'chanson', component: ChansonChapitreComponent, data: { animation: 'isRight' }},
    { path: 'photo', component: ChansonPhotosComponent , data: { animation: 'isRight' }},
    { path: 'saisons', component: MenuSaisonsComponent, data: { animation: 'isLeft' } },
    { path: 'bloc', component: BlocModalComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
