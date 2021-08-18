import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { ChansonPhotosComponent } from './pages/chanson-photos/chanson-photos.component';
import { PageTitreComponent } from './pages/page-titre/page-titre.component';
import { HomeButtonComponent } from './pages/home-button/home-button.component';
import { MenuSaisonsComponent } from './pages/menu-saisons/menu-saisons.component';
import { PersonnageComponent } from './pages/personnage/personnage.component';
import { MenuChapitresComponent } from './pages/menu-chapitres/menu-chapitres.component';
import { ChansonChapitreComponent } from './pages/chanson-chapitre/chanson-chapitre.component';
import { MenuComponent } from './menu/menu.component';
import { ChansonService } from './modeles/chanson.service';
import { AngMusicPlayerModule } from 'ang-music-player';
import { SoundbarsComponent } from './components/soundbars/soundbars.component';
import { AudioPlayerButtonComponent } from './components/audio-player-button/audio-player-button.component';
import { AudioPlayerComponent } from './pages/audio-player/audio-player.component';

registerLocaleData(fr);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    ChansonPhotosComponent,
    PageTitreComponent,
    HomeButtonComponent,
    MenuSaisonsComponent ,
    PersonnageComponent,
    MenuChapitresComponent,
    ChansonChapitreComponent,
    MenuComponent,
    SoundbarsComponent,
    AudioPlayerButtonComponent,
    AudioPlayerComponent
  ],
  imports: [
    AngMusicPlayerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }, { provide: NZ_ICONS, useValue: icons }, ChansonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
