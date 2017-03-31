/**
 * Created by Administrator on 2017年3月22日 0022.
 */
'use strict';

var conttroller = angular.module('myApp.news', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        // console.log(111);
        $routeProvider.when('/news', {
            templateUrl: 'js/controllers/news/newsTmpl.html',
            controller: 'NewsController'
        });
    }])

    .controller('NewsController',
        [
            '$scope',
            '$interval',
            function($scope) {

            // console.log(222);
                var slides = $scope.slides = [];
                slides.push({ image :"images/cp5.jpg"});
                slides.push({ image :"images/2.jpg"});
                slides.push({ image :"images/cp5.jpg"});
                slides.push({ image :"images/cp6.jpg"});
                slides.push({ image :"images/cp5.jpg"});
                slides.push({ image :"images/2.jpg"});

                $scope.data = [];

                $scope.data =[{
                    "newsID":1000,
                    "newsType": "news",
                    "newsTime": 122,
                    "newsLooks":0,
                    "newsAuthor":"台山发布",
                    "newsGood":999,
                    "newsBad":999,
                    "newsTitle":"台山最前线发布了",
                    "newsCom":{

                    }
                },
                    {
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 122,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },
                    {
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    },{
                        "newsID":1000,
                        "newsType": "news",
                        "newsTime": 1222,
                        "newsLooks":0,
                        "newsAuthor":"台山发布",
                        "newsGood":999,
                        "newsBad":999,
                        "newsTitle":"台山最前线发布了",
                        "newsCom":{

                        }
                    }];

                console.log($scope.data[0].newsID);
              
        }])
    .directive("lunbo",[
        '$interval',
        '$location',
        '$window',
        '$document',
        function ($interval,$location,$window,$document) {
        return{
            restrict:"EA",
            link:function (scope,element,attr) {
                // console.log($location.path());
                clearInterval(time);
                // console.log($document.cre);
                var slider = element.find("ul"),
                    length = slider.children().length,
                    current =1,
                    current1 = 999,
                    time = "",
                    width= $window.innerWidth,
                    posS = -width,
                    pos = posS+"px",
                    loopSpeed = 1000,
                    fadeSpeed = 1000,
                    loop = function () {
                        if (current1 == 999){
                            // console.log(current1);
                            slider.css("transition","left 0.5s");
                            slider.css("left",pos);
                            current1 =1;
                            // console.log(current1);
                            // slider.remove(slider.children().eq(1));
                            length = slider.children().length;
                        }else {
                            slider.css("left",pos);
                        }

                        if ( current == 0 ){
                            slider.css("transition","left 0s");

                        }else {
                            slider.css("transition","left 0.5s");
                            // slider.css("left",pos);
                        }

                        // console.log(slider);
                        // console.log(current);
                        // console.log($location);
                        // console.log(width);
                        // console.log(slider.eq(current).css('display','none'));
                        if (current == (length-1)){
                            current= -1;
                        }
                        if($location.path() !="/news"){
                            slider.css("left","0px");
                            current1=999;
                            clearInterval(time);
                        }
                        current+=1;
                        posS = -width*current;
                        pos = posS+"px";
                    };
                slider.css("left","0px");
                time=setInterval(loop,3000);

                // var ol = element("<ol></ol>");
                // ol.className = "ShowController";
                // element.find("ul").appendChild("<ol></ol>");
                // for (var i=0;i<slider.children().length;i++){
                //     // var li = $document.createElement("li");
                //     // li.innerHTML = i+1;
                //     // ol.appendChild(li);
                // }
                //

            }
        }}]);
