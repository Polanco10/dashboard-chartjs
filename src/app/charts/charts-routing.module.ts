import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';


const routes: Routes = [
    {path: "barchart", component: BarChartComponent},
    {path: "bubblechart", component: BubbleChartComponent},
    {path: "doughnutchart", component: DoughnutChartComponent},
    {path: "linechart", component: LineChartComponent},
    {path: "piechart", component: PieChartComponent},
    {path: "radarchart", component: RadarChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
