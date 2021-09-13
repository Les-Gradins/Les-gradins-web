import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  estUnlocked: boolean;
  unlockedSub: Subscription;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedSeason().subscribe(season => {
      this.saison = season;
      this.index = [];
      for (let i = 1; i <= this.saison.casenumber; i++) {
       this.index.push(i);
      }
      console.log(this.index);
    });

    this.unlockedSub = this.chansonService.getEstDebloquee().subscribe((u) => {
      this.estUnlocked = u;
    });
  }

  getNext(): void{
    const next = this.saison.saisonIndex === 4 ? 0 : this.saison.saisonIndex;
    if (this.estUnlocked || !this.chansonService.saisonIsLocked(Saisons[next].saisonIndex)){
      this.chansonService.setSelectedSeason(Saisons[next]);
    } else {
      this.router.navigateByUrl('menu/bloc');
    }
  }

  getPrec(): void{
    const prec = this.saison.saisonIndex === 1 ? 3 : this.saison.saisonIndex - 2;
    if (this.estUnlocked || !this.chansonService.saisonIsLocked(Saisons[prec].saisonIndex)){
      this.chansonService.setSelectedSeason(Saisons[prec]);
    } else {
      this.router.navigateByUrl('menu/bloc');
    }
  }


  ngOnInit(): void {
  }

}
