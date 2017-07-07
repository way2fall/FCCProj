(function() {
  var quoteButton = document.getElementById("random-quote");
  var quoteText = document.getElementById("quote-text");
  var quoteBy = document.getElementById("said-by");

  //调用函数
  newRandomQuote(quotes, quoteText, quoteBy);

  //绑定点击事件
  quoteButton.addEventListener("click", function() {
    //删除上次生成的button iframe（因为widgets.js会将button转为iframe）
    document.querySelector("iframe").remove();
    newRandomQuote(quotes, quoteText, quoteBy);
    //强制让twtter控件重载生成新的button
    twttr.widgets.load();
  });

  //随机语录函数，传入三个参数，语录队列、语录引用和作者引用
  function newRandomQuote(quoteArray, quote, author) {
    var newQuote = quoteArray[randomGen(0, quoteArray.length - 1)];
    quote.innerText = newQuote.quote;
    author.innerText = newQuote.author;

    //每次生成随机语录时生成新的推特按钮
    var tweetButton = generateTweetButton(newQuote.quote);
    //将按钮追加到文档末尾
    document.getElementById("main-container").appendChild(tweetButton);
    // document.querySelector(".main-container").appendChild(tweetButton);

    //随机数生成器
    function randomGen(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
  }
  //生成推特按钮函数
    function generateTweetButton(text) {
      var tweetButton = document.createElement("a");
      tweetButton.setAttribute("href", "https://twitter.com/share");
      tweetButton.setAttribute("class", "twitter-share-button");
      tweetButton.setAttribute("data-count", "horizontal");
      tweetButton.setAttribute("data-text", text);
      return tweetButton;
    }
})(); //直接调用