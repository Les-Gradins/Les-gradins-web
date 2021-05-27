import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Tracklist } from 'src/tracklist';
import { ChansonService } from '../chanson.service';
import { Chanson } from '../song';

@Component({
  selector: 'app-chanson-chapitre',
  templateUrl: './chanson-chapitre.component.html',
  styleUrls: ['./chanson-chapitre.component.scss'],
  providers: [ChansonService],
})
export class ChansonChapitreComponent implements OnInit, OnChanges {
  song: Chanson | undefined;
  p: string;

  constructor(private route: ActivatedRoute, chansonService: ChansonService) {
    // this.song = chansonService.getSelectedSong()
    //
    // route.params.subscribe(params => {
    //   console.log(params)
    //   this.song = Tracklist[this.getSongIndex(params)];
    // })
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const songIdFromRoute = Number(routeParams.get('songId'));

    // Find the product that correspond with the id provided in route.
    this.song = Tracklist[this.getSongIndex(songIdFromRoute)];
  }

  ngOnChanges(changes: SimpleChanges): void {
    // changes.prop contains the old and the new value...
    const routeParams = this.route.snapshot.paramMap;
    const songIdFromRoute = Number(routeParams.get('songId'));
    this.song = Tracklist[this.getSongIndex(songIdFromRoute)];
  }

  getSongIndex(tracknumber: number): number {
    if (tracknumber === 1) {
      return 0;
    } else if (tracknumber === 12) {
      return 11;
    } else {
      return tracknumber - 1;
    }
  }

  getNext(): number {
    console.log('NEXT');
    return this.song.tracknumber === 12 ? 0 : this.song.tracknumber;
    // console.log(next)
    // this.selectedSong = Tracklist[next];
  }

  getPrec(): number {
    console.log('PREC');
    return this.song.tracknumber === 1 ? 11 : this.song.tracknumber - 2;
    // console.log(prec)
    // this.selectedSong = Tracklist[prec];
  }
}
