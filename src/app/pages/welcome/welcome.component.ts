import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tracklist } from 'src/tracklist';
import { ChansonService } from '../chanson.service';
import { Chanson } from '../song';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [ChansonService]
})
export class WelcomeComponent implements OnInit {
  public selectedSong: Chanson
  constructor(private chansonService: ChansonService, private router: Router) { }

  ngOnInit() {
    this.selectedSong = Tracklist[0];
  }

  getNext(){
    let next: number = this.selectedSong.tracknumber == 12 ? 0 : this.selectedSong.tracknumber;
    console.log(next)
    this.selectedSong = Tracklist[next];
  }

  getPrec(){
    let prec: number = this.selectedSong.tracknumber == 1 ? 11 : this.selectedSong.tracknumber - 2;
    console.log(prec)
    this.selectedSong = Tracklist[prec];
  }

  selectSong(){
    this.chansonService.setSelectedSong(this.selectedSong)
    this.router.navigateByUrl('/chanson')
  }

}
