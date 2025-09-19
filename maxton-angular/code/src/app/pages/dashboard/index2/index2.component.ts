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




import { Component ,ViewChild} from '@angular/core';

// import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { index2Model,PopularModel, TransactionsModel, VendorsModel} from './model';
import { index2data,Populardata,Vendorsdata,Transactionsdata} from './data';
import { NgbDropdownModule, NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index2',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgbRatingModule,
    NgbDropdownModule
  ],
  templateUrl: './index2.component.html',
  styleUrl: './index2.component.scss'
})
// export class NgbdRatingConfig {
// 	constructor(config: NgbRatingConfig) {
// 		// customize default values of ratings used by this component tree
// 		config.max = 5;
// 		config.readonly = true;
// 	}
// }
export class Index2Component{
     // index2 model
     index2data!: index2Model[];
    //  Popular model..
    Populardata!: PopularModel[];
    // Vendors model..
    Vendorsdata!: VendorsModel[];
    // Transactions Model
    Transactionsdata!: TransactionsModel[];

  @ViewChild("chart") chart!: ChartComponent;
  public totalorders  : Partial<ChartOptions>;
  public totalsales  : Partial<ChartOptions>;
  public totalvisits  : Partial<ChartOptions>;
  public bouncerate  : Partial<ChartOptions>;
  public Views  : Partial<ChartOptions>;
  public orderstatus  : Partial<ChartOptions>;
  public totalprofit  : Partial<ChartOptions>;
  public budget  : Partial<ChartOptions>;
  public monthly  : Partial<ChartOptions>;
  public yearly  : Partial<ChartOptions>;


