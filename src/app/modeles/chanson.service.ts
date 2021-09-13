import { Injectable } from '@angular/core';
import { Chanson } from './chanson';
import { BehaviorSubject, Observable} from 'rxjs';
import { Tracklist } from 'src/tracklist';
import { Saison } from './saison';
import { Saisons } from 'src/saisons';

const INDEX_BLOCKED: Array<number> = [8, 9, 10, 11, 12];
const INDEX_SAISON_BLOCKED: Array<number> = [3, 4];
@Injectable({
  providedIn: 'root'
})


export class ChansonService {
  private chansonActuelle: BehaviorSubject<Chanson> = new BehaviorSubject<Chanson>(Tracklist[0]);
  private saisonActuelle: BehaviorSubject<Saison> = new BehaviorSubject<Saison>(Saisons[0]);
  private personnage: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private estDebloquee: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getSelectedSong(): Observable<Chanson>{
    return this.chansonActuelle.asObservable();
  }
  getSelectedSeason(): Observable<Saison>{
    return this.saisonActuelle.asObservable();
  }

  getEstDebloquee(): Observable<boolean>{
    return this.estDebloquee.asObservable();
  }

  async setSelectedSong(c: Chanson): Promise<any>{
    return new Promise((resolve) => {
      this.chansonActuelle.next(c);
      resolve('Nouvelle piste sélectionnée');
    });
  }

  async setSelectedSeason(s: Saison): Promise<any>{
    return new Promise((resolve) => {
      this.saisonActuelle.next(s);
      resolve('Nouvelle saison sélectionnée');
    });
  }

  getSelectedPersonnage(): Observable<string>{
    return this.personnage.asObservable();
  }

  songIsLocked(n: number): boolean {
    return INDEX_BLOCKED.includes(n);
  }
  saisonIsLocked(n: number): boolean {
    return INDEX_SAISON_BLOCKED.includes(n);
  }

  async setSelectedPersonnage(p: string): Promise<any>{
    return new Promise((resolve) => {
      this.personnage.next(p);
      resolve('SUP');
    });
  }
  constructor() {
  }
}
