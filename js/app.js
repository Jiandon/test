/**
 * Created by Administrator on 2017年3月22日 0022.
 */

'use strict';

// Declare app level module which depends on views, and components

// 注册一个模块，模块名字是豆瓣，这是web应用的主模块
angular.module('myApp', [
    'ngRoute',
    'myApp.bbs',
    'myApp.life',
    'myApp.news',
    'myApp.user',
    'myApp.message',

])
    .config(['$routeProvider', function($routeProvider) {

            // $routeProvider.otherwise({redirectTo: '/news'});
    }])
    .directive("toTop",[
        '$interval',
        '$window',
        function ($intervl,$window) {
            return{
                restrict:"EA",
               link:function (scope,element,attrs) {
                    var toTop = element.find("div").eq(0);
                    var body = angular.element(document).find("body");
                    angular.element($window).bind("scroll",function () {

                        // scope.$apply();
                        // console.log(111);
                        // console.log($window.pageYOffset);
                        if ($window.pageYOffset>300){
                            toTop.css("display","block");
                        }else {
                            toTop.css("display","none");
                        }
                        // console.log(element.find("div"));

                    });

                   toTop.bind("click",function () {
                       // $window.css("top",0);
                       console.log(222);
                       // body.css("top",'0px');
                       $window.scrollTo(0,0);
                   })
               }
            }
        }
    ])
    .directive("toTop2",[
        '$window',
        function ($window) {
            return{
                restrict:"EA",
                link:function (scope,element,attrs) {
                    // console.log(element.find("footer").children().eq(0).children());
                    var module = element.find("footer").children().eq(0).children();
                    module.children().bind("click",function () {
                        $window.scrollTo(0,0);
                    })
                }
            }
        }
    ])

