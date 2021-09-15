import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngMusicPlayerComponent, AngMusicPlayerService } from 'ang-music-player';
import { Subscription } from 'rxjs';
import { Chanson } from 'src/app/modeles/chanson';
import { ChansonService } from 'src/app/modeles/chanson.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, AfterViewInit, OnDestroy {

  chanson: Chanson|undefined;
  sub: Subscription;
  vsub: Subscription;
  p: Subscription;

  public forwardColor: string;

  public audioList;
  @ViewChild(AngMusicPlayerComponent) player: AngMusicPlayerComponent;

  constructor(private chansonService: ChansonService) {
    this.sub = this.chansonService.getAudioList().subscribe(audioList => {
      this.audioList = audioList;
    });
    this.p = this.chansonService.getSelectedPersonnage().subscribe(perso => {
      this.forwardColor = perso === 'Kirouac' ? 'rgba(236, 235, 235, 1)' : 'rgba(0, 0, 0, 1)';
      console.log(this.forwardColor);
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 100);
  }

  ngAfterViewInit(): void {
    this.sub.unsubscribe();
    this.player.play();
    this.vsub = this.chansonService.getAudioList().subscribe(audioList => {

      this.player.audioList = audioList;
      this.player.currentAudioIndex = 0;
      this.player.pause();
      this.player.initiateAudioPlayer();
      this.player.play();
      setTimeout(() => {
        this.init();
      }, 50);

    });
    this.p = this.chansonService.getSelectedPersonnage().subscribe(perso => {
      this.forwardColor = perso === 'Kirouac' ? 'rgba(236, 235, 235, 1)' : 'rgba(0, 0, 0, 1)';
      this.player.previousButtonColor = this.forwardColor;
      this.player.nextButtonColor = this.forwardColor;
    });
  }

  ngOnDestroy(): void {
    this.vsub.unsubscribe();
  }

  init(): void {

    const controls = document.getElementsByClassName('controls');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < controls.length; i++) {

      for (let j = 0; j < controls[i].children.length; j++) {
        const e = controls[i].children[j] as HTMLElement;

        if (window.matchMedia('(max-width: 600px)').matches) {
          e.style.height = '3.2vw';
        } else {
          e.style.height = '0.8vw';
        }
        if (j === 4 ){// || j === 0){
          e.remove();
        }

        if (j === 0 ){// || j === 0){
          e.style.display = 'none';
        }
      }

    }
  }

}
