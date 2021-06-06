import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { merge, Subscription } from 'rxjs';
import { Tracklist } from 'src/tracklist';
import { ChansonService } from '../../modeles/chanson.service';
import { Chanson } from '../../modeles/chanson';
import CircleType from 'circletype';

@Component({
  selector: 'app-menu-chapitres',
  templateUrl: './menu-chapitres.component.html',
  styleUrls: ['./menu-chapitres.component.scss']
})

export class MenuChapitresComponent implements OnInit, OnDestroy {
  public chansonChoisie: Chanson|undefined;
  private sub: Subscription;
  public ms = '';
  public demo6: CircleType;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedSong().subscribe(chanson => {

      this.chansonChoisie = chanson;

    });

    Tracklist.forEach((e) => {
      this.ms += e.trackname + " | ";
    });
    console.log(this.ms);


  }

  ngOnInit(): void {
    this.demo6 = new CircleType(document.getElementById('demo6')).dir(-1);
    console.log(this.demo6);
    this.demo6.destroy.bind(this.demo6);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getNext(): void{
    const next: number = this.chansonChoisie.tracknumber === 12 ? 0 : this.chansonChoisie.tracknumber;
    this.chansonChoisie = Tracklist[next];

    
  }

  getPrec(): void{
    const prec: number = this.chansonChoisie.tracknumber === 1 ? 11 : this.chansonChoisie.tracknumber - 2;
    this.chansonChoisie = Tracklist[prec];
  }

  async selectSong(): Promise<any>{
    this.chansonService.setSelectedSong(this.chansonChoisie).then(() => {
      this.router.navigateByUrl('menu/chanson');
    });
  }

}
