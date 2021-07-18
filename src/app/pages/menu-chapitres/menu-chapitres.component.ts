import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { merge, Subscription } from 'rxjs';
import { Tracklist } from 'src/tracklist';
import { ChansonService } from '../../modeles/chanson.service';
import { Chanson } from '../../modeles/chanson';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-menu-chapitres',
  templateUrl: './menu-chapitres.component.html',
  styleUrls: ['./menu-chapitres.component.scss'],
})
export class MenuChapitresComponent implements OnInit, OnDestroy {
  public chansonChoisie: Chanson | undefined;
  private sub: Subscription;
  public ms = '';
  public demo6: CircleType;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedSong().subscribe((chanson) => {
      this.chansonChoisie = chanson;
    });
    console.log(this.ms);

  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getNext(): void {
    const next: number =
      this.chansonChoisie.tracknumber === 12
        ? 0
        : this.chansonChoisie.tracknumber;
    this.chansonChoisie = Tracklist[next];
  }

  getPrec(): void {
    const prec: number =
      this.chansonChoisie.tracknumber === 1
        ? 11
        : this.chansonChoisie.tracknumber - 2;
    this.chansonChoisie = Tracklist[prec];
  }

  async selectSong(): Promise<any> {
    this.chansonService.setSelectedSong(this.chansonChoisie).then(() => {
      this.router.navigateByUrl('menu/chanson');
    });
  }
}
