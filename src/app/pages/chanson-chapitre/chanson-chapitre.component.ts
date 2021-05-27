import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { Tracklist } from 'src/tracklist';
import { ChansonService } from '../chanson.service';
import { Chanson } from '../song';

@Component({
  selector: 'app-chanson-chapitre',
  templateUrl: './chanson-chapitre.component.html',
  styleUrls: ['./chanson-chapitre.component.scss']
})
export class ChansonChapitreComponent implements OnInit, OnChanges, OnDestroy {
  chanson: Chanson|undefined;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private chansonService: ChansonService) {
    this.sub = this.chansonService.getSelectedSong().subscribe(title => {
      this.chanson = title;
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // changes.prop contains the old and the new value...
    // const routeParams = this.route.snapshot.paramMap;
    // const songIdFromRoute = String(routeParams.get('songId'));
    // this.chanson = Tracklist[this.getSongIndex(songIdFromRoute)];
  }

  getSongIndex(tracknumber): number{
    if (tracknumber === 1){
      return 0;
    } else if (tracknumber === 12){
      return 11;
    } else {
      return tracknumber - 1;
    }
  }

  getNext(): void{
    const next = this.chanson.tracknumber === 12 ? 0 : this.chanson.tracknumber;
    this.chansonService.setSelectedSong(Tracklist[next]);
  }

  getPrec(): void{
    const prec = this.chanson.tracknumber === 1 ? 11 : this.chanson.tracknumber - 2;
    this.chansonService.setSelectedSong(Tracklist[prec]);
  }

}
