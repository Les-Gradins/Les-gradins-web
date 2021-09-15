import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChansonService } from 'src/app/modeles/chanson.service';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class PersonnageComponent implements OnInit, OnDestroy {
  public personnageSelectionne: string;
  sub: Subscription;
  constructor(private chansonService: ChansonService, public router: Router) {
    this.sub = this.chansonService.getSelectedPersonnage().subscribe(p => {
      this.personnageSelectionne = p;

   });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  onClick(): void {
    this.router.navigateByUrl('');
  }

}
