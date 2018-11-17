import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService, Beer } from '../beer.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

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
      beerService.getBestSellingLocations(this.beerName).subscribe(
        data => {
          console.log(data);
          var bars = [];
          var sold = [];
          data.sort((a, b) => a.BeersSold < b.BeersSold ? 1 : a.BeersSold > b.BeersSold ? -1 : 0)
          data.forEach(bar => {
            sold.push(bar.BeersSold);
            bars.push(bar.Bar);
          }
        );
        bars = bars.splice(0,10);
        sold = sold.splice(0,10);
        this.renderBeerChart(sold, bars);
      });
    }
  );
  }

  ngOnInit() {
  }

  renderBestSellingBeersChart(drinkers: string[], spending: number[]) {
    Highcharts.chart('barSpendersGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Largest Spenders'
      },
      xAxis: {
        categories: drinkers,
        title: {
          text: 'Drinkers'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount drinker spends at this bar'
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
        data: spending
      }]
    });
  }

}
