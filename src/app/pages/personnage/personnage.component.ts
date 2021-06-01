import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChansonService } from '../chanson.service';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class PersonnageComponent implements OnInit, OnDestroy {
  public personnageSelectionne: string;
  sub: Subscription;
  constructor(private chansonService: ChansonService) {
    this.sub = this.chansonService.getSelectedPersonnage().subscribe(p => {
      this.personnageSelectionne = p;

   });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

}
