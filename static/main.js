var n0101 = document.querySelector("#n0101");
var n0102 = document.querySelector("#n0102");
var n0103 = document.querySelector("#n0103");
var n0104 = document.querySelector("#n0104");
var n0105 = document.querySelector("#n0105");


var n0201 = document.querySelector("#n0201");
var n0202 = document.querySelector("#n0202");
var n0203 = document.querySelector("#n0203");
var n0204 = document.querySelector("#n0204");


var n0301 = document.querySelector("#n0301");
var n0302 = document.querySelector("#n0302");
var n0303 = document.querySelector("#n0303");
var n0304 = document.querySelector("#n0304");


var n0401 = document.querySelector("#n0401");
var n0402 = document.querySelector("#n0402");
var n0403 = document.querySelector("#n0403");
var n0404 = document.querySelector("#n0404");


var n0501 = document.querySelector("#n0501");
var n0502 = document.querySelector("#n0502");
var n0503 = document.querySelector("#n0503");



var n0601 = document.querySelector("#n0601");
var n0602 = document.querySelector("#n0602");
var n0603 = document.querySelector("#n0603");
//var n0604 = document.querySelector("#n0604");


var n0701 = document.querySelector("#n0701");
var n0702 = document.querySelector("#n0702");
var n0703 = document.querySelector("#n0703");


var n0801 = document.querySelector("#n0801");
var n0802 = document.querySelector("#n0802");
var n0803 = document.querySelector("#n0803");
var n0804 = document.querySelector("#n0804");
var n0805 = document.querySelector("#n0805");


var n0901 = document.querySelector("#n0901");
var n0902 = document.querySelector("#n0902");
var n0903 = document.querySelector("#n0903");


var n1001 = document.querySelector("#n1001");
var n1002 = document.querySelector("#n1002");
var n1003 = document.querySelector("#n1003");
var n1004 = document.querySelector("#n1004");
//var n1005 = document.querySelector("#n1005");


var n1101 = document.querySelector("#n1101");
var n1102 = document.querySelector("#n1102");
var n1103 = document.querySelector("#n1103");
var n1104 = document.querySelector("#n1104");


var pi = Math.PI;
var i = pi/2;

