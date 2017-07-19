var calcState = "init"; //计算状态，用来表示当前计算是初始状态还是结束状态
var screenValue = "";

$(document).ready(function() {
    $(".operator").click(function() {
        if (calcState === "init") {
            screenValue += $(this).val();
            $("#screen").val(screenValue);
        } else {
            screenValue = $(this).val();
            $("#screen").val(screenValue);
            calcState = "init";
        }
    });
    //清除屏幕
    $('.AC').click(function() {
        screenValue = "";
        $("#screen").val(screenValue);
    });
    //退格
    $('.CE').click(function() {
        screenValue = screenValue.slice(0, screenValue.length - 1);
        $("#screen").val(screenValue);
    });
    //求值
    $('.equal').click(function() {
        try {
            screenValue = parseFloat(eval(screenValue).toFixed(8));
            if (screenValue == Infinity || screenValue == -Infinity) {
                $("#screen").val("除数不能为0，请重新输入");
                calcState = "end";
            } else {
                $("#screen").val(screenValue);
            }
        } catch(e){
            $("#screen").val("输入错误！！");
            calcState = "end";
        }
        // calcState = "end";
    })

});