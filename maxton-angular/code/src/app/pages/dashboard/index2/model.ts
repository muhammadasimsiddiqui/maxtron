export interface index2Model{
    id: any;
    img: string;
    numbre: string;
    tital: string;
    pars: string;
    des: string;
    textcolor: string;
}
export interface PopularModel{
    id: any;
    tital: string;
    sale: string;
    numbre: string;
    pars: string;
    textcolor: string;
}
export interface VendorsModel{
    id: any;
    tital: string;
    sale: string;
    star:number;
}
export interface TransactionsModel{
    id: any;
    date: string;
    date2: string;
    sourceimg:string;
    source:string;
    sourcedes:string;
    status:string;
    textcolor1:string;
    bgcolor:string;
    amount:string;
}
