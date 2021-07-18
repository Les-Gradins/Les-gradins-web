import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio-player-button',
  templateUrl: './audio-player-button.component.html',
  styleUrls: ['./audio-player-button.component.scss']
})
export class AudioPlayerButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  afficherAudioPlayer(): void {
    this.router.navigateByUrl('player');
  }

}
