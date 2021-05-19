import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChansonChapitreComponent } from './pages/chanson-chapitre/chanson-chapitre.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'chanson', component: ChansonChapitreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
