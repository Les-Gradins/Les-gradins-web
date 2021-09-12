import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fadeAnimation } from 'src/app/app.animations';
import { Chanson } from 'src/app/modeles/chanson';
import { ChansonService } from 'src/app/modeles/chanson.service';
import { Saison } from 'src/app/modeles/saison';
import { Tracklist } from 'src/tracklist';

@Component({
  selector: 'app-audio-player-button',
  templateUrl: './audio-player-button.component.html',
  styleUrls: ['./audio-player-button.component.scss'],
  animations: [fadeAnimation]
})
export class AudioPlayerButtonComponent implements OnInit {

  public isAudioplayerToggled = false;
  chanson: Chanson|undefined;
  sub: Subscription;
  seasonSub: Subscription;
  psub: Subscription;
  public audioList;
  saison: Saison|undefined;



  constructor(private chansonService: ChansonService) {

    this.psub = this.chansonService.getSelectedPersonnage().subscribe(p => {
      console.log(p);
      // this.personnage = p;
      if (p === 'Kirouac'){
        this.sub = this.chansonService.getSelectedSong().subscribe(title => {
          this.chanson = title;
          this.audioList = [];
          this.audioList = [
              {
                url: this.chanson.url,
                title: this.chanson.trackname,
                cover: '/assets/cover.jpg',
              }
            ];

        });
      } else if (p === 'Kodak') {
        this.seasonSub = this.chansonService.getSelectedSeason().subscribe(title => {
          this.saison = title;
          this.audioList = [];
          this.audioList = this.saison.tracks.reduce((acc, t) => {
            const chansonIdx = Tracklist.findIndex((c) => c.trackname === t);
            acc.push({
              url: Tracklist[chansonIdx].url,
              title: t,
              cover: '/assets/cover.jpg',
            });
            return acc;
          }, []);

        });
      }

    });
    // this.sub = this.chansonService.getSelectedSong().subscribe(title => {
    //   this.chanson = title;
    //   this.audioList = [
    //       {
    //         url: this.chanson.url,
    //         title: this.chanson.trackname,
    //         cover: '/assets/cover.jpg',
    //       }
    //     ];

    // });

    // this.seasonSub = this.chansonService.getSelectedSeason().subscribe(title => {
    //   this.saison = title;
    //   this.audioList = this.saison.tracks.reduce((acc, t) => {
    //     const chansonIdx = Tracklist.findIndex((c) => c.trackname === t);
    //     acc.push([{
    //       url: Tracklist[chansonIdx].url,
    //       title: t,
    //       cover: '/assets/cover.jpg',
    //     }]);
    //     return acc;
    //   }, []);


    // });
    console.log(this.audioList);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 200);
  }



  afficherAudioPlayer(): void {
    this.isAudioplayerToggled = !this.isAudioplayerToggled;
    if (this.isAudioplayerToggled) {
      setTimeout(() => {
        this.init();
      }, 100);
    }
  }

  visibility(): string {
    return this.isAudioplayerToggled ? 'visible' : 'hidden';
  }

  init(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < document.styleSheets[11].cssRules.length; j++) {
      const rule = document.styleSheets[11].cssRules[j] as CSSStyleRule;
      if (rule.cssText.match('-webkit-slider-thumb')) {
        rule.style.backgroundColor = 'black';
        rule.style.height = '6px';
        rule.style.width = '6px';
      }
    }
    const controls = document.getElementsByClassName('controls');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < controls.length; i++) {
      console.log(controls[i].children);

      for (let j = 0; j < controls[i].children.length; j++) {
        const e = controls[i].children[j] as HTMLElement;

        if (window.matchMedia('(max-width: 600px)').matches) {
          e.style.height = '3.2vw';
        } else {
          e.style.height = '0.8vw';
        }
        e.style.fill = 'black';
        if (j === 4 ){// || j === 0){
          e.remove();
        }

        if (j === 0 ){// || j === 0){
          e.style.display = 'none';
        }
      }
      // e.remove();

    }

    const timeline = document.getElementsByClassName('time-line');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < timeline.length; i++) {
      const e = timeline[i] as HTMLElement;
      e.style.fontFamily = 'Eurostile-extended';
      e.style.fontSize = 'xx-small';
      e.style.color = 'black';
      if (window.matchMedia('(max-width: 600px)').matches) {
        console.log('here');
        e.style.fontSize = '7px';
      } else {
        e.style.fontSize = 'xx-small';
      }
    }

    const title = document.getElementsByClassName('title');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < title.length; i++) {
      const e = title[i] as HTMLElement;
      e.style.fontFamily = 'Eurostile-extended';
      // e.style.fontSize = 'small';
      e.style.fontWeight = 'bolder';
      e.style.color = 'black';
      e.style.margin = '0';
      if (window.matchMedia('(max-width: 600px)').matches) {
        console.log('here');
        e.style.fontSize = 'x-small';
      } else {
        e.style.fontSize = 'small';
      }
    }

    const slidecont = document.getElementsByClassName('slidecontainer');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < slidecont.length; i++) {
      const e = slidecont[i] as HTMLElement;

      e.style.marginTop = '0.5vw';
    }

    const cover = document.getElementsByTagName('img');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < cover.length; i++) {
      const e = cover[i] as HTMLElement;
      if ((cover[i].parentNode as HTMLElement).className  === 'cover ng-star-inserted' ){
        e.style.maxHeight = '4vw';
        e.style.maxWidth = '4vw';
      }
    }

    const wrapper = document.getElementsByClassName('wrapper');
    for (let i = 0; i < cover.length; i++) {
      const e = wrapper[i] as HTMLElement;
      e.style.height = 'max-content';
    }

    const container = document.getElementsByClassName('container');
    for (let i = 0; i < cover.length; i++) {
      const e = container[i] as HTMLElement;
      e.style.alignContent = 'center';
      
    }

    // const slider = document.getElementsByClassName('slider');
    // // tslint:disable-next-line: prefer-for-of
    // for (let i = 0; i < slider.length; i++) {
    //   const e = slider[i] as HTMLElement;
    //   e.style().color = 'black'
    // }
  }

  @HostListener('click', ['$event.target']) onClick(e): void {
    // window.alert('Current DOM element is');
    this.init();
  }


}
