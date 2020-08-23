import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ChartsRoutingModule } from './charts-routing.module'

@NgModule({
  declarations: [
    BarChartComponent,
    BubbleChartComponent,
    RadarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ChartsRoutingModule
  ],
  exports:[
    BarChartComponent,
    BubbleChartComponent,
    RadarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent
  ]
})
export class DashboardChartsModule { }
