import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

const routes: Routes = [
  {
    redirectTo: 'dashboard', 
    path: '',
    pathMatch: 'full'
  },
  {
    path: 'dashboard', 
    component: DashBoardComponent
  },
  {
    path: 'chart', 
    component: ChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