  constructor(config: NgbRatingConfig) {
    config.max = 5;
		config.readonly = true;
    this.index2data = index2data;
    this.Populardata = Populardata;
    this.Vendorsdata = Vendorsdata;
    this.Transactionsdata = Transactionsdata;

    // Total Orders chart1
    this.totalorders = {
  
      series: [{
        name: "",
        data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
    }],
    chart: {
        //width:150,
        height: 60,
        type: 'area',
        sparkline: {
            enabled: !0
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1.5,
        curve: "smooth"
      },
      fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#0d6efd'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.7,
            opacityTo: 0.0,
            //stops: [0, 100, 100, 100]
        },
    },
    colors: ["#0d6efd"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                // formatter: function (e) {
                //     return ""
                // }
            }
        },
        marker: {
            show: !1
        }
    },
    
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }
  // Total Sales chart2
  this.totalsales ={
    series: [{
      name: "",
      data: [12, 14, 7, 47, 32, 44, 14, 55, 41, 69]
  }],
  chart: {
      //width:150,
      height: 60,
      type: 'area',
      sparkline: {
          enabled: !0
      },
      zoom: {
          enabled: false
      }
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      width: 1.5,
      curve: "smooth"
    },
    fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          gradientToColors: ['#17ad37'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 0.7,
          opacityTo: 0.0,
          //stops: [0, 100, 100, 100]
      },
  },
  colors: ["#98ec2d"],
  tooltip: {
      theme: "dark",
      fixed: {
          enabled: !1
      },
      x: {
          show: !1
      },
      y: {
          title: {
              // formatter: function (e) {
              //     return ""
              // }
          }
      },
      marker: {
          show: !1
      }
  },
  
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  }
  // Total Visits chart3
  this.totalvisits = {
    series: [{
      name: "",
      data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
  }],
  chart: {
      //width:150,
      height: 60,
      type: 'area',
      sparkline: {
          enabled: !0
      },
      zoom: {
          enabled: false
      }
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      width: 1.5,
      curve: "smooth"
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#2af598"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100, 100, 100]
      }
    },
    colors: ["#009efd"],
  tooltip: {
      theme: "dark",
      fixed: {
          enabled: !1
      },
      x: {
          show: !1
      },
      y: {
          title: {
              // formatter: function (e) {
              //     return ""
              // }
          }
      },
      marker: {
          show: !1
      }
  },
  
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  }
  // Bounce Rate chart 4
  this.bouncerate = {
    series: [{
      name: "",
      data: [35, 65, 47, 35, 44, 32, 27, 54, 44, 61]
  }],
  chart: {
      //width:150,
      height: 60,
      type: 'bar',
      sparkline: {
          enabled: !0
      },
      zoom: {
          enabled: false
      }
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      width: 1.5,
      curve: "smooth"
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#fe6225"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    colors: ["#ffc107"],
    plotOptions: {
      bar: {
          horizontal: false,
          borderRadius: 3,
          columnWidth: '48%',
      }
    },
  tooltip: {
      theme: "dark",
      fixed: {
          enabled: !1
      },
      x: {
          show: !1
      },
      y: {
          title: {
              // formatter: function (e) {
              //     return ""
              // }
          }
      },
      marker: {
          show: !1
      }
  },
  
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
    // Order Status chart 5
    this.Views = {
        series: [{
            name: "Sales",
            data: [20, 5, 60, 10, 30, 20, 25, 15, 31]
        },
        {
            name: "Views",
            data: [17, 10, 45, 15, 25, 15, 40, 10, 24]
        }],
        chart: {
            //width:150,
            foreColor: "#9ba7b2",
            height: 235,
            type: 'bar',
            toolbar: {
                show: !1,
            },
            sparkline: {
                enabled: !1
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 4,
            curve: 'smooth',
            colors: ['transparent']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#ffd200', '#00c6fb'],
                shadeIntensity: 1,
                type: 'vertical',
                //opacityFrom: 0.8,
                //opacityTo: 0.1,
                stops: [0, 100, 100, 100]
            },
        },
        colors: ['#ff6a00', "#005bea"],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'last',
                columnWidth: '55%',
            }
        },
        grid: {
            show: false,
            borderColor: 'rgba(0, 0, 0, 0.15)',
            strokeDashArray: 4,
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !0
            },
            x: {
                show: !0
            },
            y: {
                title: {
                    formatter: function (e:any) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }

    // Order Status chart 6
    this.orderstatus = {
      series: [58, 25, 25],
      chart: {
          height: 310,
          type: 'donut',
      },
      legend: {
          position: 'bottom',
          show: !1
      },
      fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              gradientToColors: ['#ee0979', '#17ad37', '#ec6ead'],
              shadeIntensity: 1,
              type: 'vertical',
              opacityFrom: 1,
              opacityTo: 1,
              //stops: [0, 100, 100, 100]
          },
      },
      colors: ["#ff6a00", "#98ec2d", "#3494e6"],
      dataLabels: {
          enabled: !1
      },
      plotOptions: {
          pie: {
              donut: {
                  size: "85%"
              }
          }
      },
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  height: 270
              },
              legend: {
                  position: 'bottom',
                  show: !1
              }
          }
      }]
    }
    // Total Profit
    this.totalprofit = {
      series: [{
        name: "Weekly Sales",
        data: [8, 10, 25, 18, 38, 24, 20, 16, 7]
    }],
    chart: {
        //width:150,
        height: 160,
        type: 'bar',
        sparkline: {
            enabled: !0
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        curve: 'smooth',
        color: ['transparent']
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#7928ca'],
            shadeIntensity: 1,
            type: 'vertical',
            //opacityFrom: 0.8,
            //opacityTo: 0.1,
            //stops: [0, 100, 100, 100]
        },
    },
    colors: ["#ff0080"],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 4,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'last',
            columnWidth: '45%',
        }
    },

    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                // formatter: function (e) {
                //     return ""
                // }
            }
        },
        marker: {
            show: !1
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
    }
    // Budget chart 8
    this.budget={
      series: [78],
      chart: {
          height: 260,
          type: 'radialBar',
          toolbar: {
              show: false
          }
      },
      plotOptions: {
          radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                  margin: 0,
                  size: '80%',
                  background: 'transparent',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                      enabled: false,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24
                  }
              },
              track: {
                  background: 'rgba(255, 255, 255, 0.12)',
                  strokeWidth: '67%',
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
                      offsetY: -10,
                      show: false,
                      color: '#888',
                      fontSize: '17px'
                  },
                  value: {
                      offsetY: 10,
                      color: '#111',
                      fontSize: '24px',
                      show: true,
                  }
              }
          }
      },
      fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#005bea'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
          }
      },
      colors: ["#98ec2d"],
      stroke: {
          lineCap: 'round'
      },
      labels: ['Total Orders'],
  
  
    }

    // Monthly chart
    this.monthly={
        series: [70],
        chart: {
            type: 'radialBar',
            width: 120,
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
                size: '65%'
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
        colors: ["#2196f3"],  
    }

    // yearly chart
    this.yearly={
        series: [70],
        chart: {
            type: 'radialBar',
            width: 120,
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
                size: '65%'
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
        colors: ["#ffd200"],  
    }
 
  }
}