requestAnimationFrame(function animationFrame() {


    var n0101anim = 10 * Math.sin(i/3)
    var n0102anim = 10 * Math.sin(i/3 + pi/18)
    //var n0103anim = 1 * Math.sin(i/3)
    var n0104anim = 4 + 14 * Math.sin(i/3 + pi/15)
    var n0105anim = 10 * Math.sin(i/3)

    n0101.style.transform = "translateY(" + n0101anim + "px)"
    n0102.style.transform = "translateY(" + n0102anim + "px)"
    //n0103.style.transform = "translateY(" + n0103anim + "px)"
    n0104.style.transform = "translateY(" + n0104anim + "px)"
    n0105.style.transform = "translateY(" + n0105anim + "px)"

    //var n0201anim = 1 * Math.sin(i/2)
    var n0202anim = 5 * Math.sin(i/2 + pi/12)
    var n0203anim = -1 + 4 * Math.sin(i/2 + pi/2)
    var n0204anim = 5 * Math.sin(i/2 + pi/6)

    //n0201.style.transform = "translateY(" + n0201anim + "px) translateX(" + n0201animX + "px)"
    n0202.style.transform = "translateY(" + n0202anim + "px)"
    n0203.style.transform = "translateY(" + n0203anim + "px)"
    n0204.style.transform = "translateY(" + n0204anim + "px)"



    var n0301anim = 10 * Math.sin(i/3 + pi/15)
    //var n0302anim = 1 * Math.sin(i/3)
    var n0303anim = 10 * Math.sin(i/3)
    var n0303animX = Math.sin(i*1.4)
    var n0304anim = 10 * Math.sin(i/3)

    n0301.style.transform = "translateY(" + n0301anim + "px)"
    //n0302.style.transform = "translateY(" + n0302anim + "px)translateX(" + n0302animX + "px)"
    n0303.style.transform = "translateY(" + n0303anim + "px) translateX(" + n0303animX + "px)"
    n0304.style.transform = "translateY(" + n0304anim + "px)"


    //var n0401anim = 1 * Math.sin(i/3)
    var n0402anim = 5+ 5 * Math.sin(i/3)
    var n0402animX = -2 * Math.sin(i/3.5)
    var n0403anim = 5 * Math.sin(i/3 + pi/18)
    var n0403animX = -2 * Math.sin(i/3.5 + pi/12)
    var n0404anim = 5 * Math.sin(i/3  + pi/6)
    var n0404animX = -2 * Math.sin(i/3.5)
    var n0404animscale = 1 + 0.06 * Math.sin(i/12  + pi/3)

    //n0401.style.transform = "translateY(" + n0401anim + "px)translateX(" + n0401animX + "px)"
    n0402.style.transform = "translateY(" + n0402anim + "px)translateX(" + n0402animX + "px)"
    n0403.style.transform = "translateY(" + n0403anim + "px) translateX(" + n0403animX + "px)"
    n0404.style.transform = "translateY(" + n0404anim + "px) scale(" + n0404animscale + ") translateX(" + n0404animX + "px)"


    //var n0501anim = 10 * Math.sin(i/3)
    var n0502anim = 10 * Math.sin(i/3 + pi/6)
    var n0503anim = 10 * Math.sin(i/3 + pi/6)
    var n0503animX = Math.sin(i*1.4)

    //n0501.style.transform = "translateY(" + n0501anim + "px)"
    n0502.style.transform = "translateY(" + n0502anim + "px)"
    n0503.style.transform = "translateY(" + n0503anim + "px) translateX(" + n0303animX + "px)"


    var n0601anim = 7 * Math.sin(i/3 + pi/12)
    //var n0602anim = 1 * Math.sin(i/3)
    //var n0602animX = -2 * Math.sin(i/24 + pi/12)
    var n0603anim = 6 * Math.sin(i/3 + pi/6)
    var n0604anim = 7 * Math.sin(i/3 + pi/18)

    n0601.style.transform = "translateY(" + n0601anim + "px)"
    //n0602.style.transform = "translateY(" + n0602anim + "px) translateX(" + n0602animX + "px)"
    n0603.style.transform = "translateY(" + n0603anim + "px)"
    n0604.style.transform = "translateY(" + n0604anim + "px)"


    //var n0701anim = 1 * Math.sin(i/3)
    var n0702anim = 5 * Math.sin(i/3)
    var n0702animscale = 1 + 0.01 * Math.sin(i/6  + pi/6)
    var n0703anim = 10 * Math.sin(i/3 + pi/6)
    var n0703animscale = 1 + 0.01 * Math.sin(i/6  + pi/6)

    //n0701.style.transform = "translateY(" + n0701anim + "px) translateX(" + n0701animX + "px)"
    n0702.style.transform = "translateY(" + n0702anim + "px)scale(" + n0702animscale + ")"
    n0703.style.transform = "translateY(" + n0703anim + "px)scale(" + n0703animscale + ")"


    //var n0801anim = 1 * Math.sin(i/3)
    var n0802anim = 5 + 10 * Math.sin(i/3)
    var n0803anim = 5 + 10 * Math.sin(i/3 + pi/12)
    var n0804anim = 5 + 10 * Math.sin(i/3)
    var n0805anim = 10 + 10 * Math.sin(i/3 + pi/24)

    //n0801.style.transform = "translateY(" + n0801anim + "px) translateX(" + n0801animX + "px)"
    n0802.style.transform = "translateY(" + n0802anim + "px)"
    n0803.style.transform = "translateY(" + n0803anim + "px)"
    n0804.style.transform = "translateY(" + n0804anim + "px)"
    n0805.style.transform = "translateY(" + n0805anim + "px)"


    var n0901anim = 7 * Math.sin(i/3 + pi/12)
    var n0901animX = -4 * Math.sin(i/24 )
    //var n0902anim = 1 * Math.sin(i/3)
    var n0903anim = 7 * Math.sin(i/3 + pi/18)
    var n0903animX = -4 * Math.sin(i/24 + pi/12)

    n0901.style.transform = "translateY(" + n0901anim + "px)translateX(" + n0901animX + "px)"
    //n0902.style.transform = "translateY(" + n0902anim + "px)translateX(" + n0902animX + "px)"
    n0903.style.transform = "translateY(" + n0903anim + "px)translateX(" + n0903animX + "px)"


    //var n1001anim =  1 * Math.sin(i/3)
    var n1002anim = 7 * Math.sin(i/3 + pi/12)
    var n1003anim = 9 * Math.sin(i/3 + pi/15)
    var n1004anim = 7 * Math.sin(i/3 + pi/12)
    //var n1005anim = 10 * Math.sin(i/3)

    //n1001.style.transform = "translateY(" + n1001anim + "px) translateX(" + n1001animX + "px)"
    n1002.style.transform = "translateY(" + n1002anim + "px)"
    n1003.style.transform = "translateY(" + n1003anim + "px)"
    n1004.style.transform = "translateY(" + n1004anim + "px)"
    //n1005.style.transform = "translateY(" + n1005anim + "px)"


    //var n1101anim = 10 * Math.sin(i/3)
    var n1102anim = 5 * Math.sin(i/3)
    var n1102animX = 2 * Math.sin(i/24)
    var n1102animscale = 1 + 0.02 * Math.sin(i/24  + pi/3)
    var n1103anim = 8 * Math.sin(i/3 + pi/18)
    var n1103animscale = 1 + 0.02 * Math.sin(i/6  + pi/3)
    var n1104anim = 8 * Math.sin(i/3 + pi/12)
    var n1104animscale = 1 + 0.02 * Math.sin(i/6  + pi/3)

    //n1101.style.transform = "translateY(" + n1101anim + "px)"
    n1102.style.transform = "translateY(" + n1102anim + "px)translateX(" + n1102animX + "px)scale(" + n1103animscale + ")"
    n1103.style.transform = "translateY(" + n1103anim + "px)scale(" + n1103animscale + ")"
    n1104.style.transform = "translateY(" + n1104anim + "px)scale(" + n1104animscale + ")"



    i = i + pi/4.1

    requestAnimationFrame(animationFrame)
})
