"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_service_1 = require("./Employee.service");
var EmployeeComponent = /** @class */ (function () {
    //Insjecting service in our constructor  
    function EmployeeComponent(_EmployeeService) {
        this._EmployeeService = _EmployeeService;
        this.delete = function (id, fname, lname) {
            var _this = this;
            if (confirm("Are you sure you want to delete " + id + " " + fname + " " + lname + " ?")) {
                for (var item in this.EmployeeDetails) {
                    if (this.EmployeeDetails[item].EmployeeID == id) {
                        this._EmployeeService.deleteEmployee(id).subscribe(function (x) {
                            _this.EmployeeDetails.splice(x, 1);
                            _this.LoadEmployeeData();
                        });
                    }
                }
            }
        };
        this.submit = function (employeeForm) {
            var _this = this;
            this.formValue = employeeForm.value;
            if (this.formValue.FirstName != null && this.formValue.LastName != null && this.formValue.Email != null && this.formValue.DepartRefID != null) {
                if (this.formValue.EmployeeID > 0) {
                    this.resource = JSON.stringify(this.formValue);
                    console.log(this.resource);
                    this._EmployeeService.update(this.resource, this.formValue.EmployeeID).subscribe(function (x) {
                        _this.LoadEmployeeData();
                        employeeForm.reset();
                        console.log(x);
                    });
                }
                else {
                    console.log(this.formValue);
                    var deleteKey = "EmployeeID";
                    delete this.formValue[deleteKey];
                    console.log(this.formValue);
                    this.resource = JSON.stringify(this.formValue);
                    console.log(this.resource);
                    this._EmployeeService.create(this.resource).subscribe(function (x) {
                        _this.LoadEmployeeData();
                        console.log(x);
                    });
                    employeeForm.reset();
                }
            }
            else {
                alert("All fields must be filled");
            }
        };
        this.edit = function (userForm, id) {
            for (var item in this.EmployeeDetails) {
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
        };
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        //calling a method  
        this.LoadEmployeeData();
        this.LoadDpartsInDropDown();
    };
    //Created a method to call getEmployeeDetails method in our Employee Service.  
    EmployeeComponent.prototype.LoadEmployeeData = function () {
        var _this = this;
        this._EmployeeService.getEmployeeDetails().subscribe(function (employeeData) { return _this.EmployeeDetails = employeeData; });
    };
    EmployeeComponent.prototype.LoadDpartsInDropDown = function () {
        var _this = this;
        this._EmployeeService.getDepartName().subscribe(function (departs) {
            return _this.departs = departs;
        });
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employeeView',
            templateUrl: 'app/Employees/Employee.Component.html',
            providers: [Employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [Employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=Employee.Component.js.map