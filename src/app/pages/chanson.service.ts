import { Injectable } from '@angular/core';
import { Chanson } from './song';
import { BehaviorSubject, Observable} from 'rxjs';
import { Tracklist } from 'src/tracklist';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  private chansonActuelle: BehaviorSubject<Chanson> = new BehaviorSubject<Chanson>(Tracklist[0]);
  // chansonActuelle = this.chansonChoisie.asObservable()

  getSelectedSong(): Observable<Chanson>{
    return this.chansonActuelle.asObservable();
  }

  async setSelectedSong(c: Chanson): Promise<any>{
    console.log('SERVICE');


    return new Promise((resolve) => {
      this.chansonActuelle.next(c);
      resolve('SUP');
    });
  }
  constructor() {
    console.log('Called MyDataService constructor');
  }
}
