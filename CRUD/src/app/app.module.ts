import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './Employees/Employee.Component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'



@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent],
    bootstrap: [AppComponent, EmployeeComponent]
})
export class AppModule { }
