import {Component, inject} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { Employee } from '../model/employee';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe,EmployeesComponent]
})
export class EmployeesComponent {
  private store: EmployeeService = inject(EmployeeService);
  employees: Employee[] = [];
  currentEmployee: Employee | null = null;

  ngOnInit(): void {
    this.store.getEmployee().subscribe(data => {
      this.employees = data.map(e => {
      return {
      id: e.id,
      ...e
      } as Employee;
      });
      });
      console.log(this.employees);
    }
}
