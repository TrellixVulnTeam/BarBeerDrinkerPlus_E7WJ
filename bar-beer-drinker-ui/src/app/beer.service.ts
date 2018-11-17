import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Beer{
  name: string
  manufacturer: string
}

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    public http: HttpClient
  ) { }

  getBeers(){
    return this.http.get<Beer[]>('/api/beer');
  }

  getBeer(beer: string) {
    return this.http.get<Beer>('api/beer/' + beer);
  }

  getBestSellingLocations(beer: string) {
    return this.http.get<any[]>('api/best-selling-locations/' + beer);
  }

  getTopConsumers(beer: string) {
    return this.http.get<any[]>('api/top_consumers/' + beer);
  }

}
