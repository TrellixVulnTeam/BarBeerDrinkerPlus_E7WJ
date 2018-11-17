import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService, Beer } from '../beer.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');
      beerService.getBeer(this.beerName).subscribe(
        data => {
          this.beerDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Beer not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the browser consolemmmmmmm')
          }
        }
      );
    }
  );
  }

  ngOnInit() {
  }

}
