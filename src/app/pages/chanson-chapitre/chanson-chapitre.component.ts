import { Component, OnInit, SimpleChanges } from '@angular/core';
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
export class ChansonChapitreComponent implements OnInit {
  song: Chanson|undefined;
  p: string;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private chansonService: ChansonService) {
    // this.song = chansonService.chansonActuelle.value
    this.sub = this.chansonService.getSelectedSong().subscribe(title => {

      this.song = title;
      console.log(this.song)
    // 
    // route.params.subscribe(params => {
    //   console.log(params)
    //   this.song = Tracklist[this.getSongIndex(params)];
    })
   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const songIdFromRoute = String(routeParams.get('songId'));
   

  // Find the product that correspond with the id provided in route.
    // this.song = Tracklist[this.getSongIndex(songIdFromRoute)];
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    const routeParams = this.route.snapshot.paramMap;
    const songIdFromRoute = String(routeParams.get('songId'));
    this.song = Tracklist[this.getSongIndex(songIdFromRoute)];
  }

    getSongIndex(tracknumber){
      if(tracknumber == 1){
        return 0
      } else if (tracknumber == 12){
        return 11
      } else {
        return tracknumber - 1
      }
    }

    getNext(){
      console.log("NEXT")
      let next = this.song.tracknumber == 12 ? 0 : this.song.tracknumber;
      // console.log(next)
      this.chansonService.setSelectedSong(Tracklist[next]);
    }
  
    getPrec(){
      console.log("PREC")
      let prec = this.song.tracknumber == 1 ? 11 : this.song.tracknumber - 2;
      // console.log(prec)
      this.chansonService.setSelectedSong(Tracklist[prec]);
    }

}
