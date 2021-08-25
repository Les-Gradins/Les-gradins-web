import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { merge, Subscription } from 'rxjs';
import { ChansonService } from '../../modeles/chanson.service';
import CircleType from 'circletype';
import { Saisons } from 'src/saisons';
import { Saison } from 'src/app/modeles/saison';
import { Chanson } from 'src/app/modeles/chanson';
import { Tracklist } from 'src/tracklist';

@Component({
  selector: 'app-menu-saisons',
  templateUrl: './menu-saisons.component.html',
  styleUrls: ['./menu-saisons.component.scss']
})
export class MenuSaisonsComponent implements OnInit, OnDestroy {

  public saisonChoisie: Saison|undefined;
  public chansonAligne: Chanson | undefined;
  private sub: Subscription;
  public ms = 'YO KODAK! (VI) | IMMORTEL | L\'ÉQUIPE | CARNAVAL (IX) | DANS LE VENT | OLYMPE | LES GRADINS (XII) | REPEAT | MOIMAN | SUNSHINE (III) | CARRÉ SAINT-LOUIS | VRAI |';
  public saisonString = 'HIVER---------------------------------PRINTEMPS---------------------------------ÉTÉ---------------------------------AUTOMNE---------------------------------';
  public demo6: CircleType;
  public demo7: CircleType;
  public transformChansonString = '';
  public transformSaisonString = '';
  public rotationSaison = 12;
  public rotationChanson = 71;
  public rotationLogo = -45;
  public loading = true;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.loading = true;
    this.sub = this.chansonService.getSelectedSeason().subscribe(saison => {
      this.saisonChoisie = saison;
      this.setChansonAligne();
      if (this.rotationSaison === 12 && this.saisonChoisie.saisonIndex !== 1){
        this.rotationSaison = this.saisonChoisie.rotationDeg;
      }
      if (this.rotationChanson === 71 && this.saisonChoisie.saisonIndex !== 1){
        this.rotationChanson = this.chansonAligne.rotDeg;
        this.rotationLogo += this.saisonChoisie.saisonIndex * (-90);
      }

    });


  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 200);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  hideSpace(): void {
    const elem = document.getElementById('demo6');

    for (let i = 0 ; i <= elem.children[0].children.length; i++){
      const s = elem.children[0].children[i] as HTMLElement;
      if ( this.saisonString[i] === '-'){
        s.style.visibility = 'hidden' ;
      }
    }

  }
  hideTracks(): void {
    const elem = document.getElementById('demo7');

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0 ; i < elem.children[0].children.length; i++){
        const c = elem.children[0].children[i] as HTMLElement;
        c.style.fontWeight = 'lighter' ;
    }
  }

  hideSelectedTracks(): void {
    const elem = document.getElementById('demo7');

    this.saisonChoisie.tracks.forEach((c) => {
      let i = this.getChansonStringIndex(c);
      const range = i + c.length;
      for (i ; i < range; i++){
            const e = elem.children[0].children[i] as HTMLElement;
            e.style.fontWeight = 'lighter' ;
      }
    });
  }

  selectTracks(): void {
    const elem = document.getElementById('demo7');

    this.saisonChoisie.tracks.forEach((c) => {
      console.log(c);
      let i = this.getChansonStringIndex(c);
      const range = i + c.length;
      for (i ; i < range; i++){
          const e = elem.children[0].children[i] as HTMLElement;
          e.style.fontWeight = 'bolder' ;
      }
    });

  }

  unselectSaison(): void {
    const elem = document.getElementById('demo6');
    let i = this.getIndex();
    const lastIndex = i + this.saisonChoisie.nomSaison.length;

    for (i ; i <= lastIndex; i++){
      const s = elem.children[0].children[i] as HTMLElement;
      s.style.fontWeight = 'lighter' ;
    }
    this.hideSelectedTracks();
  }

  rotateText(): void {
    const saisons = document.getElementById('demo6');
    const tracks = document.getElementById('demo7');

    const s = this.transformSaisonString + 'rotate(' + this.rotationSaison + 'deg)';
    const t = this.transformChansonString + 'rotate(' + this.rotationChanson + 'deg)';

    saisons.style.transform = s;
    tracks.style.transform =  t;

    let i = this.getIndex();
    const lastIndex = i + this.saisonChoisie.nomSaison.length;
    for (i ; i <= lastIndex; i++){
      const c = saisons.children[0].children[i] as HTMLElement;
      c.style.fontWeight = 'bolder' ;
    }

    this.selectTracks();
  }

  rotateLogo(): void {
    const logo = document.getElementById('logo');
    logo.style.transform  = 'rotate(' + this.rotationLogo + 'deg)';
  }

  setChansonAligne(): void {
    const idx = Tracklist.findIndex((c) => this.saisonChoisie.tracks[1] === c.trackname);
    this.chansonAligne = Tracklist[idx];
  }

  getNext(): void{
    const next: number = this.saisonChoisie.saisonIndex === 4 ? 0 : this.saisonChoisie.saisonIndex;
    const lrds = this.saisonChoisie.saisonIndex === 1 ? 10 : this.saisonChoisie.rotationDeg;
    const lrdt = this.chansonAligne.rotDeg;
    this.rotationLogo -= 90;

    this.unselectSaison();
    this.saisonChoisie = Saisons[next];
    this.setChansonAligne();
    this.rotationSaison += (this.saisonChoisie.rotationDeg - lrds);

    const crdt = this.chansonAligne.tracknumber === 3 ? 431 : this.chansonAligne.rotDeg;
    this.rotationChanson += (crdt - lrdt);
    this.rotateText();
    this.rotateLogo();
  }

  getPrec(): void{
    const prec: number = this.saisonChoisie.saisonIndex === 1 ? 3 : this.saisonChoisie.saisonIndex - 2;
    const lrds = this.saisonChoisie.rotationDeg;
    const lrdt =  this.chansonAligne.tracknumber === 3 ? 431 : this.chansonAligne.rotDeg;
    this.rotationLogo += 90;

    this.unselectSaison();
    this.saisonChoisie = Saisons[prec];
    this.setChansonAligne();
    this.rotationSaison += ((this.saisonChoisie.saisonIndex === 1 ? 12 : this.saisonChoisie.rotationDeg) - lrds);

    this.rotationChanson += (this.chansonAligne.rotDeg - lrdt);
    this.rotateText();
    this.rotateLogo();

  }

  async selectSong(): Promise<any>{
    this.chansonService.setSelectedSeason(this.saisonChoisie).then(() => {
      this.router.navigateByUrl('menu/photo');
    });
  }

  getIndex(): number {
    return this.saisonString.indexOf(this.saisonChoisie.nomSaison);
  }

  getChansonStringIndex(c: string): number {
    return this.ms.indexOf(c);
  }

  init(): void {
    this.demo6 = new CircleType(document.getElementById('demo6')).dir(-1);
    this.demo7 = new CircleType(document.getElementById('demo7')).dir(-1);

    if (window.matchMedia('(max-width: 600px)').matches) {
      this.transformChansonString = 'translateY(-22vh) ';
      this.transformSaisonString = 'translateY(-19vh) ';
    } else {
      this.transformChansonString = 'translateY(-27vh) ';
      this.transformSaisonString = 'translateY(-25vh) ';
    }
    this.hideSpace();
    this.hideTracks();
    this.rotateText();
    this.rotateLogo();

    setTimeout(() => {
      this.loading = false;
    }, 3000)
    
  }
}
