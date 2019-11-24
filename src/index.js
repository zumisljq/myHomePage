import './css/base.scss'
var switchFlag = true;//開關判斷
var homePageNavbarSwitch = document.getElementById("homePageNavbarSwitch");
homePageNavbarSwitch.addEventListener("click", function () {//addEventListener監聽事件（"click"，事件）
    if (switchFlag) {
        let classVal = document.getElementById("navbar").getAttribute("class");
        classVal = classVal.concat(" z-navbar-active");//空格會一起加進去 不加空格屬性會連起來
        document.getElementById("navbar").setAttribute("class", classVal);
        let classVal2 = document.getElementById("homePageNavbarSwitch").getAttribute("class");
        classVal2 = classVal2.concat(" z-navbar-active");
        document.getElementById("homePageNavbarSwitch").setAttribute("class", classVal2);
        switchFlag = !switchFlag
    } else {
        let classVal = document.getElementById("navbar").getAttribute("class");
        classVal = classVal.replace(" z-navbar-active","");//同理 不刪掉空格就會多一格
        document.getElementById("navbar").setAttribute("class", classVal);
        let classVal2 = document.getElementById("homePageNavbarSwitch").getAttribute("class");
        classVal2 = classVal2.replace(" z-navbar-active","");
        document.getElementById("homePageNavbarSwitch").setAttribute("class", classVal2);
        switchFlag = !switchFlag
    }
})

