import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChansonService } from 'src/app/modeles/chanson.service';

@Component({
  selector: 'app-page-titre',
  templateUrl: './page-titre.component.html',
  styleUrls: ['./page-titre.component.scss']
})
export class PageTitreComponent implements OnInit {
  sub: Subscription;
  personnage: string|undefined;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedPersonnage().subscribe(perso => {
      this.personnage = perso;
    });
  }

  ngOnInit(): void {
  }


  async selectionnerExperience(p: string): Promise<any>{
    this.chansonService.setSelectedPersonnage(p).then(() => {

    });
  }

  async commencerExperience(): Promise<any>{
    this.chansonService.setSelectedPersonnage(this.personnage).then(() => {
      this.router.navigateByUrl('/menu');
    });
  }

  isNotSelected(p: string): boolean {
    return p !== this.personnage;
  }
  isSelected(p: string): boolean {
    return p === this.personnage;
  }

}
