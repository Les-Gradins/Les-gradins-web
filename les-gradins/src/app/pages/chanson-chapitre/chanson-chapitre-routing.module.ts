import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChansonBdComponent } from '../chanson-bd/chanson-bd.component';
import { ChansonPhotosComponent } from '../chanson-photos/chanson-photos.component';
import { ChansonChapitreComponent } from './chanson-chapitre.component';

const routes: Routes = [
  { path: '', component: ChansonChapitreComponent },
  { path: 'BD', component: ChansonBdComponent },
  { path: 'Photos', component: ChansonPhotosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChansonChapitreRoutingModule { }
