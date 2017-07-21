$(document).ready(function() {

    //气泡效果
    $('#waterbubble').waterbubble({
        waterColor: '#99CCCC',
        lineWidth: 2,
        data: 0.0,
        animation: false,
        // radius: 120,
    });

    //计时器设定增减
    $("#w-minus").on("click", function() {
    	$("#status").text("Keep Working!!!");
        if (+$("#w-time").text() > 1) {
            $("#w-time").text(+$("#w-time").text() - 1);
        }
    });

    $("#w-plus").on("click", function() {
    	$("#status").text("Keep Working!!!");
        $("#w-time").text(+$("#w-time").text() + 1);
    });

    $("#b-minus").on("click", function() {
    	$("#status").text("Have A Break!!!");
        if (+$("#b-time").text() > 1) {
            $("#b-time").text(+$("#b-time").text() - 1);
        }
    });

    $("#b-plus").on("click", function() {
    	$("#status").text("Have A Break!!!");
        $("#b-time").text(+$("#b-time").text() + 1);
    });

    //剩余时间(倒计时)。全局变量，需要在update()中访问，因此不声明var，下面的running和tlast同理
    time = 0;

    //初始化倒计时
    updateDisplay(time);

    //运行标识
    running = true;

    //获取当前时间戳作为以后的上次时间
    // tlast = (new Date()).getTime();

    $(".fa-play").on("click", function(){
    	run();
    });
    $(".fa-pause").on("click", function(){
    	pause();
    });
    $(".fa-stop").on("click", function(){
    	stop();
    });
});

//将倒计时时分秒转为两位数格式(xx:xx:xx)
function doubleDigit(t) {
    return ("00" + t).slice(-2);
}

//显示时分秒(倒计时)
function updateDisplay(t) {
	console.log("this is t: "+t);
    var hour = doubleDigit(Math.floor(t / 3600));
    var minute = doubleDigit(Math.floor((t - hour * 3600)/60));
    var second = doubleDigit(Math.floor(t - hour * 3600 - minute * 60));
    console.log("hour:"+hour+" minute:"+minute+" second:"+second);
    $("#timer").text(hour + ":" + minute + ":" + second);
}

//更新所有信息(倒计时、进度及作息提示)
function update() {

	// if(time<=0){
	// 	return;
	// }

	//获取每次更新(调用)时的当前时间戳
	var tnow = (new Date()).getTime();

	//已经过去的时间，毫秒转为秒
	var dt = (tnow - tlast)/1000.0;

	tlast = tnow;
	time-=dt;
	if($("#status").text()==="Keep Working!!!"){
		totalTime = $("#w-time").text()*60;
		bubbleColor = "#99CCCC";
	}
	if($("#status").text()==="Have A Break!!!"){
		totalTime = $("#b-time").text()*60;
		bubbleColor = "#99CC33";
	}
	//进度
	progress = 1-time/totalTime;

	//绘制气泡
	$("#waterbubble").waterbubble({
		data: progress,
		waterColor: bubbleColor,
		lineWidth: 2,
		animation: false,
	});
	if(time<=0){
		if($("#status").text()==="Keep Working!!!"){
			$("#status").text("Have A Break!!!");
			time = $("#b-time").text()*60;
		} else{
			$("#status").text("Keep Working!!!");
			time = $("#w-time").text()*60;
		}
	}

	//重新设置倒计时
	updateDisplay(time);

	//控制动画效果是否继续
	if(running){
		requestAnimationFrame(update);
	}
}

function run(){
	$("#status").text("Keep Working!!!");

	//time为0时，从w-time获取新的time
	if(time<=0){
		time = $("#w-time").text()*60;
		console.log("this is time "+time);
	}
	//重新计算时间点
	tlast = (new Date()).getTime();
	running = true;
	requestAnimationFrame(update);
}


function pause(){
	running = false;
}

function stop(){
	running = false;
	time = 0;
	$("#timer").text("00:00:00");
	$("#status").text("Keep Working!!!");
	$("#w-time").text("25");
	$("#b-time").text("5");
	$("#waterbubble").waterbubble({
		data:0.0,
		waterColor: "#99CCCC",
		lineWidth: 2,
		animation: false,
		// radius: 120,
	});
}














