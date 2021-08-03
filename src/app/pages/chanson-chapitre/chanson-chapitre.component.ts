import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { Tracklist } from 'src/tracklist';
import { ChansonService } from '../../modeles/chanson.service';
import { Chanson } from '../../modeles/chanson';

@Component({
  selector: 'app-chanson-chapitre',
  templateUrl: './chanson-chapitre.component.html',
  styleUrls: ['./chanson-chapitre.component.scss']
})
export class ChansonChapitreComponent implements OnInit, OnChanges, OnDestroy {
  chanson: Chanson|undefined;
  sub: Subscription;
  index: Array<number> = [];

  constructor(private route: ActivatedRoute, private chansonService: ChansonService) {
    this.sub = this.chansonService.getSelectedSong().subscribe(title => {
      this.chanson = title;
      this.index = [];
      for (let i = 1; i <= this.chanson.casenumber; i++) {
       this.index.push(i);
      }
      console.log(this.index);
    });

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
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
    const bd = document.getElementById('BD');
    bd.scrollTop = 0;
  }

  getPrec(): void{
    const prec = this.chanson.tracknumber === 1 ? 11 : this.chanson.tracknumber - 2;
    this.chansonService.setSelectedSong(Tracklist[prec]);
    const bd = document.getElementById('BD');
    bd.scrollTop = 0;
  }

}
