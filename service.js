
var EmployeeService = angular.module('EmployeeService',[]);

EmployeeService.factory('EmpApi',function($http){
    // var urlBase = "http://localhost:23841/api";
    // var EmpApi = {};
    // EmpApi.getEmployees = function(){
        // return $http.get(urlBase+ '/Employees');
    // };

    EmpApi.AddEmployee = function(emp){
        alert(emp);
        var req = $http({
            method : 'post',
            url : urlBase+ '/Employees',
            data : emp
        });
        return req;
        return $http.post(urlBase+ '/Employees/', emp);
    };

    EmpApi.EditEmployee = function(empToUpdate){
        var request = $http({
            method : 'put',
            url : urlBase+ '/Employees/'+ empToUpdate.Id,
            data : empToUpdate
        });
        return request;
    };


    // return EmpApi;
    
});