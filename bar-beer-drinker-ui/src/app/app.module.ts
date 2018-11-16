import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { DrinkerComponentComponent } from './drinker-component/drinker-component.component';
import { InsightComponent } from './insight/insight.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    DrinkerComponentComponent,
    InsightComponent,
    DrinkerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
