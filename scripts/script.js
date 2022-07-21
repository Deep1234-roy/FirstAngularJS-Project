/// <reference path="../angular.min.js" />

var app = angular
            .module("myModule",[])
            .controller("myController",function($scope){
                var employees = [
                    {name:"Deep Roy",age:23,gender:1,city:"Kolkata",salary:56899.908},
                    {name:"Abhijeet Akkewar",age:30,gender:1,city:"Rachi",salary:50000.00},
                    {name:"Dishani Patil",age:27,gender:2,city:"Wardha",salary:67211.70},
                    {name:"Abhay Chandra",age:40,gender:1,city:"Gulbarga",salary:55670.899},
                    {name:"Mehuli Bose",age:42,gender:2,city:"Rachi",salary:38700.90},
                    {name:"Shital Jayswara",age:33,gender:2,city:"Howrah",salary:48700},
                    {name:"Ranvijay Singh",age:35,gender:1,city:"Airoli",salary:35677.00},
                    {name:"Vinay Behra",age:25,gender:1,city:"Bhopal",salary:48799.899},
                    {name:"Pallavi Gupta",age:40,gender:2,city:"Kashmir",salary:37899},
                    {name:"Demo",age:00,gender:3,city:"Unknown",salary:00000},
                ]
                $scope.employees=employees;
                $scope.RowLimit = 3;
                $scope.sortColumn="name";

                $scope.search = function(item){
                    if($scope.serachText == undefined){
                        return true;
                    }else{
                        if(item.name.toLowerCase().indexOf($scope.serachText.toLowerCase()) != -1 ||
                        item.city.toLowerCase().indexOf($scope.serachText.toLowerCase()) != -1){
                            return true;
                        }
                    }
                    return false;
                }

                $scope.showAlert = false;
                $scope.greet=function(){
                    alert("Thanks for Greeting me!!!");
                }
            })