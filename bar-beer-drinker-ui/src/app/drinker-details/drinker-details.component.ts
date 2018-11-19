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
  clickMessage: '';

  constructor(
    private drinkersService: DrinkersService,
    private route: ActivatedRoute) {

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
 }
);
}

  OnClickMe(time1: string, time2: string)
  {
    if(time1 == '' || time2 =='')
    {
        this.clickMessage = 'Please enter a time interval';
    }
    else
    {
      this.clickMessage = '';
      var interval = time1.concat(",",time2);
      var send = this.drinkerName.concat(",",interval);
      this.drinkersService.getDrinkerTime(send).subscribe(
        data => {
          var t = [];
          var spending = [];
          console.log(data);
          data.forEach(time2 => {
            console.log(time2.time);
            t.push(time2.time);
            spending.push(time2.total);
          }
        );
        this.renderDrinkerTimeChart(t,spending);
        }
      );
      }
    }

  ngOnInit() {
  }

  renderDrinkerTimeChart(time: string[], total: number[]) {
    Highcharts.chart('DrinkersTimeChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Drinkers Spending Habits'
      },
      xAxis: {
        categories: time,
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Spending in dollars'
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
        data: total
      }]
    });
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
