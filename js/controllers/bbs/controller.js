/**
 * Created by Administrator on 2017年3月22日 0022.
 */
'use strict';

var conttroller = angular.module('myApp.bbs', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        // console.log(111);
        $routeProvider.when('/bbs', {
            templateUrl: 'js/controllers/bbs/bbsTmpl.html',
            controller: 'NewsController'
        });
    }])

    .controller('NewsController',
        ['$scope', function($scope) {
            console.log(222);
        }])
    .directive("fixed",[
        "$window",
        function ($window) {
            return{
                restrict:"EA",
                link:function (scope,element,attrs) {
                    angular.element($window).bind("scroll",function () {
                        // console.log($window.pageYOffset)
                        // console.log(element.children().eq(0));
                        if ($window.pageYOffset >= 48){
                            scope.$apply();
                            element.children().eq(0).css("position","fixed");
                            element.children().eq(0).css("top","0");
                            element.children().eq(0).css("left","0");
                        }else {
                            element.children().eq(0).css("position","");
                        }
                    })
                }
            }
        }
    ])
