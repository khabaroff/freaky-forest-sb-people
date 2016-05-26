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

var n1201 = document.querySelector("#n1201");
var n1202 = document.querySelector("#n1202");
var n1203 = document.querySelector("#n1203");
var n1204 = document.querySelector("#n1204");
var n1205 = document.querySelector("#n1205");

var n1301 = document.querySelector("#n1301");
var n1302 = document.querySelector("#n1302");
var n1303 = document.querySelector("#n1303");
var n1304 = document.querySelector("#n1304");
var n1305 = document.querySelector("#n1305");

var n1401 = document.querySelector("#n1401");
var n1402 = document.querySelector("#n1402");
var n1403 = document.querySelector("#n1403");
var n1404 = document.querySelector("#n1404");

var n1501 = document.querySelector("#n1501");
var n1502 = document.querySelector("#n1502");
var n1503 = document.querySelector("#n1503");
var n1504 = document.querySelector("#n1504");

var n1601 = document.querySelector("#n1601");
var n1602 = document.querySelector("#n1602");
var n1603 = document.querySelector("#n1603");
var n1604 = document.querySelector("#n1604");
var n1605 = document.querySelector("#n1605");


var n1701 = document.querySelector("#n1701");
var n1702 = document.querySelector("#n1702");
var n1703 = document.querySelector("#n1703");
var n1704 = document.querySelector("#n1704");
var n1705 = document.querySelector("#n1705");


var n1801 = document.querySelector("#n1801");
var n1802 = document.querySelector("#n1802");
var n1803 = document.querySelector("#n1803");
var n1804 = document.querySelector("#n1804");


var n1901 = document.querySelector("#n1901");
var n1902 = document.querySelector("#n1902");
var n1903 = document.querySelector("#n1903");
var n1904 = document.querySelector("#n1904");

var n2001 = document.querySelector("#n2001");
var n2002 = document.querySelector("#n2002");
var n2003 = document.querySelector("#n2003");
var n2004 = document.querySelector("#n2004");

var n2101 = document.querySelector("#n2101");
var n2102 = document.querySelector("#n2102");
var n2103 = document.querySelector("#n2103");
var n2104 = document.querySelector("#n2104");

var n2201 = document.querySelector("#n2201");
var n2202 = document.querySelector("#n2202");
var n2203 = document.querySelector("#n2203");
var n2204 = document.querySelector("#n2204");

var n2301 = document.querySelector("#n2301");
var n2302 = document.querySelector("#n2302");
var n2303 = document.querySelector("#n2303");
var n2304 = document.querySelector("#n2304");
var n2305 = document.querySelector("#n2305");



var pi = Math.PI;
var i = pi/2;

