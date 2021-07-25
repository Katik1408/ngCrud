import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiURL;
const GET_EMPLOYEES = '/api/Employee/employees';
const GET_EMPLOYEE_BY_ID = '/api/Employee/emp';
const UPDATE_EMPLOYEE = '/api/Employee/updateEmployee'
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  public getEmployees() {
    return this.httpClient.get(`${API_URL}${GET_EMPLOYEES}`);
  }

  public getEmployeeById(id) {
    return this.httpClient.get(`${API_URL}${GET_EMPLOYEE_BY_ID}?id=${id}`);
  }

  public updateEmployee(id,data){
    return this.httpClient.put(`${API_URL}${UPDATE_EMPLOYEE}/${id}`,data);
  }

}
