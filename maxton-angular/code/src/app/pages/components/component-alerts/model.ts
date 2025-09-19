export interface AlertModel {
    id:any;
    type: string;
    icon: string;
    title: string;
    message: string;
  }
  
export interface ColorModel {
    id: any;
    type: string;
    bgClass: string;
    textColor: string;
    message: string;
}
export interface BorderModel{
    id: any;
    type: string;
    borderClass: string;
    icon: string;
    iconColor: string;
    title: string;
    message: string;
}
export interface SimpleModel{
    id: number;
    type: string;
    borderClass: string;
    message: string;
}