requestAnimationFrame(function animationFrame() {

//01Poni
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


//02Enot
    //var n0201anim = 1 * Math.sin(i/2)
    var n0202anim = 5 * Math.sin(i/2 + pi/12)
    var n0203anim = -12 + 3 * Math.sin(i/2 + pi/3)
    var n0204anim = 5 * Math.sin(i/2 + pi/6)

    //n0201.style.transform = "translateY(" + n0201anim + "px) translateX(" + n0201animX + "px)"
    n0202.style.transform = "translateY(" + n0202anim + "px)"
    n0203.style.transform = "translateY(" + n0203anim + "px)"
    n0204.style.transform = "translateY(" + n0204anim + "px)"


//03Zayac
    var n0301anim = 10 * Math.sin(i/3 + pi/15)
    //var n0302anim = 1 * Math.sin(i/3)
    var n0303anim = 10 * Math.sin(i/3)
    var n0303animX = Math.sin(i*1.4)
    var n0304anim = 10 * Math.sin(i/3)

    n0301.style.transform = "translateY(" + n0301anim + "px)"
    //n0302.style.transform = "translateY(" + n0302anim + "px)translateX(" + n0302animX + "px)"
    n0303.style.transform = "translateY(" + n0303anim + "px) translateX(" + n0303animX + "px)"
    n0304.style.transform = "translateY(" + n0304anim + "px)"



//04Kasatka
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




//05Mangust
    //var n0501anim = 10 * Math.sin(i/3)
    var n0502anim = 10 * Math.sin(i/3 + pi/6)
    var n0503anim = 10 * Math.sin(i/3 + pi/6)
    var n0503animX = Math.sin(i*1.4)

    //n0501.style.transform = "translateY(" + n0501anim + "px)"
    n0502.style.transform = "translateY(" + n0502anim + "px)"
    n0503.style.transform = "translateY(" + n0503anim + "px) translateX(" + n0303animX + "px)"



//06Lama
    var n0601anim = 7 * Math.sin(i/3 + pi/12)
    //var n0602anim = 1 * Math.sin(i/3)
    //var n0602animX = -2 * Math.sin(i/24 + pi/12)
    var n0603anim = 6 * Math.sin(i/3 + pi/6)
    var n0604anim = 7 * Math.sin(i/3 + pi/18)

    n0601.style.transform = "translateY(" + n0601anim + "px)"
    //n0602.style.transform = "translateY(" + n0602anim + "px) translateX(" + n0602animX + "px)"
    n0603.style.transform = "translateY(" + n0603anim + "px)"
    n0604.style.transform = "translateY(" + n0604anim + "px)"



//07Mikrich
    //var n0701anim = 1 * Math.sin(i/3)
    var n0702anim = 5 * Math.sin(i/3)
    var n0702animscale = 1 + 0.01 * Math.sin(i/6  + pi/6)
    var n0703anim = 10 * Math.sin(i/3 + pi/6)
    var n0703animscale = 1 + 0.01 * Math.sin(i/6  + pi/6)

    //n0701.style.transform = "translateY(" + n0701anim + "px) translateX(" + n0701animX + "px)"
    n0702.style.transform = "translateY(" + n0702anim + "px)scale(" + n0702animscale + ")"
    n0703.style.transform = "translateY(" + n0703anim + "px)scale(" + n0703animscale + ")"



//08Panda
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



//09Edinorog
    var n0901anim = 7 * Math.sin(i/3 + pi/12)
    var n0901animX = -4 * Math.sin(i/24 )
    //var n0902anim = 1 * Math.sin(i/3)
    var n0903anim = 7 * Math.sin(i/3 + pi/18)
    var n0903animX = -4 * Math.sin(i/24 + pi/12)

    n0901.style.transform = "translateY(" + n0901anim + "px)translateX(" + n0901animX + "px)"
    //n0902.style.transform = "translateY(" + n0902anim + "px)translateX(" + n0902animX + "px)"
    n0903.style.transform = "translateY(" + n0903anim + "px)translateX(" + n0903animX + "px)"



//10Strizh
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



//11Belka
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



//12Bachteen
    //var n1201anim = 7 * Math.sin(i/3 + pi/12)
    var n1202animX = 8 * Math.sin(i/3 + pi/12)
    var n1202anim = 4+3 * Math.sin(i/3.5 + pi/24)
    var n1203animX = 6 * Math.sin(i/3 + pi/6)
    var n1203anim = -6+3 * Math.sin(i/3.5 + pi/6)
    var n1204animX = 8 * Math.sin(i/3 + pi/12)
    var n1204anim = 4+3 * Math.sin(i/3.5 + pi/12)
    var n1205animX = 9 * Math.sin(i/3 + pi/20)
    var n1205anim = 4+3 * Math.sin(i/3.5 + pi/12)

    //n1201.style.transform = "translateY(" + n1201anim + "px)"
    n1202.style.transform = "translateX(" + n1202animX + "px)translateY(" + n1202anim + "px)"
    n1203.style.transform = "translateX(" + n1203animX + "px)translateY(" + n1203anim + "px)"
    n1204.style.transform = "translateX(" + n1204animX + "px)translateY(" + n1202anim + "px)"
    n1205.style.transform = "translateX(" + n1205animX + "px)translateY(" + n1202anim + "px)"



//13Tishi
    //var n1301anim = 7 * Math.sin(i/3 + pi/12)
    var n1302animX = 8 * Math.sin(i/3 + pi/18)
    var n1303animX = 6 * Math.sin(i/3 + pi/6)
    var n1303anim = -6+3 * Math.sin(i/3.5 + pi/6)
    var n1304animX = 8 * Math.sin(i/3 + pi/18)
    var n1305animX = 8.5 * Math.sin(i/3 + pi/24)

    //n1301.style.transform = "translateY(" + n1201anim + "px)"
    n1302.style.transform = "translateX(" + n1302animX + "px)"
    n1303.style.transform = "translateX(" + n1303animX + "px)translateY(" + n1303anim + "px)"
    n1304.style.transform = "translateX(" + n1304animX + "px)"
    n1305.style.transform = "translateX(" + n1305animX + "px)"



//14Zhenya
    //var n1401animX = 3 * Math.sin(i/3)
    var n1402animX = 4+8 * Math.sin(i/3 + pi/24)
    var n1402anim = 5+3 * Math.sin(i/3.5 + pi/24)
    var n1403animX = 4+6 * Math.sin(i/3 + pi/12)
    var n1403anim = -6+3 * Math.sin(i/3.5 + pi/12)
    var n1404animX = 4+8 * Math.sin(i/3 + pi/12)
    var n1404anim = 5+3 * Math.sin(i/3.5 + pi/12)

    //n1401.style.transform = "translateX(" + n1401animX + "px)"
    n1402.style.transform = "translateX(" + n1402animX + "px)translateY(" + n1402anim + "px)"
    n1403.style.transform = "translateX(" + n1403animX + "px)translateY(" + n1403anim + "px)"
    n1404.style.transform = "translateX(" + n1404animX + "px)translateY(" + n1404anim + "px)"


//15VanyaM
    var n1501anim = -10
    var n1502animX = 5+8 * Math.sin(i/3 + pi/24)
    //var n1502anim = 4+3 * Math.sin(i/3.5 + pi/24)
    var n1503animX = 5+6 * Math.sin(i/3 + pi/12)
    var n1503anim = -8+0.1 * Math.sin(i/3.5 + pi/24)
    var n1504animX = 5+8 * Math.sin(i/3 + pi/24)
    //var n1504anim = 4+3 * Math.sin(i/3.5 + pi/12)

    n1501.style.transform = "translateY(" + n1501anim + "px)"
    n1502.style.transform = "translateX(" + n1502animX + "px)"
    n1503.style.transform = "translateX(" + n1503animX + "px)translateY(" + n1503anim + "px)"
    n1504.style.transform = "translateX(" + n1504animX + "px)"



//16Kostya
    //var n1601animX = 3 * Math.sin(i/3)
    var n1602animX = 8 * Math.sin(i/3 + pi/12)
    var n1602anim = 4+3 * Math.sin(i/3.5 + pi/24)
    var n1603animX = 6 * Math.sin(i/3 + pi/6)
    var n1603anim = -7+3 * Math.sin(i/3.5 + pi/24)
    var n1604animX = 8 * Math.sin(i/3 + pi/12)
    var n1604anim = 4+3 * Math.sin(i/3.5 + pi/12)
    var n1605animX = 20 + 8 * Math.sin(i/3 + pi/3)
    var n1605anim = 4+8 * Math.sin(i/3.5 )

    //n1601.style.transform = "translateX(" + n1601animX + "px)"
    n1602.style.transform = "translateX(" + n1602animX + "px)translateY(" + n1602anim + "px)"
    n1603.style.transform = "translateX(" + n1603animX + "px)translateY(" + n1603anim + "px)"
    n1604.style.transform = "translateX(" + n1604animX + "px)translateY(" + n1602anim + "px)"
    n1605.style.transform = "translateX(" + n1605animX + "px)translateY(" + n1602anim + "px)"


//17Serzh
    //var n1701anim = 7 * Math.sin(i/3 + pi/12)
    var n1702animX = 4 * Math.sin(i/3 + pi/18)
    var n1703animX = 3 * Math.sin(i/3 + pi/6)
    var n1703anim = -7
    var n1704animX = 3 * Math.sin(i/3 + pi/28)
    var n1704anim = 2 * Math.sin(i/3)
    var n1705animX = 4.5 * Math.sin(i/3 + pi/24)

    //n1701.style.transform = "translateY(" + n1701anim + "px)"
    n1702.style.transform = "translateX(" + n1702animX + "px)"
    n1703.style.transform = "translateX(" + n1703animX + "px)translateY(" + n1703anim + "px)"
    n1704.style.transform = "translateX(" + n1704animX + "px)translateY(" + n1704anim + "px)"
    n1705.style.transform = "translateX(" + n1705animX + "px)"


//18Mitya
    //var n1801anim = 7 * Math.sin(i/3 + pi/12)
    var n1802animX = 8 * Math.sin(i/3 + pi/12)
    var n1802anim = 4+3 * Math.sin(i/3.5 + pi/24)
    var n1803animX = 6 * Math.sin(i/3 + pi/6)
    var n1803anim = -5+3 * Math.sin(i/3.5 + pi/24)
    var n1804animX = 8 * Math.sin(i/3 + pi/12)
    var n1804anim = 4+3 * Math.sin(i/3.5 + pi/12)

    //n1801.style.transform = "translateY(" + n1201anim + "px)"
    n1802.style.transform = "translateX(" + n1802animX + "px)translateY(" + n1802anim + "px)"
    n1803.style.transform = "translateX(" + n1803animX + "px)translateY(" + n1803anim + "px)"
    n1804.style.transform = "translateX(" + n1804animX + "px)translateY(" + n1804anim + "px)"



//19Jury
    //var n1901anim = 7 * Math.sin(i/3 + pi/12)
    var n1902animX = 8 * Math.sin(i/3 + pi/12)
    var n1903animX = 6 * Math.sin(i/3 + pi/15)
    var n1903anim = -8+0.1 * Math.sin(i/3)
    var n1904animX = 8 * Math.sin(i/3 + pi/12)

    //n1901.style.transform = "translateY(" + n1201anim + "px)"
    n1902.style.transform = "translateX(" + n1902animX + "px)"
    n1903.style.transform = "translateX(" + n1903animX + "px)translateY(" + n1903anim + "px)"
    n1904.style.transform = "translateX(" + n1904animX + "px)"


//20Dima
    //var n1801anim = 7 * Math.sin(i/3 + pi/12)
    var n2002animX = 8 * Math.sin(i/3 + pi/12)
    var n2002anim = 4+3 * Math.sin(i/3.5 + pi/24)
    var n2003animX = 6 * Math.sin(i/3 + pi/6)
    var n2003anim = -6+3 * Math.sin(i/3.5 + pi/6)
    var n2004animX = 8 * Math.sin(i/3 + pi/12)
    var n2004anim = 4+3 * Math.sin(i/3.5 + pi/12)

    //n1801.style.transform = "translateY(" + n1201anim + "px)"
    n2002.style.transform = "translateX(" + n2002animX + "px)translateY(" + n2002anim + "px)"
    n2003.style.transform = "translateX(" + n2003animX + "px)translateY(" + n2003anim + "px)"
    n2004.style.transform = "translateX(" + n2004animX + "px)translateY(" + n2004anim + "px)"


//21Max
    //var n1901anim = 7 * Math.sin(i/3 + pi/12)
    var n2102animX = 8 * Math.sin(i/3 + pi/12)
    var n2103animX = 6 * Math.sin(i/3 + pi/6)
    var n2104animX = 8 * Math.sin(i/3 + pi/12)

    //n2101.style.transform = "translateY(" + n1201anim + "px)"
    n2102.style.transform = "translateX(" + n2102animX + "px)"
    n2103.style.transform = "translateX(" + n2103animX + "px)"
    n2104.style.transform = "translateX(" + n2104animX + "px)"


//22Sasha
    //var n2201anim = 7 * Math.sin(i/3 + pi/12)
    var n2202animX = 8 * Math.sin(i/3 + pi/12)
    var n2202anim = 4+3 * Math.sin(i/3.5 + pi/24)
    var n2203animX = 6 * Math.sin(i/3 + pi/6)
    var n2203anim = -6+3 * Math.sin(i/3.5 + pi/6)
    var n2204animX = 8 * Math.sin(i/3 + pi/12)
    var n2204anim = 4+3 * Math.sin(i/3.5 + pi/12)

    //n1801.style.transform = "translateY(" + n1201anim + "px)"
    n2202.style.transform = "translateX(" + n2202animX + "px)translateY(" + n2202anim + "px)"
    n2203.style.transform = "translateX(" + n2203animX + "px)translateY(" + n2203anim + "px)"
    n2204.style.transform = "translateX(" + n2204animX + "px)translateY(" + n2204anim + "px)"


//23Anton
    //var n2301animX = 3 * Math.sin(i/3)
    var n2302animX = 8 * Math.sin(i/3 + pi/12)
    var n2303animX = 6 * Math.sin(i/3 + pi/6)
    var n2304animX = 8 * Math.sin(i/3 + pi/12)
    var n2305animX = 20 + 8 * Math.sin(i/3 + pi/3)
    var n2305anim = 4+8 * Math.sin(i/3.5)

    //n2301.style.transform = "translateX(" + n2301animX + "px)"
    n2302.style.transform = "translateX(" + n2302animX + "px)"
    n2303.style.transform = "translateX(" + n2303animX + "px)"
    n2304.style.transform = "translateX(" + n2304animX + "px)"
    n2305.style.transform = "translateY(" + n2305anim + "px)translateX(" + n2305animX + "px)"

//24Lera
    var n2401animX = 5 * Math.sin(i/3 + pi/12)
    var n2401anim = 6 * Math.sin(i/3.5 + pi/24)
    var n2402animX = 5 * Math.sin(i/3 + pi/12)
    var n2402anim = 6 * Math.sin(i/3.5 + pi/24)
    //var n2403animX = 6 * Math.sin(i/3 + pi/6)
    //var n2403anim = 4+3 * Math.sin(i/3.5 + pi/6)
    var n2404animX = 5 * Math.sin(i/3 + pi/12)
    var n2404anim = 7 * Math.sin(i/3.5 + pi/24)

    n2401.style.transform = "translateX(" + n2401animX + "px)translateY(" + n2401anim + "px)"
    n2402.style.transform = "translateX(" + n2402animX + "px)translateY(" + n2402anim + "px)"
    //n2403.style.transform = "translateX(" + n2403animX + "px)translateY(" + n2403anim + "px)"
    n2404.style.transform = "translateX(" + n2404animX + "px)translateY(" + n2404anim + "px)"


//25Kristi
    //var n2501anim = 7 * Math.sin(i/3 + pi/12)
    var n2502animX = 8 * Math.sin(i/3 + pi/12)
    var n2503animX = 6 * Math.sin(i/3 + pi/6)
    var n2504animX = 8 * Math.sin(i/3 + pi/12)

    //n2501.style.transform = "translateY(" + n1201anim + "px)"
    n2502.style.transform = "translateX(" + n2502animX + "px)"
    n2503.style.transform = "translateX(" + n2503animX + "px)"
    n2504.style.transform = "translateX(" + n2504animX + "px)"


//26Nastya
    var n2601animX = 5 * Math.sin(i/3 + pi/12)
    var n2601anim =   6 * Math.sin(i/3.5 + pi/24)
    var n2602anim = -20 + 0.01 * Math.sin(i/3)
    var n2603animX =   6 * Math.sin(i/3 + pi/6)
    var n2603anim = 3 * Math.sin(i/3.5 + pi/6)
    var n2604animX =   5 * Math.sin(i/3 + pi/12)
    var n2604anim =   7 * Math.sin(i/3.5 + pi/24)

    n2601.style.transform = "translateX(" + n2601animX + "px)translateY(" + n2601anim + "px)"
    n2602.style.transform = "translateY(" + n2602anim + "px)"
    n2603.style.transform = "translateX(" + n2603animX + "px)translateY(" + n2603anim + "px)"
    n2604.style.transform = "translateX(" + n2604animX + "px)translateY(" + n2604anim + "px)"




//27Nora
    var n2701anim = -20 + 0.01 * Math.sin(i/3)
    var n2702animX = 8 * Math.sin(i/3 + pi/12)
    var n2703animX = 6 * Math.sin(i/3 + pi/6)
    var n2704animX = 8 * Math.sin(i/3 + pi/12)

    n2701.style.transform = "translateY(" + n2701anim + "px)"
    n2702.style.transform = "translateX(" + n2702animX + "px)"
    n2703.style.transform = "translateX(" + n2703animX + "px)"
    n2704.style.transform = "translateX(" + n2704animX + "px)"


//28Alya
    var n2801animX = 7 * Math.sin(i/3 + pi/12)
    var n2801anim =   5 * Math.sin(i/3.5 + pi/24)
    //var n2802anim = -20 + 0.01 * Math.sin(i/3)
    var n2803animX =   7 * Math.sin(i/3 + pi/6)
    var n2803anim = 3 * Math.sin(i/3.5 + pi/6)
    var n2804animX =   7 * Math.sin(i/3 + pi/12)
    var n2804anim =   5 * Math.sin(i/3.5 + pi/24)
    var n2805animX = 7 * Math.sin(i/3 + pi/12)
    var n2805anim = 3 * Math.sin(i/3.5)

    n2801.style.transform = "translateX(" + n2801animX + "px)translateY(" + n2801anim + "px)"
    //n2802.style.transform = "translateY(" + n2802anim + "px)"
    n2803.style.transform = "translateX(" + n2803animX + "px)translateY(" + n2803anim + "px)"
    n2804.style.transform = "translateX(" + n2804animX + "px)translateY(" + n2804anim + "px)"
    n2805.style.transform = "translateX(" + n2805animX + "px)translateY(" + n2805anim + "px)"


//29Sveta
    var n2901animX = 8 * Math.sin(i/3 + pi/12)
    //var n2902animX = 8 * Math.sin(i/3 + pi/12)
    var n2903animX = 6 * Math.sin(i/3 + pi/9)
    var n2903anim = -6+0.1 * Math.sin(i/3 + pi/9)
    var n2904animX = 8 * Math.sin(i/3 + pi/12)
    var n2905animX = 50 + 8 * Math.sin(i/3)
    var n2905anim = 4+8 * Math.sin(i/3.5)


    n2901.style.transform = "translateX(" + n2901animX + "px)"
    //n2902.style.transform = "translateX(" + n2902animX + "px)"
    n2903.style.transform = "translateX(" + n2903animX + "px)translateY(" + n2903anim + "px)"
    n2904.style.transform = "translateX(" + n2904animX + "px)"
    n2905.style.transform = "translateY(" + n2905anim + "px)translateX(" + n2905animX + "px)"


//30Anya
    var n3001animX = 7 * Math.sin(i/3 + pi/12)
    var n3001anim =   5 * Math.sin(i/3.5 + pi/24)
    //var n3002anim = -20 + 0.01 * Math.sin(i/3)
    var n3003animX =   7 * Math.sin(i/3 + pi/6)
    var n3003anim = 3 * Math.sin(i/3.5 + pi/6)
    var n3004animX =   7 * Math.sin(i/3 + pi/12)
    var n3004anim =   5 * Math.sin(i/3.5 + pi/24)


    n3001.style.transform = "translateX(" + n3001animX + "px)translateY(" + n3001anim + "px)"
    //n3002.style.transform = "translateY(" + n3002anim + "px)"
    n3003.style.transform = "translateX(" + n3003animX + "px)translateY(" + n3003anim + "px)"
    n3004.style.transform = "translateX(" + n3004animX + "px)translateY(" + n3004anim + "px)"



//31Alena
    //var n3101anim = 7 * Math.sin(i/3 + pi/12)
    var n3102animX = 8 * Math.sin(i/3 + pi/12)
    var n3103animX = 6 * Math.sin(i/3 + pi/6)
    var n3104animX = 8 * Math.sin(i/3 + pi/12)

    //n3101.style.transform = "translateY(" + n1201anim + "px)"
    n3102.style.transform = "translateX(" + n3102animX + "px)"
    n3103.style.transform = "translateX(" + n3103animX + "px)"
    n3104.style.transform = "translateX(" + n3104animX + "px)"

//32Olya

    //var n3201anim =   5 * Math.sin(i/3.5 + pi/24)
    var n3202animX =   7 * Math.sin(i/3 + pi/6)
    var n3202anim = 2 * Math.sin(i/3.5 + pi/24)
    var n3203animX = 7 * Math.sin(i/3 + pi/12)
    var n3203anim = 5 * Math.sin(i/3.5 + pi/24)
    var n3204animX =   2 * Math.sin(i/3 + pi/12)
    var n3204anim =   5 * Math.sin(i/3.5 + pi/24)
    var n3205animX =   7 * Math.sin(i/3 + pi/6)
    var n3205anim =   2 * Math.sin(i/3.5 + pi/24)


    //n3201.style.transform = "translateX(" + n3201animX + "px)translateY(" + n3201anim + "px)"
    n3202.style.transform = "translateX(" + n3202animX + "px)translateY(" + n3202anim + "px)"
    n3203.style.transform = "translateX(" + n3203animX + "px)translateY(" + n3203anim + "px)"
    n3204.style.transform = "translateX(" + n3203animX + "px)translateY(" + n3204anim + "px)"
    n3205.style.transform = "translateX(" + n3205animX + "px)translateY(" + n3205anim + "px)"




//33Di
    var n3301animX = 8 * Math.sin(i/3 + pi/12)
    //var n3302animX = 8 * Math.sin(i/3 + pi/12)
    var n3303animX = 6 * Math.sin(i/3 + pi/6)
    var n3304animX = 8 * Math.sin(i/3 + pi/12)

    n3301.style.transform = "translateX(" + n3301animX + "px)"
    //n3302.style.transform = "translateX(" + n3302animX + "px)"
    n3303.style.transform = "translateX(" + n3303animX + "px)"
    n3304.style.transform = "translateX(" + n3304animX + "px)"



//34NastyaSM
    var n3401animX = 7 * Math.sin(i/3 + pi/12)
    var n3401anim =   5 * Math.sin(i/3.5 + pi/24)
    //var n3402anim = -20 + 0.01 * Math.sin(i/3)
    var n3403animX =   7 * Math.sin(i/3 + pi/6)
    var n3403anim = 3 * Math.sin(i/3.5 + pi/6)
    var n3404animX =   7 * Math.sin(i/3 + pi/12)
    var n3404anim =   5 * Math.sin(i/3.5 + pi/24)


    n3401.style.transform = "translateX(" + n3401animX + "px)translateY(" + n3401anim + "px)"
    //n3402.style.transform = "translateY(" + n3402anim + "px)"
    n3403.style.transform = "translateX(" + n3403animX + "px)translateY(" + n3403anim + "px)"
    n3404.style.transform = "translateX(" + n3404animX + "px)translateY(" + n3404anim + "px)"



//35DashaM
    //var n3501animX = 8 * Math.sin(i/3 + pi/12)
    var n3502animX = 8 * Math.sin(i/3 + pi/12)
    var n3503animX = 6 * Math.sin(i/3 + pi/6)
    var n3504animX = 8 * Math.sin(i/3 + pi/12)

    //n3501.style.transform = "translateX(" + n3501animX + "px)"
    n3502.style.transform = "translateX(" + n3502animX + "px)"
    n3503.style.transform = "translateX(" + n3503animX + "px)"
    n3504.style.transform = "translateX(" + n3504animX + "px)"


//36Marina
    var n3601animX = 7 * Math.sin(i/3 + pi/12)
    var n3601anim =   5 * Math.sin(i/3.5 + pi/24)
    //var n3602anim = -20 + 0.01 * Math.sin(i/3)
    var n3603animX =   7 * Math.sin(i/3 + pi/6)
    var n3603anim = 3 * Math.sin(i/3.5 + pi/6)
    var n3604animX =   7 * Math.sin(i/3 + pi/12)
    var n3604anim =   5 * Math.sin(i/3.5 + pi/24)


    n3601.style.transform = "translateX(" + n3601animX + "px)translateY(" + n3601anim + "px)"
    //n3602.style.transform = "translateY(" + n3402anim + "px)"
    n3603.style.transform = "translateX(" + n3603animX + "px)translateY(" + n3603anim + "px)"
    n3604.style.transform = "translateX(" + n3604animX + "px)translateY(" + n3604anim + "px)"













    i = i + pi/4.1

    requestAnimationFrame(animationFrame)
})
