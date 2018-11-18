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
  query1: string = "query1";
  query2: string = "SELECT NOT EXISTS\n( SELECT f2.drinker, f2.bar FROM frequents f2, bars b, drinkers d WHERE f1.drinker = f2.drinker AND f1.bar = f2.bar AND f2.drinker = d.name AND f2.bar = b.name AND b.state <> d.state) AS verify FROM frequents f1;";
  query3: string = "SELECT NOT EXISTS (SELECT * FROM (SELECT p2.name AS itemChosen, s.item AS item FROM sells s, items p2 WHERE EXISTS( SELECT * FROM s2 WHERE s.bar = s2.bar AND s2.item = p2.name AND s2.price >= s.price AND s.item != p2.name)) lessThanItem, (SELECT s.item AS item, p1.name AS itemChosen FROM sells s, items p1 WHERE EXISTS( SELECT * FROM sells s2 WHERE s.bar = s2.bar AND s2.item = p1.name AND s2.price <= s.price AND s.item != p1.name)) greaterThanItem WHERE lessThanItem.itemChosen = greaterThanItem.itemChosen AND lessThanItem.item = greaterThanItem.item);";

  constructor(

    private veriService: ModificationService,
    private route: ActivatedRoute) { }

    OnClickMe1() {
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
