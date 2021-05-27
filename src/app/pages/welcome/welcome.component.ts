import { Component, OnInit } from '@angular/core';
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
export class WelcomeComponent implements OnInit {
  public selectedSong: Chanson|undefined;
  private sub: Subscription;

  constructor(private chansonService: ChansonService, private router: Router) { 
    this.sub = this.chansonService.getSelectedSong().subscribe(title => {

      this.selectedSong = title;
      console.log(this.selectedSong)
    // 
    // route.params.subscribe(params => {
    //   console.log(params)
    //   this.song = Tracklist[this.getSongIndex(params)];
    })
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
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

  async selectSong(){
    this.chansonService.setSelectedSong(this.selectedSong).then(()=>{
      this.router.navigateByUrl('/chanson')
    })
    

    
  }

}
