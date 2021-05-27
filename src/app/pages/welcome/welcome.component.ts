import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tracklist } from 'src/tracklist';
import { ChansonService } from '../chanson.service';
import { Chanson } from '../song';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit, OnDestroy {
  public chansonChoisie: Chanson|undefined;
  private sub: Subscription;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedSong().subscribe(chanson => {

      this.chansonChoisie = chanson;

    });
  }

  ngOnInit(): void {

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
      this.router.navigateByUrl('/chanson');
    });
  }

}
