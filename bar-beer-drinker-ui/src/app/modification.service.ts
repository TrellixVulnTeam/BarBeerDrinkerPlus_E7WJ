import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Result{
  first: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  constructor(
    public http: HttpClient
  ) { }

  sendQuery(query: string){
      return this.http.get<Result>('/api/send-query/' + query);
    }


  }
