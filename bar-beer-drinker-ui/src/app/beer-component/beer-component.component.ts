import { Component, OnInit } from '@angular/core';
import {  Beer, BeerService  } from '../beer.service';


@Component({
  selector: 'app-beer-component',
  templateUrl: './beer-component.component.html',
  styleUrls: ['./beer-component.component.css']
})
export class BeerComponentComponent implements OnInit {

  constructor(
    public beerService: BeerService
  ) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(){
    this.beerService.getBeers().subscribe(
      data => {
        this.bars = data;
      },
      error => {
        alert('Could not retrieve a list of beers');
      }
    );
  }
}
