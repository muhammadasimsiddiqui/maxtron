import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {  ExpenseModel, PopularModel, ProductsModel, TransactionsModel, TransactionsModel2, widgetsModel } from './model';
import { widgetsdata,Expensedata,Productsdata,Transactionsdata,Populardata,Transactionsdata2} from './data';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';
import {
    ChartComponent,
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
  ApexPlotOptions
} from "ng-apexcharts";

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
};

@Component({
  selector: 'app-widgets-static',
  standalone: true,
  imports: [CommonModule,SimplebarAngularModule,NgbDropdownModule,NgApexchartsModule],
  templateUrl: './widgets-static.component.html',
  styleUrl: './widgets-static.component.scss'
})
export class WidgetsStaticComponent {
  // widgets model..........
  widgetsdata!: widgetsModel[];
// expense model..
  Expensedata!: ExpenseModel[];
  // Products model..
  Productsdata!: ProductsModel[];
  // Transactions Model...
  Transactionsdata!: TransactionsModel[];
  // Popular Model..
  Populardata!: PopularModel[];
  // Transactions model2..
  Transactionsdata2!: TransactionsModel2[];
  
  @ViewChild("chart") chart!: ChartComponent;
  public Facebook  : Partial<ChartOptions>;
  public LinkedIn  : Partial<ChartOptions>;
    public Instagram  : Partial<ChartOptions>;
    public Snapchat  : Partial<ChartOptions>;
    public Google  : Partial<ChartOptions>;
    public Altaba  : Partial<ChartOptions>;
    public Spotify  : Partial<ChartOptions>;
  constructor(){
    this.widgetsdata = widgetsdata;
    this.Expensedata = Expensedata;
    this.Productsdata = Productsdata;
    this.Transactionsdata = Transactionsdata;
    this.Populardata = Populardata;
    this.Transactionsdata2 = Transactionsdata2;

           // Facebook.............................
           this.Facebook={
            series: [70],
            chart: {
                type: 'radialBar',
                width: 50,
                height: 70,
                sparkline: {
                enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                radialBar: {
                hollow: {
                    margin: 0,
                    size: '67%'
                },
                track: {
                    background: 'rgba(255, 255, 255, 0.12)',
                    strokeWidth: '90%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: false,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },
                dataLabels: {
                    show: true,
                    name: {
                    show: false
                    },
                    value: {
                    show: true,
                    fontSize: '0px',
                    fontWeight: 600,
                    offsetY: 8,
                    }
                }
                },
            },
            colors: ["#0d6efd"],  
        }

        // LinkedIn..........
    this.LinkedIn={
      series: [70],
      chart: {
          type: 'radialBar',
          width: 50,
          height: 70,
          sparkline: {
          enabled: true
          }
      },
      dataLabels: {
          enabled: false
      },
      plotOptions: {
          radialBar: {
          hollow: {
              margin: 0,
              size: '67%'
          },
          track: {
              background: 'rgba(255, 255, 255, 0.12)',
              strokeWidth: '90%',
              margin: 0, // margin is in pixels
              dropShadow: {
                  enabled: false,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
              }
          },
          dataLabels: {
              show: true,
              name: {
              show: false
              },
              value: {
              show: true,
              fontSize: '0px',
              fontWeight: 600,
              offsetY: 8,
              }
          }
          },
      },
      colors: ["#fc1856"],  
  }

  // Instagram ..........
  this.Instagram={
      series: [70],
      chart: {
          type: 'radialBar',
          width: 50,
          height: 70,
          sparkline: {
          enabled: true
          }
      },
      dataLabels: {
          enabled: false
      },
      plotOptions: {
          radialBar: {
          hollow: {
              margin: 0,
              size: '67%'
          },
          track: {
              background: 'rgba(255, 255, 255, 0.12)',
              strokeWidth: '90%',
              margin: 0, // margin is in pixels
              dropShadow: {
                  enabled: false,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
              }
          },
          dataLabels: {
              show: true,
              name: {
              show: false
              },
              value: {
              show: true,
              fontSize: '0px',
              fontWeight: 600,
              offsetY: 8,
              }
          }
          },
      },
      colors: ["#02c27a"],  
  }

  // Snapchat...........
  this.Snapchat={
      series: [70],
      chart: {
          type: 'radialBar',
          width: 50,
          height: 70,
          sparkline: {
          enabled: true
          }
      },
      dataLabels: {
          enabled: false
      },
      plotOptions: {
          radialBar: {
          hollow: {
              margin: 0,
              size: '67%'
          },
          track: {
              background: 'rgba(255, 255, 255, 0.12)',
              strokeWidth: '90%',
              margin: 0, // margin is in pixels
              dropShadow: {
                  enabled: false,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
              }
          },
          dataLabels: {
              show: true,
              name: {
              show: false
              },
              value: {
              show: true,
              fontSize: '0px',
              fontWeight: 600,
              offsetY: 8,
              }
          }
          },
      },
      colors: ["#ffc100"],  
  }

  // Google..........
  this.Google={
      series: [70],
      chart: {
          type: 'radialBar',
          width: 50,
          height: 70,
          sparkline: {
          enabled: true
          }
      },
      dataLabels: {
          enabled: false
      },
      plotOptions: {
          radialBar: {
          hollow: {
              margin: 0,
              size: '67%'
          },
          track: {
              background: 'rgba(255, 255, 255, 0.12)',
              strokeWidth: '90%',
              margin: 0, // margin is in pixels
              dropShadow: {
                  enabled: false,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
              }
          },
          dataLabels: {
              show: true,
              name: {
              show: false
              },
              value: {
              show: true,
              fontSize: '0px',
              fontWeight: 600,
              offsetY: 8,
              }
          }
          },
      },
      colors: ["#0dcaf0"],  
  }

  // Altaba..........
  this.Altaba={
      series: [70],
      chart: {
          type: 'radialBar',
          width: 50,
          height: 70,
          sparkline: {
          enabled: true
          }
      },
      dataLabels: {
          enabled: false
      },
      plotOptions: {
          radialBar: {
          hollow: {
              margin: 0,
              size: '67%'
          },
          track: {
              background: 'rgba(255, 255, 255, 0.12)',
              strokeWidth: '90%',
              margin: 0, // margin is in pixels
              dropShadow: {
                  enabled: false,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
              }
          },
          dataLabels: {
              show: true,
              name: {
              show: false
              },
              value: {
              show: true,
              fontSize: '0px',
              fontWeight: 600,
              offsetY: 8,
              }
          }
          },
      },
      colors: ["#6f42c1"],  
  }

  // Spotify.............
  this.Spotify={
      series: [70],
      chart: {
          type: 'radialBar',
          width: 50,
          height: 70,
          sparkline: {
          enabled: true
          }
      },
      dataLabels: {
          enabled: false
      },
      plotOptions: {
          radialBar: {
          hollow: {
              margin: 0,
              size: '67%'
          },
          track: {
              background: 'rgba(255, 255, 255, 0.12)',
              strokeWidth: '90%',
              margin: 0, // margin is in pixels
              dropShadow: {
                  enabled: false,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
              }
          },
          dataLabels: {
              show: true,
              name: {
              show: false
              },
              value: {
              show: true,
              fontSize: '0px',
              fontWeight: 600,
              offsetY: 8,
              }
          }
          },
      },
      colors: ["#d63384"],  
  }
  }
}