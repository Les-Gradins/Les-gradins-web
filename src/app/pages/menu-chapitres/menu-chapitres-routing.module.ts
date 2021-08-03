import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuChapitresComponent } from './menu-chapitres.component';

const routes: Routes = [
  { path: '', component: MenuChapitresComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuChapitresRoutingModule { }
