import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DoughnutChartsComponent } from './components/doughnut-charts/doughnut-charts.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LinesChartComponent } from './components/lines-chart/lines-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DashBoardComponent,
    DoughnutChartsComponent,
    LineChartComponent,
    LinesChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
