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

      barService.getLargestSpenders(this.barName).subscribe(
        data => {
          console.log(data);
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
 }
);
}

  ngOnInit() {
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

}
