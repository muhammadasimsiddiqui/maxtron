
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplebarAngularModule } from 'simplebar-angular';

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

import { campaignModel, indexModel, recentModel } from './model';
import { campaigndata, indexdata ,Recentdata} from './data';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    NgbDropdownModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
    // index model
    indexdata!: indexModel[];
    // Recent model....
    Recentdata!: recentModel[];
    // campaign model....
    campaigndata!: campaignModel[];


    @ViewChild("chart") chart!: ChartComponent;
    public activeusers  : Partial<ChartOptions>;
    public totalusers  : Partial<ChartOptions>;
    public totalclicks  : Partial<ChartOptions>;
    public monthly  : Partial<ChartOptions>;
    public totalviews  : Partial<ChartOptions>;
    public devicetype  : Partial<ChartOptions>;
    public totalaccounts  : Partial<ChartOptions>;
    public visitorsgrowth  : Partial<ChartOptions>;
    public Facebook  : Partial<ChartOptions>;
    public LinkedIn  : Partial<ChartOptions>;
    public Instagram  : Partial<ChartOptions>;
    public Snapchat  : Partial<ChartOptions>;
    public Google  : Partial<ChartOptions>;
    public Altaba  : Partial<ChartOptions>;
    public Spotify  : Partial<ChartOptions>;

  
  constructor() {
    this.indexdata = indexdata;
    this.Recentdata = Recentdata ;
    this.campaigndata = campaigndata ;

    // activeusers chart
        this.activeusers = {
            series: [78],
            chart: {
                height: 200,
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

        // totalusers  chart
        this.totalusers ={
        series: [{
            name: "",
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
        };
        // totalclicks chart
        this.totalclicks={
        series: [{
            name: "",
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
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
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
        // totalviews chart
        this.totalviews={
        series: [{
            name: "",
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
        // Monthly chart
        this.monthly={
        series: [{
            name: "Desktops",
            data: [14, 41, 35, 51, 25, 18, 21, 35, 15]
        }],
        chart: {
            foreColor: "#9ba7b2",
            height: 280,
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
        // device type chart
        this.devicetype={ 
        series: [58, 25, 25],
            chart: {
                height: 290,
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
        // Total Accounts chart
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
                opacityFrom: 0.8,
                opacityTo: 0.2,
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
        // Visitors Growth chat
        this.visitorsgrowth={
            series: [{
            name: "Total Sales",
            data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
        }],
        chart: {
            //width:150,
            height: 210,
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
            curve: 'straight'
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
        markers: {
            show: !1,
            size: 5,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        }

         // Facebook.............................
    this.Facebook={
        series: [70],
        chart: {
            type: 'radialBar',
            width: 50,
            height: 50,
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
                size: '60%'
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
            height: 50,
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
                size: '60%'
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
            height: 50,
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
                size: '60%'
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
            height: 50,
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
                size: '60%'
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
            height: 50,
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
                size: '60%'
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
            height: 50,
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
                size: '60%'
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
            height: 50,
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
                size: '60%'
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

