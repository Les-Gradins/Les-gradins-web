import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from 'src/app/app.animations';

@Component({
  selector: 'app-audio-player-button',
  templateUrl: './audio-player-button.component.html',
  styleUrls: ['./audio-player-button.component.scss'],
  animations: [fadeAnimation]
})
export class AudioPlayerButtonComponent implements OnInit {

  public isAudioplayerToggled = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  afficherAudioPlayer(): void {
    this.isAudioplayerToggled = !this.isAudioplayerToggled;
  }


}
