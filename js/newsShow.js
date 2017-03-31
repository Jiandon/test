// /**
//  * Created by Administrator on 2017年3月21日 0021.
//  */
// window.onload = function () {
//
//     var newsShow = document.getElementById("newsShow");
//     var showImg = document.getElementById("ShowImg");
//     var showList = showImg.children;
//     var screenWidth = newsShow.offsetWidth
//
//
//     showImg.appendChild(showImg.children[0].cloneNode(true));
//
//     // 2. 创建 ol  和  小 li
//     console.log(showList.length);
//     var ul = document.createElement("ol");  // 生成的是ol
//     ul.className = "ShowController"
//     newsShow.appendChild(ul); // 把ol 追加到  box 里面
//     for(var i=0;i<showList.length-1;i++)
//     {
//         var li = document.createElement("li");
//         li.innerHTML = i + 1;  //  给里面小的li 文字  1 2 3 4 5
//         ul.appendChild(li);  // 添加到 ol 里面
//     }
//     ul.children[0].className = "current";
//
//
//     //3. 开始动画部分
//     var olLis = ul.children;
//     for(var i=0; i<olLis.length;i++)
//     {
//         olLis[i].index = i;  // 获得当前第几个小li 的索引号
//         olLis[i].onmouseover = function() {
//             for(var j=0;j<olLis.length;j++)
//             {
//                 olLis[j].className = "";  // 所有的都要清空
//             }
//             this.className = "current";
//             animate(showImg,-this.index*screenWidth)
//             // 调用动画函数  第一个参数  谁动画     第二个  走多少
//             square = key = this.index;  // 当前的索引号为主
//         }
//     }
//     //  4. 添加定时器
//     var timer = null;   // 轮播图的定时器
//     var key = 0;  //控制播放张数
//     var square = 0; // 控制小方块
//     timer = setInterval(autoplay,3000);  // 开始轮播图定时器
//     function autoplay() {
//         key++;  // 先 ++
//         if(key>showList.length - 1)  // 后判断
//         {
//             showImg.style.left = 0;  // 迅速调回
//             key = 1;  // 因为第6张就是第一张  第6张播放 下次播放第2张
//         }
//         animate(showImg,-key*screenWidth);  // 再执行
//         // 小方块
//         square++;
//         if(square > olLis.length -1)
//         {
//             square = 0;
//         }
//         for(var i=0;i<olLis.length;i++)   // 先清除所有的
//         {
//             olLis[i].className = "";
//         }
//         olLis[square].className = "current";  // 留下当前的
//     }
//     // last最后  鼠标经过大盒子要停止定时器
//     newsShow.onmouseover = function() {
//         clearInterval(timer);
//     }
//     newsShow.onmouseout = function() {
//         timer = setInterval(autoplay,1000);  // 开始轮播图定时器
//     }
//
//
//     // var startX = 0;
//     // var endX = 0;
//     // newsShow.addEventListener("touchstart",function (event) {
//     //     startX = event.touches[0].pageX;
//     //
//     // });
//     // newsShow.addEventListener("touchend",function (event) {
//     //     endX = event.changedTouches[0].pageX;
//     //     clearInterval(timer);
//     //     clearInterval(showImg.timer);
//     //     if( endX- startX > 10){
//     //         animate(showImg,screenWidth);
//     //         timer = setInterval(autoplay,1000);
//     //     }else if ( endX-startX<10){
//     //         animate(showImg,-screenWidth);
//     //         timer = setInterval(autoplay,1000);
//     //     }
//     //
//     // });
//
//     //
//     function animate(obj,target){
//         clearInterval(obj.timer);  // 先清除定时器
//         var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
//         obj.timer = setInterval(function() {
//             var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
//             obj.style.left = obj.offsetLeft + speed + "px";
//             if(Math.abs(result)<=15)  // 如果差值不小于 5 说明到位置了
//             {
//                 clearInterval(obj.timer);
//                 obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
//             }
//         },10)
//     };
//
//
//     var goTop = document.getElementById("toTop");
//     var bbsNav = document.getElementById("bbsNav");
//     var leader = 0, target = 0, timer = null;
//     window.onscroll = function () {
//         // clearInterval(timer);
//         if (window.pageYOffset > 48) {
//             goTop.style.display = "block";
//             leader = window.pageYOffset;
//             console.log(leader);
//         } else {
//             goTop.style.display = "none";
//         }
//         if( document.scrollTop >48){
//             bbsNav.style.top = 0+"px";
//         }
//     };
//
//     // leader 起始位置  target  目标位置
//     goTop.onclick = function () {
//         target = 0;  //  点击完毕之后 奔向0 去的  不写也可以
//         timer = setInterval(function () {
//             leader = leader + (target - leader ) / 8;
//             window.scrollTo(0, leader);  // 去往页面中的某个位置
//             if (Math.abs(leader-target)<5) {
//                 window.scrollTo(0,0);
//                 clearInterval(timer);
//             }
//         }, 10);
//
//
//     }
//
//     var bbsNav = document.getElementById("bbsNav");
//     var news = document.getElementById("news");
//     news.onclick = function () {
//         clearInterval(timer);
//         timer = setInterval(autoplay,1000);
//     }
//
// }
