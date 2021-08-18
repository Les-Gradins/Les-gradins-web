import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chanson } from 'src/app/modeles/chanson';
import { ChansonService } from 'src/app/modeles/chanson.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  chanson: Chanson|undefined;
  sub: Subscription;
  public audioList;
  constructor(private chansonService: ChansonService) {
    this.sub = this.chansonService.getSelectedSong().subscribe(title => {
      this.chanson = title;
      this.audioList = [
          {
            url: this.chanson.url,
            title: this.chanson.trackname,
            cover: '/assets/cover.jpg',
          }
        ];

    });
    console.log(this.audioList);
  }

  // public audioList = [
  //   {
  //     url: '/assets/audio/01_Les_gradins.m4a',
  //     title: '1 - Les Gradins',
  //     cover: '/assets/cover.jpg',
  //   },
  //   {
  //     url: '/assets/audio/02_Repeat.m4a',
  //     title: '2 - Repeat',
  //     cover: '/assets/cover.jpg',
  //   },
  //   {
  //     url: '/assets/audio/03_Moiman.m4a',
  //     title: '3 - Moi-man',
  //     cover: '/assets/cover.jpg',

  //   },
  //   {
  //     url: '/assets/audio/04_Sushine.m4a',
  //     title: '4 - Sushine',
  //     cover: '/assets/cover.jpg',
  //   }
  // ];

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 100);
  }

  init(): void {
    const controls = document.getElementsByClassName('controls');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < controls.length; i++) {
      const e = controls[i] as HTMLElement;
      e.remove();

    }

    const timeline = document.getElementsByClassName('time-line');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < timeline.length; i++) {
      const e = timeline[i] as HTMLElement;
      e.style.fontFamily = 'Eurostile-extended';
      e.style.fontSize = 'xx-small';
      e.style.color = 'black';
    }

    const title = document.getElementsByClassName('title');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < title.length; i++) {
      const e = title[i] as HTMLElement;
      e.style.fontFamily = 'Eurostile-extended';
      e.style.fontSize = 'small';
      e.style.fontWeight = 'bolder';
      e.style.color = 'black';
      e.style.margin = '0';
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
      e.style.maxHeight = '4vw';
      e.style.maxWidth = '4vw';
      // e.style.color = 'black'
    }

    const wrapper = document.getElementsByClassName('wrapper');
    for (let i = 0; i < cover.length; i++) {
      const e = wrapper[i] as HTMLElement;
      e.style.height = 'max-content';
      // e.style.width = 'max-content';
      // e.style.color = 'black'
    }

    const container = document.getElementsByClassName('container');
    for (let i = 0; i < cover.length; i++) {
      const e = container[i] as HTMLElement;
      e.style.alignContent = 'center';
      // e.style.width = 'max-content';
      // e.style.color = 'black'
    }

    // const slider = document.getElementsByClassName('slider');
    // // tslint:disable-next-line: prefer-for-of
    // for (let i = 0; i < slider.length; i++) {
    //   const e = slider[i] as HTMLElement;
    //   e.style().color = 'black'
    // }
  }

}
