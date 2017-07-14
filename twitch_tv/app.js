var usernameArr = ["ESL_SC2", "MedryBW", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

//获取用户对象
function getUserStats(username) {
    $.ajax({
        url: "https://wind-bow.gomix.me/twitch-api/streams/" + username,
        dataType: 'jsonp',
        type: 'GET',
        success: function(data) {
            console.log(data);
            return data;
        }
    });
}

//获取频道对象
function getChannelStats(username) {
    // $.ajax({
    //     url: "https://wind-bow.gomix.me/twitch-api/channels/" + username,
    //     dataType: 'jsonp',
    //     type: 'GET',
    //     success: function(data) {
    //         console.log(data);
    //         return data;
    //     }
    // });
    //使用$.getJSON时url加上"?callback=?"则自动识别dataType为jsonp
    $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + username+"?callback=?", function(data){
    	console.log(data);
    	return data;
    })
}
//用户是否在线
function isOnline(userObj) {
    if (userObj.stream === null) {
        return false;
    }
    return true;
}
//用户账户是否关闭或不存在
function isClosed(userObj){
	if(getChannelStats(userObj).status==404){
		return true;
	}
	return false;
}

$(document).ready(function() {
// getChannelStats("MedryBW");
	usernameArr.forEach(function(user){
		var userObj = getUserStats(user);
		if (isOnline(userObj)){

		}
	});

});


var channelback={
    "mature": true,
    "status": "Struggle Bus 5: The Fight to Stay Alive",
    "broadcaster_language": "en",
    "display_name": "dallas",
    "game": "Nioh",
    "language": "en",
    "_id": "44322889",
    "name": "dallas",
    "created_at": "2013-06-03T19:12:02Z",
    "updated_at": "2017-04-24T10:03:34Z",
    "partner": false,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/dallas-profile_image-1a2c906ee2c35f12-300x300.png",
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/dallas-channel_offline_image-2e82c1df2a464df7-1920x1080.jpeg",
    "profile_banner": null,
    "profile_banner_background_color": null,
    "url": "https://www.twitch.tv/dallas",
    "views": 2000,
    "followers": 79,
    "broadcaster_type": "affiliate",
    "stream_key": "live_44322889_a34ub37c8ajv98a0",
    "email": "email@provider.com"
}

var userback = {
   "stream": {
      "_id": 23932774784,
      "game": "BATMAN - The Telltale Series",
      "viewers": 7254,
      "video_height": 720,
      "average_fps": 60,
      "delay": 0,
      "created_at": "2016-12-14T22:49:56Z",
      "is_playlist": false,
      "preview": {
         "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-80x45.jpg",
         "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-320x180.jpg",
         "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-640x360.jpg",
         "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_dansgaming-{width}x{height}.jpg"
      },
      "channel": {
         "mature": false,
         "status": "Dan is Batman? - Telltale's Batman",
         "broadcaster_language": "en",
         "display_name": "DansGaming",
         "game": "BATMAN - The Telltale Series",
         "language": "en",
         "_id": 7236692,
         "name": "dansgaming",
         "created_at": "2009-07-15T03:02:41Z",
         "updated_at": "2016-12-15T01:33:58Z",
         "partner": true,
         "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-profile_image-76e4a4ab9388bc9c-300x300.png",
         "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-channel_offline_image-d3551503c24c08ad-1920x1080.png",
         "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/dansgaming-profile_banner-4c2b8ece8cd010b4-480.jpeg",
         "profile_banner_background_color": null,
         "url": "https://www.twitch.tv/dansgaming",
         "views": 63906830,
         "followers": 538598
      }
   }
}


























