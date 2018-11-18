import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModificationService, Result } from '../modification.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  clickMessage1: string;
  clickMessage2: string;
  clickMessage3: string;
  result: Result;
  query1: string = "select not exists(SELECT t.transactionID, t.bar, t.time,b.name,dayofweek(t.time) FROM transactions t, bars b WHERE t.bar = b.name AND (CASE WHEN (dayofweek(t.time) > 1 AND dayofweek(t.time) <6) THEN not ((b.weekdayOpen <= b.weekdayClose AND hour(t.time) between hour(b.weekdayOpen) AND hour(b.weekdayClose)) OR (b.weekdayClose < b.weekdayOpen AND (hour(t.time) <= hour(b.weekdayClose) or hour(t.time) >= hour(b.weekdayOpen)))) ELSE not ((b.weekendOpen <= b.weekendClose and hour(t.time) between hour(b.weekendOpen) and hour(b.weekendClose)) OR (b.weekendClose < b.weekendOpen AND (hour(t.time) <= hour(b.weekendClose) or hour(t.time) >= hour(b.weekendOpen)))) END)) as verify;";
  query2: string = "SELECT NOT EXISTS( SELECT f2.drinker, f2.bar FROM frequents f2, bars b, drinkers d WHERE f1.drinker = f2.drinker AND f1.bar = f2.bar AND f2.drinker = d.name AND f2.bar = b.name AND b.state <> d.state) AS verify FROM frequents f1;";
  query3: string = "select not exists (select * from (SELECT distinct(s.item), p1.name as chosenItem FROM items p1, sells s left join sells s2 on s.bar = s2.bar WHERE s2.item = p1.name AND s2.price < s.price AND s.item != p1.name) lessThanItem left join (SELECT distinct(s.item), p1.name as chosenItem FROM items p1, sells s left join sells s2 on s.bar = s2.bar WHERE s2.item = p1.name AND s2.price > s.price AND s.item != p1.name)greaterThanItem on lessThanItem.chosenItem = greaterThanItem.chosenItem and lessThanItem.item = greaterThanItem.chosenItem where greaterThanItem.item is not null) as verify;"


  constructor(

    private veriService: ModificationService,
    private route: ActivatedRoute) { }

    OnClickMe1() {
      this.clickMessage1= 'checking...';;
      this.clickMessage2= '';
      this.clickMessage3= '';
      this.veriService.verifyAssertion(this.query1).subscribe(
        data => {
          this.result = data;
          this.clickMessage1 = this.result.first;
        }
      );
  }

    OnClickMe2() {
      this.clickMessage1= '';
      this.clickMessage2 = 'checking';
      this.clickMessage3= '';
      this.veriService.verifyAssertion(this.query2).subscribe(
        data => {
          this.result = data;
          this.clickMessage2 = this.result.first;
        }
      );
    }

    OnClickMe3() {
      this.clickMessage2= '';
      this.clickMessage1= '';
      this.clickMessage3 = 'checking...'
      this.veriService.verifyAssertion(this.query3).subscribe(
        data => {
          this.result = data;
          this.clickMessage3 = this.result.first;
        }
      );
    }

  ngOnInit() {
  }

}
