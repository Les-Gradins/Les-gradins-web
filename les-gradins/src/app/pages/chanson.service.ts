import { Injectable } from '@angular/core';
import { Chanson } from './song';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  private selectedSong: BehaviorSubject<Chanson>

  getSelectedSong(){
    return this.selectedSong.asObservable();
  }

  setSelectedSong(c: Chanson){
    this.selectedSong.next(c)
  }
  constructor() { }
}
