var temp = "";

function search() {
    
      $.ajax({
          url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $("input").val(),
          dataType: 'jsonp',
          type: 'POST',
          success: function(data){
            $(".search-content").empty();
              var resultArr = data.query.search;
              for(var i in resultArr){
                temp = "<div class='well title'><h1>"+resultArr[i].title+"</h1><p class='snippet'>"+resultArr[i].snippet+"</p></div>";
                $(".search-content").append(temp);
              }
          }
      });
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
