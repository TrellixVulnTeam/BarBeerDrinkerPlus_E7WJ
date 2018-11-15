import { Component, OnInit } from '@angular/core';
import {  Drinker, DrinkersService } from '../drinkers.service';


@Component({
  selector: 'app-drinker-component',
  templateUrl: './drinker-component.component.html',
  styleUrls: ['./drinker-component.component.css']
})
export class DrinkerComponentComponent implements OnInit {

  drinkers: Drinker[];

  constructor(
    public DrinkersService: DrinkersService

  ) { }

  ngOnInit() {
    this.getDrinkers();
  }
  getDrinkers(){
    this.DrinkersService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert('Could not retrieve a list of bars');
      }
    );
  }
}
