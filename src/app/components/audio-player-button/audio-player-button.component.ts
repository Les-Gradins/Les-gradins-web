import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeAnimation } from 'src/app/app.animations';
import { ChansonService } from 'src/app/modeles/chanson.service';


@Component({
  selector: 'app-audio-player-button',
  templateUrl: './audio-player-button.component.html',
  styleUrls: ['./audio-player-button.component.scss'],
  animations: [fadeAnimation]
})
export class AudioPlayerButtonComponent implements OnInit, OnDestroy {

  public isAudioplayerToggled = false;
  personnage: string|undefined;
  psub: Subscription;

  constructor(private chansonService: ChansonService) {

    this.psub = this.chansonService.getSelectedPersonnage().subscribe(p => {
      this.personnage = p;
    });

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 200);
  }

  ngOnDestroy(): void{
    this.psub.unsubscribe();
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
      if (rule.cssText.match('-webkit-slider-thumb') || rule.cssText.match('-moz-range-thumb')) {
        rule.style.backgroundColor = 'black';
        rule.style.borderColor = 'black';
        rule.style.height = '6px';
        rule.style.width = '6px';
      }
    }
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
        if (j === 4 ){
          e.remove();
        }

        if (j === 0 ){
          e.style.display = 'none';
        }
      }

    }

    const timeline = document.getElementsByClassName('time-line');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < timeline.length; i++) {
      const e = timeline[i] as HTMLElement;
      e.style.fontFamily = 'Eurostile-extended';
      e.style.fontSize = 'xx-small';
      e.style.color = 'black';
      if (window.matchMedia('(max-width: 600px)').matches) {

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

    const container = document.getElementsByClassName('container');
    for (let i = 0; i < cover.length; i++) {
      const e = container[i] as HTMLElement;
      e.style.alignContent = 'center';

    }
  }

  @HostListener('click', ['$event.target']) onClick(e): void {
    this.init();
  }

}
