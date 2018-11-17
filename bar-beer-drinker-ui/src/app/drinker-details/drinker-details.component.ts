import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkersService, Drinker, DrinkerTransactions} from '../drinkers.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: Drinker;
  drinkerTransactions: DrinkerTransactions[]
  drinkerMostBeers: any[]
  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute
  ) {

    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinkers');
      drinkersService.getDrinker(this.drinkerName).subscribe(
        data => {
          this.drinkerDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Drinker not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the browser console')
          }
        }
      );

      drinkersService.getDrinkerTransactions(this.drinkerName).subscribe(
        data => {
            this.drinkerTransactions = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Drinker not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the browser console')
          }
        }
      );
      drinkersService.getDrinkerMostBeers(this.drinkerName).subscribe(
        data => {
          var beers = [];
          var quantity = [];
          this.drinkerMostBeers = data;
          data.sort((a, b) => a.quantity < b.quantity ? 1 : a.quantity > b.quantity ? -1 : 0)
          console.log(data);
          data.forEach(beer => {
                beers.push(beer.beer);
                quantity.push(beer.quantity);
              }
          );
          console.log(beers);
          console.log(quantity);
          beers = beers.splice(0,10);
          quantity = quantity.splice(0,10);
          this.renderMostBeersChart(beers,quantity);
        }
      );

      // barService.getPopularBeers(this.barName).subscribe(
      //   data => {
      //     console.log(data);
      //     var beers = [];
      //     var sold = [];
      //     data.sort((a, b) => a.Amountsold < b.AmountSold ? 1 : a.AmountSold > b.AmountSold ? -1 : 0)
      //     data.forEach(beer => {
      //       sold.push(beer.AmountSold);
      //       beers.push(beer.beers);
      //     }
      //   );
      //   beers = beers.splice(0,10);
      //   sold = sold.splice(0,10);
      //   this.renderBeerChart(sold, beers);
      // });

    //   barService.getLargestSpenders(this.barName).subscribe(
    //     data => {
    //       console.log(data);
    //       var drinkers = [];
    //       var spending = [];
    //       data.sort((a, b) => a.spendingAmount < b.spendingAmount ? 1 : a.spendingAmount > b.spendingAmount ? -1 : 0)
    //       data.forEach(drinker => {
    //         drinkers.push(drinker.drinker);
    //         spending.push(drinker.spendingAmount);
    //
    //       }
    //   );
    //   drinkers = drinkers.splice(0,20);
    //   spending = spending.splice(0,20);
    //   this.renderChart(drinkers, spending);
    // });

  //   barService.getManufacturerSells(this.barName).subscribe(
  //     data => {
  //       console.log(data);
  //       var manufacturers = [];
  //       var beerSold = [];
  //       data.sort((a, b) => a.BeersSold < b.BeersSold ? 1 : a.BeersSold > b.BeersSold ? -1 : 0)
  //       data.forEach(manu => {
  //         manufacturers.push(manu.Manufacturer);
  //         beerSold.push(manu.BeersSold);
  //
  //       }
  //   );
  //   manufacturers = manufacturers.splice(0,5);
  //   beerSold = beerSold.splice(0,5);
  //   this.renderManuChart(manufacturers, beerSold);
  // });

 }
);
}


  ngOnInit() {
  }
  renderMostBeersChart(beers: string[], quantity: number[]) {
    Highcharts.chart('mostBeersChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Beers Ordered Most'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Beers'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Beers Bought'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: quantity
      }]
    });
  }
}
