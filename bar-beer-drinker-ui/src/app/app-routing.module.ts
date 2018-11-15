import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { DrinkerComponentComponent } from './drinker-component/drinker-component.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkerComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
