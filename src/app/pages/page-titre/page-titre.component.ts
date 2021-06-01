import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChansonService } from '../chanson.service';

@Component({
  selector: 'app-page-titre',
  templateUrl: './page-titre.component.html',
  styleUrls: ['./page-titre.component.scss']
})
export class PageTitreComponent implements OnInit {

  constructor(private chansonService: ChansonService, private router: Router) {}

  ngOnInit(): void {
  }



  async commencerExperience(p: string): Promise<any>{
    this.chansonService.setSelectedPersonnage(p).then(() => {
      if (p === 'Kirouac'){
        this.router.navigateByUrl('/welcome');
      } else {
        this.router.navigateByUrl('/saisons');
      }
    });
  }

}
