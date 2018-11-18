import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar, BarMenuItem } from '../bars.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  barName: string;
  barDetails: Bar;
  menu: BarMenuItem[];

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) {
    
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');
      barService.getBar(this.barName).subscribe(
        data => {
          this.barDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Bar not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the browser console')
          }
        }
      );

      barService.getMenu(this.barName).subscribe(
        data => {
          this.menu = data;
        }
      );

      barService.getPopularBeers(this.barName).subscribe(
        data => {
          var beers = [];
          var sold = [];
          data.sort((a, b) => a.Amountsold < b.AmountSold ? 1 : a.AmountSold > b.AmountSold ? -1 : 0)
          data.forEach(beer => {
            sold.push(beer.AmountSold);
            beers.push(beer.beers);
          }
        );
        beers = beers.splice(0,10);
        sold = sold.splice(0,10);
        this.renderBeerChart(sold, beers);
      });

      barService.getLargestSpenders(this.barName).subscribe(
        data => {
          var drinkers = [];
          var spending = [];
          data.sort((a, b) => a.spendingAmount < b.spendingAmount ? 1 : a.spendingAmount > b.spendingAmount ? -1 : 0)
          data.forEach(drinker => {
            drinkers.push(drinker.drinker);
            spending.push(drinker.spendingAmount);

          }
      );
      drinkers = drinkers.splice(0,20);
      spending = spending.splice(0,20);
      this.renderChart(drinkers, spending);
    });

    barService.getManufacturerSells(this.barName).subscribe(
      data => {
        var manufacturers = [];
        var beerSold = [];
        data.sort((a, b) => a.BeersSold < b.BeersSold ? 1 : a.BeersSold > b.BeersSold ? -1 : 0)
        data.forEach(manu => {
          manufacturers.push(manu.Manufacturer);
          beerSold.push(manu.BeersSold);

        }
    );
    manufacturers = manufacturers.splice(0,5);
    beerSold = beerSold.splice(0,5);
    this.renderManuChart(manufacturers, beerSold);
  });
  barService.getBarTimeDistributionDay(this.barName).subscribe(
    data => {
      console.log(data);
      var time = [];
      var orders = [];
      data.forEach(bar => {
        time.push(bar.hour);
        orders.push(bar.avgT);
      }
  );
  console.log(time)
  console.log(orders);
  this.renderBarDistributionDay(time, orders);
});
barService.getBarTimeDistributionWeek(this.barName).subscribe(
  data => {
    console.log(data);
    var time = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var orders = [];
    data.forEach(bar => {
      orders.push(bar.avgT);
    }
);

this.renderBarDistributionWeek(time, orders);
});
 }
);
}

  ngOnInit() {
  }
  renderBarDistributionWeek(time: string[], orders: number[]) {
    Highcharts.chart('BarDistributionWeekGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Busiest Times of the Week'
      },
      xAxis: {
        categories: time,
        title: {
          text: 'Day Of the Week'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Orders'
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
        data: orders
      }]
    });
  }
  renderBarDistributionDay(time: string[], orders: number[]) {
    Highcharts.chart('BarDistributionDayGraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Busiest Times of the Day'
      },
      xAxis: {
        categories: time,
        title: {
          text: 'Time'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Orders'
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
        data: orders
      }]
    });
  }
renderChart(drinkers: string[], spending: number[]) {
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

renderManuChart(manufacturers: string[], beerSold: number[]) {
  Highcharts.chart('ManufacturersGraph', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Top Manufacturers'
    },
    xAxis: {
      categories: manufacturers,
      title: {
        text: 'Manufacturers'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Beers Sold'
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
      data: beerSold
    }]
  });
}



renderBeerChart(sold: number[], beers: string[]) {
  Highcharts.chart('popularBeersGraph', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Most Popular Beers Sold'
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
        text: 'Number of Beers Sold'
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

}
