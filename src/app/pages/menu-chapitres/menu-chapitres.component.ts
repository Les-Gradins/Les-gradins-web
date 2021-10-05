import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { merge, Subscription } from 'rxjs';
import { Tracklist } from 'src/tracklist';
import { ChansonService } from '../../modeles/chanson.service';
import { Chanson } from '../../modeles/chanson';
import CircleType from 'circletype';
import { fadeAnimation } from 'src/app/app.animations';

@Component({
  selector: 'app-menu-chapitres',
  templateUrl: './menu-chapitres.component.html',
  styleUrls: ['./menu-chapitres.component.scss'],
  animations: [fadeAnimation]
})
export class MenuChapitresComponent implements OnInit, OnDestroy {
  public chansonChoisie: Chanson | undefined;
  private sub: Subscription;
  public ms = 'YO KODAK! (VI) | IMMORTEL | L\'ÉQUIPE | CARNAVAL (IX) | DANS LE VENT | OLYMPE | LES GRADINS (XII) | REPEAT | MOIMAN | SUNSHINE (III) | CARRÉ SAINT-LOUIS | VRAI |';
  public demo6: CircleType;
  public rotationDeg = 16;
  public logoRotationDeg = 0;
  public transformString = '';
  public unlockedSub: Subscription;
  public estUnlocked: boolean;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedSong().subscribe((chanson) => {
      this.chansonChoisie = chanson;


      if (this.rotationDeg === 16 && this.chansonChoisie.tracknumber !== 1){
        this.rotationDeg = this.chansonChoisie.rotDeg;
      }

    });

    this.unlockedSub = this.chansonService.getEstDebloquee().subscribe((u) => {
      this.estUnlocked = u;
    });

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 100);
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  rotateText(): void {
    const elem = document.getElementById('demo6');
    const s = this.transformString + 'rotate(' + this.rotationDeg + 'deg)';
    elem.style.transform = s;

    this.getIndex();
    let i = this.getIndex();
    const lastIndex = i + this.chansonChoisie.trackname.length;
    for (i ; i <= lastIndex; i++){
      const c = elem.children[0].children[i] as HTMLElement;
      c.style.fontWeight = 'bolder' ;
    }
  }

  visibility(): string {
    return (this.estUnlocked || !this.chansonService.songIsLocked(this.chansonChoisie.tracknumber)) ? 'hidden' : 'visible';
  }

  rotateLogo(): void {
    const logo = document.getElementById('logo');

    logo.style.transform  = 'rotate(' + this.logoRotationDeg + 'deg)';
  }

  unselectChanson(): void {
    const elem = document.getElementById('demo6');
    let i = this.getIndex();
    const lastIndex = i + this.chansonChoisie.trackname.length;

    for (i ; i <= lastIndex; i++){
      const s = elem.children[0].children[i] as HTMLElement;
      s.style.fontWeight = 'lighter' ;
    }
  }
  getNext(): void{
    const next: number = this.chansonChoisie.tracknumber === 12 ? 0 : this.chansonChoisie.tracknumber;
    const lrd = this.chansonChoisie.tracknumber === 1 ? 16 : this.chansonChoisie.rotDeg;
    this.logoRotationDeg -= 30;

    this.unselectChanson();
    this.chansonChoisie = Tracklist[next];
    this.rotationDeg += (this.chansonChoisie.rotDeg - lrd);
    this.rotateText();
    this.rotateLogo();

  }


  getPrec(): void{
    const prec: number = this.chansonChoisie.tracknumber === 1 ? 11 : this.chansonChoisie.tracknumber - 2;
    const lrd = this.chansonChoisie.rotDeg;
    this.logoRotationDeg += 30;

    this.unselectChanson();
    this.chansonChoisie = Tracklist[prec];
    this.rotationDeg += ((this.chansonChoisie.tracknumber === 1 ? 16 : this.chansonChoisie.rotDeg) - lrd);
    this.rotateText();
    this.rotateLogo();
  }

  async selectSong(): Promise<any> {
    if (this.estUnlocked || !this.chansonService.songIsLocked(this.chansonChoisie.tracknumber)){
      this.chansonService.setSelectedSong(this.chansonChoisie).then(() => {
        this.logoRotationDeg = 0;
        this.rotateLogo();
        setTimeout(() => this.router.navigateByUrl('menu/chanson'), 1450);
      });
    } else {
      setTimeout(() => this.router.navigateByUrl('menu/bloc'), 1450);
    }

  }

  getIndex(): number {
    return this.ms.indexOf(this.chansonChoisie.trackname);
  }

  init(): void {
    this.demo6 = new CircleType(document.getElementById('demo6')).dir(-1);

    if (window.matchMedia('(max-width: 600px)').matches) {
      this.transformString = 'translateY(-18.5vh) ';
    } else {
      this.transformString = 'translateY(-26vh) ';
    }
    this.rotateText();
  }

}
