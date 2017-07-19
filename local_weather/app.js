// $(document).ready(function() {

//         $.getJSON("http://ip-api.com/json", function(data) {
//             var longitude = data.lon;
//             var latitude = data.lat;
//             console.log("longitude " + longitude + ", latitude " + latitude);
//             var key = "62c00da5272af082af7c2f1f63380515";
//             var api = "https://crossorigin.me/http://v.juhe.cn/weather/geo?key=" + key + "&lon=" + longitude + "&lat=" + latitude;
//             console.log(api);
//             $.getJSON(api, function(data) {
//                 //data manipulation goes here
//                 // console.log(data.resultcode);
//                 console.log(data);
//                 if (data.resultcode == 200) {
//                     var today = data.result.today;
//                     $("#location").text(today.city);
//                     $("#weather").text(today.weather);
//                     $("#temperature").text(today.temperature);
//                     $("#wind").text(today.wind);
//                 } else if (data.error_code === 203905) {
//                     console.log("暂时无法获取您的位置...");
//                 }


//             }).fail(alert("fail"));
//         });
//     })
$(document).ready(function() {
    if (navigator.geolocation) {
        console.log('a');
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('b');
            //FCC api
            $.getJSON("https://fcc-weather-api.glitch.me//api/current?lon="+position.coords.longitude+"&lat="+position.coords.latitude, function(data){
              console.log(data);
            })
            // wunderground api
            // $.ajax({
            //   url: 'https://api.wunderground.com/api/686a817dcd0a4281/geolookup/conditions/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json',
            //   success: function(data) {
            //     console.log(data);
            //     console.log(data.location.city + ', ' + data.location.country_name);

            //   }
            // });

            //聚合api
            // $.ajax({
            //   url: 'http://v.juhe.cn/weather/geo?format=2&key=62c00da5272af082af7c2f1f63380515&lon=' + position.coords.longitude +"&lat="+position.coords.latitude,
            //   dataType: 'jsonp',
            //   success: function(data) {
            //     console.log(data);
            //     // console.log(data.location.city + ', ' + data.location.country_name);
            //     var city = data.result.today;
            //     var weather = data.result.today.weather;
            //     var temperature = data.result.today.temperature;
            //     console.log("city"+city+" weather"+weather+" temperature"+temperature);
            //   }
            // });

        })
    }
})
// $(document).ready(function() {


//     console.log(data.resultcode);
//     if (data.resultcode == 200) {

//         console.log("inside if");
//         var today = data.result.today;
//         // $("h1").html(today.city + "天气预报");
//         // console.log(today);
//         var html = "";
//         var realKey = ";"
//         $.each(today, function(key, value) {
//             switch (key) {
//                 case "temperature":
//                     realKey = "温度";
//                     html += "<p>" + realKey + ": " + value + "</p>";
//                     break;
//                 case "weather":
//                     realKey = "天气";
//                     html += "<p>" + realKey + ": " + value + "</p>";
//                     break;
//                 case "wind":
//                     realKey = "风力";
//                     html += "<p>" + realKey + ": " + value + "</p>";
//                     break;
//                 case "dressing_index":
//                     realKey = "穿衣指数";
//                     html += "<p>" + realKey + ": " + value + "</p>";
//                     break;
//                 case "dressing_advice":
//                     realKey = "穿衣建议";
//                     html += "<p>" + realKey + ": " + value + "</p>";
//                 default:
//                     break;
//             }


//         });
//         $(".today_weather").html(html);
//         var future = data.result.future;

//         $.each(future, function(key,value){
//          var future_html = "";
//          console.log(key+":");
//          future_html+="<div class='col-md-3'>";
//          $.each(value, function(inKey, inValue){

//            console.log(inKey+inValue);
//            future_html+="<p>"+inKey+":"+inValue+"</p>";
//          });future_html+="</div>";
//          $(".row").html(future_html);
//         })
//     } else {
//         console.log("没数据");
//     }



// });
// console.log(data.result.sk.wind_direction);
// $.each(data, function(key, value) {

//     console.log(key+":"+value);
// });