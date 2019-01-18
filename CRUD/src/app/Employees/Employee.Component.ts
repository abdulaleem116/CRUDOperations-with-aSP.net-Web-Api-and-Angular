import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee'
import { EmployeeService } from './Employee.service';
import { NgForm } from '@angular/forms';
import { IDepart } from './IDepartment';

@Component({
    selector: 'employeeView',
    templateUrl: 'app/Employees/Employee.Component.html',
    providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {
    EmployeeDetails: IEmployee[];
    formValue: any;
    resource: JSON;
    departs: IDepart[];
    //Insjecting service in our constructor  
    constructor(private _EmployeeService: EmployeeService) {

    }
    ngOnInit() {
        //calling a method  
        this.LoadEmployeeData();
        this.LoadDpartsInDropDown();
    }
    //Created a method to call getEmployeeDetails method in our Employee Service.  
    LoadEmployeeData() {
        this._EmployeeService.getEmployeeDetails().subscribe((employeeData) => this.EmployeeDetails = employeeData);
    }
    LoadDpartsInDropDown() {
        this._EmployeeService.getDepartName().subscribe((departs) =>
            this.departs = departs);
    }

    delete = function (id: number, fname: string, lname: string) {
        if (confirm("Are you sure you want to delete " + id + " " + fname + " " + lname + " ?")) {
            for (let item in this.EmployeeDetails) {
                if (this.EmployeeDetails[item].EmployeeID == id) {
                    this._EmployeeService.deleteEmployee(id).subscribe((x: any) => {
                        this.EmployeeDetails.splice(x, 1);
                        this.LoadEmployeeData();
                    });
                }
            }

        }
    }
    submit = function (employeeForm: NgForm) {
       this.formValue = employeeForm.value;
        if (this.formValue.FirstName != null && this.formValue.LastName != null && this.formValue.Email != null && this.formValue.DepartRefID != null) {
            if (this.formValue.EmployeeID > 0) {
                this.resource = JSON.stringify(this.formValue);
                console.log(this.resource);
                this._EmployeeService.update(this.resource, this.formValue.EmployeeID).subscribe((x: any) => {
                    this.LoadEmployeeData();
                    employeeForm.reset();
                    console.log(x)
                });

            }
            else {
                console.log(this.formValue);
                var deleteKey = "EmployeeID";
                delete this.formValue[deleteKey];
                console.log(this.formValue);
                this.resource = JSON.stringify(this.formValue);
                console.log(this.resource);
                this._EmployeeService.create(this.resource).subscribe((x: any) => {
                    this.LoadEmployeeData();
                    console.log(x)
                });
                employeeForm.reset();
            }
        }
        else {
            alert("All fields must be filled");
        }
       
   
    }



    edit = function (userForm: NgForm, id: number) {
        for (let item in this.EmployeeDetails) {
            if (this.EmployeeDetails[item].EmployeeID == id) {
                userForm.resetForm({
                    EmployeeID: this.EmployeeDetails[item].EmployeeID,
                    FirstName: this.EmployeeDetails[item].FirstName,
                    LastName: this.EmployeeDetails[item].LastName,
                    Email: this.EmployeeDetails[item].Email,
                    DepartRefID: this.EmployeeDetails[item].DepartID
                });
            }
        }
    }
} 