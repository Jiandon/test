/**
 * Created by Administrator on 2017年3月22日 0022.
 */
'use strict';

var conttroller = angular.module('myApp.message', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        // console.log(111);
        $routeProvider.when('/message', {
            templateUrl: 'js/controllers/message/message.html',
            controller: 'MessageController'
        });
    }])

    .controller('MessageController',
        ['$scope', function($scope) {
            console.log(222);
        }]);
