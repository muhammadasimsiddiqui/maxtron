import { Component, OnInit } from '@angular/core';
import { registerables } from 'chart.js';
Chart.register(...registerables);
Line.register(...registerables);
bar.register(...registerables);
donut.register(...registerables);
import Chart from 'chart.js/auto';
import Line from 'chart.js/auto';
import bar from 'chart.js/auto';
import donut from 'chart.js/auto';
import radar from 'chart.js/auto';
import radardonut from 'chart.js/auto';
import horizontal from 'chart.js/auto';
import mixed from 'chart.js/auto';
import area from 'chart.js/auto';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexLegend,
  ApexDataLabels,
  ApexTooltip,
  ApexGrid,
  ApexStroke,
  ApexResponsive,
  ApexPlotOptions,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  yaxis?: ApexXAxis | any;
  colors?: ApexXAxis | any;
  fill?: ApexFill | any;
  legend?: ApexLegend | any;
  stroke?: ApexStroke | any;
  markers?: ApexStroke | any;
  labels?: string[] | any;
  dataLabels?: ApexDataLabels | any;
  grid?: ApexGrid | any;
  tooltip?: ApexTooltip | any;
  responsive?: ApexResponsive | any;
  plotOptions?: ApexPlotOptions | any;
  datasets?: ApexAxisChartSeries | any;
  gradientStroke?: any;
  title?: ApexTitleSubtitle | any;
  type?: string | any;
  data?: any;
  options?: any;
  borderRadius?: any;
};

@Component({
  selector: 'app-chartjs',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chartjs.component.html',
  styleUrl: './chartjs.component.scss',
})
export class ChartjsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;
  public Line: any;
  public bar: any;
  public donut: any;
  public radar: any;
  public radardonut: any;
  public horizontal: any;
  public mixed: any;
  public area: any;

  createChart() {
    // chart 1.........................
    this.Line = new Line('MyChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
          {
            label: 'Google',
            data: [10, 20, 35, 10, 27, 11, 20],
            backgroundColor: ['#0dcaf0'],
            tension: 0.4,

            // lineTension: 0.4,
            // pointRadius :"0",
            // pointHoverRadius:"0",
            borderColor: ['#0dcaf0'],
            borderWidth: 4,
            fill: {
              target: 'origin',
              above: 'rgb(13 110 253 / 15%)', // Area will be red above the origin
              //below: 'rgb(21 202 32 / 100%)'   // And blue below the origin
            },
          },
          {
            label: 'Facebook',
            data: [5, 30, 16, 23, 18, 14, 5],
            backgroundColor: ['#dc3545'],
            tension: 0.4,
            // pointRadius :"0",
            // pointHoverRadius:"0",
            borderColor: ['#dc3545'],
            borderWidth: 4,
            fill: {
              target: 'origin',
              above: 'rgb(252 24 90 / 15%)', // Area will be red above the origin
              //below: 'rgb(21 202 32 / 100%)'   // And blue below the origin
            },
          },
        ],
      },

      options: {
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    // chart 2........................
    this.bar = new bar('bar', {
      type: 'bar',
      data: {
        datasets: [
          {
            
            label: 'Sales',
            data: [10, 25, 18, 35, 20, 38, 23, 26, 15, 32, 20, 13],
            // tension: 0.4,
            backgroundColor: ['#0dcaf0'],
            borderRadius: 20,
            // borderColor: [
            //   'red'
            // ],
            // borderWidth: 10,
          },
          {
            label: 'Visits',
            data: [15, 30, 22, 55, 14, 35, 20, 35, 20, 15, 18, 5],
            // tension: 0.4,
            backgroundColor: ['#dc3545'],
            borderRadius: 20,
            borderColor: [
              // '#dc3545'
            ],
            // borderWidth: 10,
            // borderRadius: 20,
          },
        ],
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      options: {
        // tension: 0.4,
        // borderRadius: 30,
        aspectRatio: 0.9,
        // categoryPercentage: 0.3,
        maintainAspectRatio: false,
        // cutout: 130,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      },
    });
    // chart 3.........................
    this.chart = new Chart('MyChart1', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#0d6efd',
              '#6f42c1',
              '#d63384',
              '#fd7e14',
              '#15ca20',
              '#0dcaf0',
            ],
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
        },
      },
    });
    // chart 4...................
    this.donut = new donut('donut', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#0d6efd',
              '#6f42c1',
              '#d63384',
              '#fd7e14',
              '#15ca20',
              '#0dcaf0',
            ],
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
        },
      },
    });
    // chart 5......................
    this.radar = new radar('radar', {
      type: 'radar',
      data: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running',
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
          },
        ],
      },
      options: {
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
        },
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    });
    // chart 6........................
    this.radardonut = new radardonut('radardonut', {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Purple', 'Yellow', 'Grey', 'Green'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              '#0d6efd',
              '#6f42c1',
              '#d63384',
              '#fd7e14',
              '#15ca20',
              '#0dcaf0',
            ],
          },
        ],
      },
      options: {
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
        },
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    });
    // chart 7..........................
    this.horizontal = new horizontal('horizontal', {
      type: 'bar',
      data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
          {
            label: 'Google',
            data: [18, 25, 14, 12, 17, 8, 10],
            backgroundColor: ['#fd3550'],
            // lineTension: 0,
            borderColor: ['#fd3550'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        // barPercentage: 0.5,
        // categoryPercentage: 0.7,
        indexAxis: 'y',
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    // chart 8.............................
    this.mixed = new mixed('mixed', {
      type: 'line',

      data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
          {
            type: 'bar',
            label: 'Google',
            data: [6, 20, 14, 12, 17, 8, 10],
            backgroundColor: ['#008cff'],
            // lineTension: 0.4,

            borderColor: ['#008cff'],
            borderWidth: 1,
          },
          {
            type: 'line',
            label: 'Facebook',
            data: [5, 30, 16, 23, 8, 14, 11],
            backgroundColor: ['#fd3550'],
            tension: 0.4,
            borderColor: ['#fd3550'],
            borderWidth: 4,
          },
        ],
      },
      options: {
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        // barPercentage: 0.5,
        // categoryPercentage: 0.5,
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    // chart 9............................
    this.area = new area('area', {
      type: 'line',
      data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
          {
            label: 'Facebook',
            data: [5, 30, 16, 23, 8, 14, 2],
            backgroundColor: ['#15ca20'],
            fill: {
              target: 'origin',
              above: 'rgb(21 202 32 / 20%)', // Area will be red above the origin
              //below: 'rgb(21 202 32 / 100%)'   // And blue below the origin
            },
            tension: 0.4,
            borderColor: ['#15ca20'],
            borderWidth: 4,
          },
        ],
      },
      options: {
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        // barPercentage: 0.5,
        // categoryPer  centage: 0.5,
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
