$(document).ready(function() {
    //气泡效果
    $('#waterbubble').waterbubble({
        waterColor: '#99CC33',
        lineWidth: 2,
        data: 0.1,
        radius: 120,
    });

    $("#w-minus").on("click", function() {
        if (+$("#w-time").text() > 1) {
            $("#w-time").text(+$("#w-time").text() - 1);
        }
    });

    $("#w-plus").on("click", function() {
        $("#w-time").text(+$("#w-time").text() + 1);
    });

    $("#b-minus").on("click", function() {
        if (+$("#b-time").text() > 1) {
            $("#b-time").text(+$("#b-time").text() - 1);
        }
    });

    $("#b-plus").on("click", function() {
        $("#b-time").text(+$("#b-time").text() + 1);
    });
});

function updateDisplay(t){
	
}