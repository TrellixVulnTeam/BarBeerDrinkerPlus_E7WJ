import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { DrinkerComponentComponent } from './drinker-component/drinker-component.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { InsightComponent } from './insight/insight.component';
import { BeerComponentComponent } from './beer-component/beer-component.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component'
import { ModificationComponent } from './modification/modification.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'bars'
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'drinkers/:drinkers',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkerComponentComponent
  },
  {
    path: 'insight',
    pathMatch: 'full',
    component: InsightComponent
  },
  {
    path: 'beer',
    pathMatch: 'full',
    component: BeerComponentComponent
  },
  {
    path: 'beer/:beer',
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'modification',
    pathMatch: 'full',
    component: ModificationComponent
  },
  {
    path: 'verification',
    pathMatch: 'full',
    component: VerificationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
