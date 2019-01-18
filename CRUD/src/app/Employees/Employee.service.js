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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployeeDetails = function () {
        return this._http.get("http://localhost:61957/api/EmployeesApi/").map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this._http.delete('http://localhost:61957/api/EmployeesApi/' + id).map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.create = function (employees) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post("http://localhost:61957/api/EmployeesApi/", employees, options).map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.getDepartName = function () {
        return this._http.get('http://localhost:61957/api/Departments').map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.update = function (employee, EmployeeID) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .put('http://localhost:61957/api/EmployeesApi/' + EmployeeID, employee, { headers: headers })
            .map(function (res) { return res.json(); });
        /*
                return this._http
                    .put('http://localhost:61957/api/EmployeesApi/' + employee.EmployeeID, employee)
                    .map(response => response.json());*/
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=Employee.service.js.map