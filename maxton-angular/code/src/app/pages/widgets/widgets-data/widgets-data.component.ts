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


import { Component, ViewChild} from '@angular/core';


// import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-widgets-data',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgbDropdownModule
  ],
  templateUrl: './widgets-data.component.html',
  styleUrl: './widgets-data.component.scss'
})
export class WidgetsDataComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public totalsales  : Partial<ChartOptions>;
  public totalaccounts  : Partial<ChartOptions>;
  public weeklysales  : Partial<ChartOptions>;
  public totalusers  : Partial<ChartOptions>;
  public activeusers  : Partial<ChartOptions>;
  public totalusersfrom  : Partial<ChartOptions>;
  public activeusersincreased  : Partial<ChartOptions>;
  public fromlastmonth  : Partial<ChartOptions>;
  public usersincreased  : Partial<ChartOptions>;
  public salesviews  : Partial<ChartOptions>;
  public orderstatus  : Partial<ChartOptions>;
  public monthlyrevenue  : Partial<ChartOptions>;
  public trendingproducts  : Partial<ChartOptions>;
  public yearlyincome  : Partial<ChartOptions>;
  public monthly  : Partial<ChartOptions>;
  public yearly  : Partial<ChartOptions>;


  constructor() {
    // Total Sales this.chart1
    this.totalsales={
      series: [{
        name: "Total Sales",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        //width:150,
        height: 105,
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
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#0866ff'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.5,
            opacityTo: 0.0,
            //stops: [0, 100, 100, 100]
        },
    },

    colors: ["#02c27a"],
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
    // Total Accounts chart 2
    this.totalaccounts={
      series: [{
        name: "Total Accounts",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        //width:150,
        height: 105,
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
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#fc185a'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.5,
            opacityTo: 0.0,
            //stops: [0, 100, 100, 100]
        },
    },

    colors: ["#ffc107"],
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
    // Weekly Sales chart3
    this.weeklysales={
      series: [{
        name: "Net Sales",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        //width:150,
        height: 105,
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
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#0dcaf0'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.5,
            opacityTo: 0.0,
            //stops: [0, 100, 100, 100]
        },
    },

    colors: ["#0dcaf0"],
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
    // Total Users chart 4
    this.totalusers={
      series: [{
        name: "Weekly Sales",
        data: [8, 10, 25, 18, 38, 24, 20, 16, 7]
    }],
    chart: {
        //width:150,
        height: 120,
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
            gradientToColors: ['#17ad37'],
            shadeIntensity: 1,
            type: 'vertical',
            //opacityFrom: 0.8,
            //opacityTo: 0.1,
            //stops: [0, 100, 100, 100]
        },
    },
    colors: ["#98ec2d"],
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
    // Active Users chrt 5
    this.activeusers={
      series: [78],
      chart: {
          height: 180,
          type: 'radialBar',
          toolbar: {
              show: false
          }
      },
      plotOptions: {
          radialBar: {
              startAngle: -115,
              endAngle: 115,
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
                  background: 'rgba(0, 0, 0, 0.1)',
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
              gradientToColors: ['#ffd200'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
          }
      },
      colors: ["#ee0979"],
      stroke: {
          lineCap: 'round'
      },
      labels: ['Total Orders'],
  
    };
    // Total Users from  chart6
    this.totalusersfrom ={
      series: [{
        name: "Net Sales",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        //width:150,
        height: 105,
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
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#0866ff'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.5,
            opacityTo: 0.0,
            //stops: [0, 100, 100, 100]
        },
    },

    colors: ["#02c27a"],
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
    // Active Users increased chart7
    this.activeusersincreased={
      series: [{
        name: "Net Sales",
        data: [4, 10, 12, 17, 25, 30, 40, 55, 68]
    }],
    chart: {
        //width:150,
        height: 120,
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
    // from last month chart8
    this.fromlastmonth={
      series: [78],
      chart: {
          height: 165,
          type: 'radialBar',
          toolbar: {
              show: false
          }
      },
      plotOptions: {
          radialBar: {
              //startAngle: -115,
              //endAngle: 115,
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
                  background: 'rgba(0, 0, 0, 0.12)',
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
    // users increased  chart9
    this.usersincreased={
      series: [{
        name: "Net Sales",
        data: [4, 25, 14, 34, 10, 39]
    }],
    chart: {
        //width:150,
        height: 105,
        type: 'line',
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
        width: 3,
        curve: 'straight'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#00f2fe'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        },
    },

    colors: ["#ee0979"],
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
    markers: {
        show: !1,
        size: 5,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
    }
    // Sales & Views chart10
    this.salesviews={
      series: [{
        name: "",
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
    // Order Status chart 11
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

    // Monthly Revenue chart12
    this.monthlyrevenue={
        series: [{
        name: "Desktops",
        data: [14, 41, 35, 51, 25, 18, 21, 35, 15]
        }],
        chart: {
            foreColor: "#9ba7b2",
            height: 240,
            type: 'bar',
            toolbar: {
                show: !1
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
            width: 1,
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'last',
                columnWidth: '45%',
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#009efd'],
                shadeIntensity: 1,
                type: 'vertical',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        colors: ["#2af598"],
        grid: {
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        tooltip: {
            theme: "dark",
            marker: {
                show: !1
            }
        },
    }

    // Trending Products chatr 13
    this.trendingproducts={
        series: [44, 55, 41],
        chart: {
            height: 237,
            type: 'donut',
        },
        legend: {
            position: 'bottom',
            show: !1
        },
        colors: ["#ee0979", "#005bea", "#02c27a"],
        dataLabels: {
            enabled: !1
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "80%"
                }
            }
        },
        tooltip: {
            theme: "dark",
            marker: {
                show: !1
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 200
                },
                legend: {
                    position: 'bottom',
                    show: !0
                }
            }
        }]
    }

    // Yearly Income chart14
    this.yearlyincome={
        series: [{
            name: "Desktops",
            data: [100, , 34, 51, 25, 40, 21, 35, 15]
        }],
        chart: {
            foreColor: "#9ba7b2",
            height: 250,
            type: 'area',
            toolbar: {
                show: !1
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
            width: 3,
            curve: 'straight'
        },
        plotOptions: {
            bar: {
                columnWidth: "45%",
                endingShape: "rounded"
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#17ad37'],
                shadeIntensity: 1,
                type: 'vertical',
                opacityFrom: 0.8,
                opacityTo: 0.1,
                stops: [0, 100, 100, 100]
            },
        },
        colors: ["#98ec2d"],
        grid: {
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.15)',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        markers: {
            show: !1,
            size: 5,
        },
        tooltip: {
            theme: "dark",
            
        },
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
        colors: ["#98ec2d"],  
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
        colors: ["#ff6a00"],  
    }

  }
}
