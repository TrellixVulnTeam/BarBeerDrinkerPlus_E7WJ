import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker {
  name: string;
  phone: string;
  city: string;
  state: string;
  addr: string;
}
@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(
    public http: HttpClient
  ) { }

  getDrinkers() {
    return this.http.get<Drinker[]>('/api/drinkers');
  }

  getDrinker(drinker: string) {
    return this.http.get<Drinker>('api/drinkers/' + drinker);
  }
}
