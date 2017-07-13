// 拼接thml字符串
var temp = "";

function search() {
    
      $.ajax({
          url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $("input").val(),
          // 跨域请求格式
          dataType: 'jsonp',
          type: 'POST',
          success: function(data){
            // 清理上次数据
            $(".search-content").empty();
              var resultArr = data.query.search;
              for(var i in resultArr){
                // temp = "<div class='well title'><h1>"+resultArr[i].title+"</h1><p class='snippet'>"+resultArr[i].snippet+"</p></div>";
                // temp = "<div class='well title'><a href='https://en.wikipedia.org/wiki/'"+
                // resultArr[i].title+"target='_blank'>"+"<h1>"+resultArr[i].title+"</h1>"+
                // "</a><p class='snippet'>"+resultArr[i].snippet+"</p></div>";
                temp = "<div class='well'><a href='https://en.wikipedia.org/wiki/"+resultArr[i].title+
                "' target='_blank'><h3>"+resultArr[i].title+"</h3></a><p class='snippet'>"+resultArr[i].snippet+"</p></div>";
                console.log(temp);
                $(".search-content").append(temp);
              }
          }
      });
      // 解绑上次事件后重新绑定
      $("input").off("keyup");
      $("input").keyup(function(){
        search();
      })
    
}
$(document).ready(function() {
  $("input").keyup(function(){
    search();
  });
});
