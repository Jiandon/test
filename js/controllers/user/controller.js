/**
 * Created by Administrator on 2017年3月22日 0022.
 */
'use strict';

var conttroller = angular.module('myApp.user', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        // console.log(111);
        $routeProvider.when('/user', {
            templateUrl: 'js/controllers/user/userTmpl.html',
            controller: 'UserController'
        });
    }])

    .controller('UserController',
        ['$scope', function($scope) {
            // console.log(222);
        }]);
