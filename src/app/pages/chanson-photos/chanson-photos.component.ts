import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChansonService } from 'src/app/modeles/chanson.service';
import { Saison } from 'src/app/modeles/saison';
import { Saisons } from 'src/saisons';

@Component({
  selector: 'app-chanson-photos',
  templateUrl: './chanson-photos.component.html',
  styleUrls: ['./chanson-photos.component.scss']
})
export class ChansonPhotosComponent implements OnInit {
  saison: Saison|undefined;
  sub: Subscription;
  index: Array<number> = [];

  constructor(private chansonService: ChansonService) {
    this.sub = this.chansonService.getSelectedSeason().subscribe(season => {
      this.saison = season;
      this.index = [];
      for (let i = 1; i <= this.saison.casenumber; i++) {
       this.index.push(i);
      }
      console.log(this.index);
    });
  }

  getNext(): void{
    const next = this.saison.saisonIndex === 4 ? 0 : this.saison.saisonIndex;
    this.chansonService.setSelectedSeason(Saisons[next]);
  }

  getPrec(): void{
    const prec = this.saison.saisonIndex === 1 ? 3 : this.saison.saisonIndex - 2;
    this.chansonService.setSelectedSeason(Saisons[prec]);
  }


  ngOnInit(): void {
  }

}
