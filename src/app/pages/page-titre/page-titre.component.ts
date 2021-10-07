import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChansonService } from 'src/app/modeles/chanson.service';
import { fader, slider } from 'src/app/route-animations';

@Component({
  selector: 'app-page-titre',
  templateUrl: './page-titre.component.html',
  styleUrls: ['./page-titre.component.scss'],
  animations: [fader, slider]
})
export class PageTitreComponent implements OnInit {
  sub: Subscription;
  personnage: string|undefined;

  constructor(private chansonService: ChansonService, private router: Router) {
    this.sub = this.chansonService.getSelectedPersonnage().subscribe(perso => {
      this.personnage = perso;
    });
  }

  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
    console.log(this.detectBrowserName());
  }

  detectBrowserName(): string { 
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
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

  isNotSelected(p: string): string {
    return (p !== this.personnage) ? 'visible' : 'hidden';
  }
  isSelected(p: string): string {
    return (p === this.personnage) ? 'visible' : 'hidden';
  }

}
