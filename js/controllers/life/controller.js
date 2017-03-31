/**
 * Created by Administrator on 2017年3月22日 0022.
 */
'use strict';

var conttroller = angular.module('myApp.life', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        // console.log(111);
        $routeProvider.when('/life', {
            templateUrl: 'js/controllers/life/lifeTmpl.html',
            controller: 'LifeController'
        });
    }])

    .controller('LifeController',
        ['$scope', function($scope) {
            // console.log(222);
        }]);