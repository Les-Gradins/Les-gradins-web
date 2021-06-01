import { NgModule } from '@angular/core';
import { ChansonService } from '../../modeles/chanson.service';

import { ChansonChapitreRoutingModule } from './chanson-chapitre-routing.module';

import { ChansonChapitreComponent } from './chanson-chapitre.component';


@NgModule({
  imports: [ChansonChapitreRoutingModule],
  declarations: [ChansonChapitreComponent],
  exports: [ChansonChapitreComponent]
})
export class ChansonChapitreModule { }
