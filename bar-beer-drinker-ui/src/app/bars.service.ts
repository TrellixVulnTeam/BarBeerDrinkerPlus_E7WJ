import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bar {
  name: string;
  city: string;
  state: string;
  weekdayOpen: string;
  weekdayClose: string;
  weekendOpen: string;
  weekendClose: string;
}

export interface BarMenuItem {
  item: string;
  itemType: string;
  manufacturer: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { }

  getBars() {
    return this.http.get<Bar[]>('/api/bar');
  }

  getBar(bar: string) {
    return this.http.get<Bar>('api/bar/' + bar);
  }

  getMenu(bar: string) {
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }

  getFrequentCounts() {
    return this.http.get<any[]>('/api/frequents-data');
 }
 getLargestSpenders(bar: string){
   return this.http.get<any[]>('/api/large-spenders/' + bar);
 }

 getPopularBeers(bar: string){
   return this.http.get<any[]>('/api/popular-beers/' + bar);
 }

 getManufacturerSells(bar: string){
   return this.http.get<any[]>('/api/manufacturer-sells/' + bar);
 }

}
