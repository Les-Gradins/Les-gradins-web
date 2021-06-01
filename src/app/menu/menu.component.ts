import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChansonService } from '../pages/chanson.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges, OnDestroy {
  personnage: string;
  sub: Subscription;
  isCollapsed = false;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedPersonnage().subscribe(p => {
      console.log(p);
      this.personnage = p;
      if (p === 'Kirouac'){
        this.router.navigateByUrl('menu/chapitres');
      } else {
        this.router.navigateByUrl('menu/saisons');
      }

    });
  }

  ngOnChanges(): void{
    if (this.personnage === 'Kirouac'){
      this.router.navigateByUrl('menu/chapitres');
    } else {
      this.router.navigateByUrl('menu/saisons');
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

}
