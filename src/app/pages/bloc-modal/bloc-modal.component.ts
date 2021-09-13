import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-modal',
  templateUrl: './bloc-modal.component.html',
  styleUrls: ['./bloc-modal.component.scss']
})
export class BlocModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async redirectToBoutique(): Promise<any> {
    window.location.href = 'https://kirouackodakludo.com/boutique/';

  }

}
