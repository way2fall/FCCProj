// $(document).ready(function() {

//     $.getJSON("http://ip-api.com/json", function(data) {
//         var longitude = data.lon;
//         var latitude = data.lat;
//         // console.log("longitude " + longitude + ", latitude " + latitude);
//         var key = "62c00da5272af082af7c2f1f63380515";
//         var api = "https://crossorigin.me/http://v.juhe.cn/weather/geo?key=" + key + "&lon=" + longitude + "&lat=" + latitude;
//         // console.log(api);
//         $.getJSON(api, function(data) {
//             //data manipulation goes here

//             $.each(function(val) {
//                 var keys = Object.keys(val);
//                 console.log(keys);
//             });

//         });
//     });
// })
$(document).ready(function() {
    var data = {
        "resultcode": "200",
        "reason": "successed!",
        "result": {
            "sk": {
                "temp": "34",
                "wind_direction": "南风",
                "wind_strength": "1级",
                "humidity": "23%",
                "time": "17:50"
            },
            "today": {
                "temperature": "21℃~35℃",
                "weather": "晴转多云",
                "weather_id": {
                    "fa": "00",
                    "fb": "01"
                },
                "wind": "微风",
                "week": "星期五",
                "city": "西安",
                "date_y": "2017年07月07日",
                "dressing_index": "炎热",
                "dressing_advice": "天气炎热，建议着短衫、短裙、短裤、薄型T恤衫等清凉夏季服装。",
                "uv_index": "强",
                "comfort_index": "",
                "wash_index": "较适宜",
                "travel_index": "较不宜",
                "exercise_index": "较不宜",
                "drying_index": ""
            },
            "future": {
                "day_20170707": {
                    "temperature": "21℃~35℃",
                    "weather": "晴转多云",
                    "weather_id": {
                        "fa": "00",
                        "fb": "01"
                    },
                    "wind": "微风",
                    "week": "星期五",
                    "date": "20170707"
                },
                "day_20170708": {
                    "temperature": "24℃~37℃",
                    "weather": "多云",
                    "weather_id": {
                        "fa": "01",
                        "fb": "01"
                    },
                    "wind": "微风",
                    "week": "星期六",
                    "date": "20170708"
                },
                "day_20170709": {
                    "temperature": "24℃~39℃",
                    "weather": "晴",
                    "weather_id": {
                        "fa": "00",
                        "fb": "00"
                    },
                    "wind": "微风",
                    "week": "星期日",
                    "date": "20170709"
                },
                "day_20170710": {
                    "temperature": "26℃~39℃",
                    "weather": "晴",
                    "weather_id": {
                        "fa": "00",
                        "fb": "00"
                    },
                    "wind": "东北风微风",
                    "week": "星期一",
                    "date": "20170710"
                },
                "day_20170711": {
                    "temperature": "26℃~39℃",
                    "weather": "晴",
                    "weather_id": {
                        "fa": "00",
                        "fb": "00"
                    },
                    "wind": "东北风微风",
                    "week": "星期二",
                    "date": "20170711"
                },
                "day_20170712": {
                    "temperature": "24℃~39℃",
                    "weather": "晴",
                    "weather_id": {
                        "fa": "00",
                        "fb": "00"
                    },
                    "wind": "微风",
                    "week": "星期三",
                    "date": "20170712"
                },
                "day_20170713": {
                    "temperature": "26℃~39℃",
                    "weather": "晴",
                    "weather_id": {
                        "fa": "00",
                        "fb": "00"
                    },
                    "wind": "东北风微风",
                    "week": "星期四",
                    "date": "20170713"
                }
            }
        },
        "error_code": 0
    }

    console.log(data.resultcode);
    if (data.resultcode == 200) {

        console.log("inside if");
        var today = data.result.today;
        $("h1").html("欢迎收看" + today.city + "天气预报");
        // console.log(today);
        var html = "";
        var realKey = ";"
        $.each(today, function(key, value) {
            switch (key) {
                case "temperature":
                    realKey = "温度";
                    html += "<p>" + realKey + ": " + value + "</p>";
                    break;
                case "weather":
                    realKey = "天气";
                    html += "<p>" + realKey + ": " + value + "</p>";
                    break;
                case "wind":
                    realKey = "风力";
                    html += "<p>" + realKey + ": " + value + "</p>";
                    break;
                case "dressing_index":
                    realKey = "穿衣指数";
                    html += "<p>" + realKey + ": " + value + "</p>";
                    break;
                case "dressing_advice":
                    realKey = "穿衣建议";
                    html += "<p>" + realKey + ": " + value + "</p>";
                default:
                    break;
            }


        });
        $(".today_weather").html(html);
        var future = data.result.future;

        $.each(future, function(key,value){
        	var future_html = "";
        	console.log(key+":");
        	future_html+="<div class='col-md-3'>";
        	$.each(value, function(inKey, inValue){
        		console.log(inKey+inValue);
        		future_html+=inKey+":"+inValue;
        	});future_html+="</div>";
        	$(".row").html(future_html);
        })
    } else {
        console.log("没数据");
    }



});
// console.log(data.result.sk.wind_direction);
// $.each(data, function(key, value) {

//     console.log(key+":"+value);
// });
