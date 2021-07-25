import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  constructor(private crudService: CrudService, private router: Router) {}
  employees: any;
  ngOnInit(): void {
    this.crudService.getEmployees().subscribe(
      (d) => {
        console.log(d);
        this.employees = d;
      },
      (e) => console.log(e)
    );
  }
  updateEmployeeComponent(empid) {
    console.log(empid);
    this.router.navigate(['update'], {
      state: { empid: empid },
    });
  }
}
