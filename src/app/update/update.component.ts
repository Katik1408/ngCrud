import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeModel } from 'src/app/models/employe.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  employeeId: any;
  employee;
  empForm: FormGroup;
  singleEMployee: any;
  employeeModel = new EmployeeModel();
  constructor(private router: Router, private crudService: CrudService) {
    let paramValues;
    if (this.router.getCurrentNavigation() != null) {
      paramValues = this.router.getCurrentNavigation().extras.state;
    }
    this.employeeId = paramValues.empid;
    console.log(this.employeeId);
    this.crudService.getEmployeeById(this.employeeId).subscribe(
      (d) => {
        console.log(d);
        this.employee = d;
        console.log(this.employee[0].employeeName);
        this.employeeModel.empId = this.employee[0].empid;
        this.employeeModel.employeeName = this.employee[0].employeeName;
        this.employeeModel.age = this.employee[0].age;
        this.employeeModel.dateofjoining = this.employee[0].dateOfJoining;
        this.employeeModel.place = this.employee[0].place;
      },
      (e) => console.log(e)
    );

    // for (const emp of this.employee) {
    //   console.log(emp.employeeName);
    // }

    // for (let index = 0; index < this.employee.length; index++) {
    //   this.singleEMployee = this.employee[index];
    // }
    // console.log(this.singleEMployee);
    // // console.log(this.employee.employeeName);
  }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      employeeName: new FormControl(),
      age: new FormControl(),
      dateOfJoining: new FormControl(),
      place: new FormControl(),
    });
  }

  updateEmployee(f) {
    console.log(f);
    this.crudService.updateEmployee(this.employeeModel.empId, f).subscribe(
      (d) => console.log(d),
      (e) => console.log(e)
    );
  }
}
