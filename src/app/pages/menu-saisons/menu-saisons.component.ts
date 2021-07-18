import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { merge, Subscription } from 'rxjs';
import { ChansonService } from '../../modeles/chanson.service';
import CircleType from 'circletype';
import { Saisons } from 'src/saisons';
import { Saison } from 'src/app/modeles/saison';

@Component({
  selector: 'app-menu-saisons',
  templateUrl: './menu-saisons.component.html',
  styleUrls: ['./menu-saisons.component.scss']
})
export class MenuSaisonsComponent implements OnInit, OnDestroy {

  public saisonChoisie: Saison|undefined;
  private sub: Subscription;
  public ms = '';
  public demo6: CircleType;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedSeason().subscribe(saison => {
      this.saisonChoisie = saison;
    });

    Saisons.forEach((e) => {
      this.ms += e.nomSaison + ' | ';
    });
    console.log(this.ms);

  }

  ngOnInit(): void {
    this.demo6 = new CircleType(document.getElementById('demo6')).dir(-1);
    console.log(this.demo6);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getNext(): void{
    const next: number = this.saisonChoisie.saisonIndex === 3 ? 0 : this.saisonChoisie.saisonIndex;
    this.saisonChoisie = Saisons[next];
  }

  getPrec(): void{
    const prec: number = this.saisonChoisie.saisonIndex === 1 ? 3 : this.saisonChoisie.saisonIndex - 2;
    this.saisonChoisie = Saisons[prec];
  }

  async selectSong(): Promise<any>{
    this.chansonService.setSelectedSeason(this.saisonChoisie).then(() => {
      this.router.navigateByUrl('menu/photo');
    });
  }

}
