import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { IEmployee } from './IEmployee';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IDepart } from './IDepartment';
@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {
    }
    getEmployeeDetails(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:61957/api/EmployeesApi/").map((response: Response) => <IEmployee[]>response.json());
    }

    deleteEmployee(id: number){
        return this._http.delete('http://localhost:61957/api/EmployeesApi/'+ id).map(res => res.json());
    }
    create(employees: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post("http://localhost:61957/api/EmployeesApi/", employees, options).map(res => res.json());
    }

    getDepartName(): Observable<IDepart[]> {
        return this._http.get('http://localhost:61957/api/Departments').map(res => res.json());
    }
    update(employee: any, EmployeeID:number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .put('http://localhost:61957/api/EmployeesApi/' + EmployeeID, employee, { headers: headers })
            .map(res => res.json());


/*
        return this._http
            .put('http://localhost:61957/api/EmployeesApi/' + employee.EmployeeID, employee)
            .map(response => response.json());*/
            
    }

} 