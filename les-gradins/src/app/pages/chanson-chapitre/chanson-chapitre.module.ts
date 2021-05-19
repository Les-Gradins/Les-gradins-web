import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { ChansonChapitreComponent } from './chanson-chapitre.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [ChansonChapitreComponent],
  exports: [ChansonChapitreComponent]
})
export class ChansonChapitreModule { }
