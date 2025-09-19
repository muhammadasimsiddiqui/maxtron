import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';



interface Employees {
  id?: number;
	name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}
interface Employees1 {
  id?: number;
	name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}

const employees: Employees[] = [
    { id: 1, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: '$320,800' },
    { id: 2, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: '$170,750' },
    { id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/12', salary: '$86,000' },
    { id: 4, name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: '$433,060' },
    { id: 5, name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { id: 6, name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, startDate: '2012/12/02', salary: '$372,000' },
    { id: 7, name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
    { id: 8, name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, startDate: '2010/10/14', salary: '$327,900' },
    { id: 9, name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, startDate: '2009/09/15', salary: '$205,500' },
    { id: 10, name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, startDate: '2008/12/13', salary: '$103,600' },
    { id: 11, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, startDate: '2008/12/19', salary: '$90,560' },
    { id: 12, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, startDate: '2008/12/19', salary: '$90,560' },
    { id: 13, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, startDate: '2008/12/19', salary: '$90,560' }
  ];
  const employees1: Employees1[] = [
    { id: 1, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: '$320,800' },
    { id: 2, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: '$170,750' },
    { id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/12', salary: '$86,000' },
    { id: 4, name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: '$433,060' },
    { id: 5, name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { id: 6, name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, startDate: '2012/12/02', salary: '$372,000' },
    { id: 7, name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
    { id: 8, name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, startDate: '2010/10/14', salary: '$327,900' },
    { id: 9, name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, startDate: '2009/09/15', salary: '$205,500' },
    { id: 10, name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, startDate: '2008/12/13', salary: '$103,600' },
    { id: 11, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, startDate: '2008/12/19', salary: '$90,560' },
    { id: 12, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, startDate: '2008/12/19', salary: '$90,560' },
    { id: 13, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, startDate: '2008/12/19', salary: '$90,560' }
  ];
  

  @Component({
    selector: 'app-datatable',
    standalone: true,
    imports: [
      CommonModule,
      NgxPaginationModule,
      NgbPaginationModule,
      NgbTypeaheadModule,
      DecimalPipe, FormsModule
      
    ],
    templateUrl: './datatable.component.html',
    styleUrl: './datatable.component.scss',
  })

export class DatatableComponent {
  employees: Array<any> = []; // Initialize with an empty array
  i: number = 1;

  employees1: Array<any> = []; // Initialize with an empty array
  p: number = 1;

  page = 1;
  page1 = 1;
  pageSize = 10;
  pageSize1 = 10;
  collectionSize = employees.length;
  collectionSize1 = employees1.length;
  employee?: Employees[];
  employee1?: Employees1[];

  constructor() {
    this.refreshCountries();
    this.refreshCountries1();
    this.employees = [
      // Your data here...
    ];
    this.employees1 = [
      // Your data here...
    ];
  }



  refreshCountries() {
    this.employee = employees.map((employ, i) => ({
      id: i + 1,
      ...employ,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  refreshCountries1() {
    this.employee1 = employees1.map((employ1, p) => ({
      id: p + 1,
      ...employ1,
    })).slice(
      (this.page1 - 1) * this.pageSize1,
      (this.page1 - 1) * this.pageSize1 + this.pageSize1
    );
  }
}

  

