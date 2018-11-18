import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModificationService, Result } from '../modification.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css'],
  template: `
  <br><br><br><br>
  <input #query
      (keyup.enter)="onClickMe(newHero.value)"
      (blur)="onClickMe(query.value); query.value=null">
    <button (click)="OnClickMe(query.value)">Submit Query</button>
    {{ clickMessage }}`
})
export class ModificationComponent implements OnInit {

  result: Result;
  clickMessage = '';
  constructor(

      private modService: ModificationService,
      private route: ActivatedRoute) { }

      onClickMe(value: string) {
        if(value == '')
        {
          this.clickMessage = 'Please enter a query';
        }
        else
        {
          this.modService.sendQuery(value).subscribe(
            data => {
              this.result = data;
              this.clickMessage = this.result.first;
            },
            error => {
              alert('could not process query');
            }
          );
        }
      }

  ngOnInit() {
  }

}
