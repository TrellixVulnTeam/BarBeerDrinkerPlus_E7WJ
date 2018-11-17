import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker {
  name: string;
  phone: string;
  city: string;
  state: string;
  addr: string;
}
export interface DrinkerTransactions {
  bar: string;
  transactionID: string;
  time: string;
  total: number;
  tip: number;
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
  getDrinkerTransactions(drinker: string) {
    return this.http.get<DrinkerTransactions[]>('api/drinker_transactions/' + drinker);
  }
  getDrinkerMostBeers(drinker: string) {
    return this.http.get<any[]>('api/drinker_most_beers/' + drinker);
  }
}
