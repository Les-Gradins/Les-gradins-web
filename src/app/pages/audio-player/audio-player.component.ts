import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  constructor() { }

  
  public audioList = [
    {
      url: '/assets/audio/01_Les_gradins.m4a',
      title: '1 - Les Gradins',
      cover: '/assets/cover.jpg',
    },
    {
      url: '/assets/audio/02_Repeat.m4a',
      title: '2 - Repeat',
      cover: '/assets/cover.jpg',
    },
    {
      url: '/assets/audio/03_Moiman.m4a',
      title: '3 - Moi-man',
      cover: '/assets/cover.jpg',

    },
    {
      url: '/assets/audio/04_Sushine.m4a',
      title: '4 - Sushine',
      cover: '/assets/cover.jpg',
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 100);
  }

  init():void {
    const controls = document.getElementsByClassName('controls');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < controls.length; i++) {
      const e = controls[i] as HTMLElement;
      e.remove();

    }
  }

}
