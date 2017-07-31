// 播放列表 start
function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  this.songs[this.nowPlayingIndex].play();
};

Playlist.prototype.stop = function(){
  this.songs[this.nowPlayingIndex].stop()
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex+=1;
  if(this.nowPlayingIndex === this.songs.length){
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML="";
  for(let i=0;i<this.songs.length;i++){
    list.innerHTML+=this.songs[i].toHTML();
  }
};
// 播放列表 end

// 父类Media start
function Media(title, duration){
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype.play = function() {
  this.isPlaying = true;
};

Media.prototype.stop = function() {
  this.isPlaying = false;
};
// 父类Media end

// 歌曲 start
function Song(title,artist,duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var htmlString = "<li";
  if(this.isPlaying){
  htmlString+=" class='current'";
  }
  htmlString+=">"
  htmlString+=this.title;
  htmlString+=" - ";
  htmlString+=this.artist;
  htmlString+="<span class='duration'>";
  htmlString+=this.duration;
  htmlString+="</span></li>";
  
  return htmlString;
};
// 歌曲 end

//电影 start
function Movie(title, year, duration){
  Media.call(this, title, duration);
  this.year = year;
}
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  var htmlString = "<li";
  if(this.isPlaying){
  htmlString+=" class='current'";
  }
  htmlString+=">"
  htmlString+=this.title;
  htmlString+="(";
  htmlString+=this.year;
  htmlString+=")";
  htmlString+="<span class='duration'>";
  htmlString+=this.duration;
  htmlString+="</span></li>";
  
  return htmlString;
};
//电影 end

const myPlayList = new Playlist();
const freeLoop = new Song("free loop", "daniel powter", "4:30");
const high = new Song("high", "james blunt", "3:58");
const darkKnight = new Movie("Dark Knight", "2008","2:30:13");
myPlayList.add(freeLoop);
myPlayList.add(high);
myPlayList.add(darkKnight);

const playlistElement = document.getElementById("playlist");
myPlayList.renderInElement(playlistElement);

const playButton = document.getElementById("play");
playButton.onclick = ()=>{myPlayList.play();myPlayList.renderInElement(playlistElement);};
const nextButton = document.getElementById("next");
nextButton.onclick = ()=>{myPlayList.next();myPlayList.renderInElement(playlistElement);}
const stopButton = document.getElementById("stop");
stopButton.onclick = ()=>{myPlayList.stop();myPlayList.renderInElement(playlistElement);}





