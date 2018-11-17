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
    route.paramMap.subscribe((paramMap) => {
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

      beerService.getTopConsumers(this.beerName).subscribe(
        data => {
          console.log(data);
          var drinkers = [];
          var consumed = [];
          data.sort((a, b) => a.AmountConsumed < b.AmountConsumed ? 1 : a.AmountConsumed > b.AmountConsumed ? -1 : 0)
          data.forEach(drinker => {
            drinkers.push(drinker.Drinker);
            consumed.push(drinker.AmountConsumed);
          }
        );
        drinkers = drinkers.splice(0,10);
        consumed = consumed.splice(0,10);
        this.renderTopConsumersChart(drinkers, consumed);
      });

      beerService.getBestSellingLocations(this.beerName).subscribe(
        data => {
          console.log(data);
          var bars = [];
          var sold = [];
          data.sort((a, b) => a.NumberSold < b.NumberSold ? 1 : a.NumberSold > b.NumberSold ? -1 : 0)
          data.forEach(bar => {
            sold.push(bar.NumberSold);
            bars.push(bar.Bar);
          }
        );
        bars = bars.splice(0,10);
        sold = sold.splice(0,10);
        this.renderBestSellingLocationsChart(bars, sold);
      });

    }
  );
  }

  ngOnInit() {
  }

  renderBestSellingLocationsChart(bars: string[], sold: number[]) {
    Highcharts.chart('BestSellingLocationsGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Best Selling Locations For This Beer'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Bars'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Beers Sold at Each Bar'
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
        data: sold
      }]
    });
  }

  renderTopConsumersChart(drinkers: string[], consumed: number[]) {
    Highcharts.chart('TopConsumersGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Consumers of this Beer'
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
          text: 'Number of Beers Sold at Each Bar'
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
        data: consumed
      }]
    });
  }

}
