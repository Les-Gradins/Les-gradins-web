import { Injectable } from '@angular/core';
import { Chanson } from './chanson';
import { BehaviorSubject, Observable} from 'rxjs';
import { Tracklist } from 'src/tracklist';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  private chansonActuelle: BehaviorSubject<Chanson> = new BehaviorSubject<Chanson>(Tracklist[0]);
  private personnage: BehaviorSubject<string> = new BehaviorSubject<string>('Kirouac');

  getSelectedSong(): Observable<Chanson>{
    return this.chansonActuelle.asObservable();
  }

  async setSelectedSong(c: Chanson): Promise<any>{


    return new Promise((resolve) => {
      this.chansonActuelle.next(c);
      resolve('Nouvelle piste sélectionnée');
    });
  }

  getSelectedPersonnage(): Observable<string>{
    return this.personnage.asObservable();
  }

  async setSelectedPersonnage(p: string): Promise<any>{
    console.log('SERVICE');


    return new Promise((resolve) => {
      this.personnage.next(p);
      resolve('SUP');
    });
  }
  constructor() {
  }
}