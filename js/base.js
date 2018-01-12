//获取页面宽度并设置fontSize的大小
document.documentElement.style.fontSize = document.documentElement.clientWidth / 640 * 100 + "px";

//  发送验证码倒计时S
var countdown = 60;

function settime(obj) {
	if(countdown == 0) {
		obj.removeAttribute("disabled");
		obj.value = "获取验证码";
		countdown = 60;
		return;
	} else {
		obj.setAttribute("disabled", true);
		obj.value = "重新发送(" + countdown + ")";
		countdown--;
	}
	setTimeout(function() {
		settime(obj)
	}, 1000)
}
//  发送验证码倒计时E
$(function() {
	//	条款声明选择框替换图片S
	$(".statement input").click(function() {
		if($(this)[0].checked == true) {
			$(".disagree").hide();
			$(".agree").show();
		} else {
			$(".agree").hide();
			$(".disagree").show();
		}
	})
	//	条款声明选择框替换图片E

	// 还款颜色变化S
	$(".huankuan").each(function() {
		if($(this).context.innerHTML == "已还清" || $(this).context.innerText == "已还清") {
			$(this).siblings().css("color", "#D4D4D4");
			$(this).css("color", "#D4D4D4");
		} else {
			$(this).siblings().css("color", "#000");
			$(this).css("color", "#000");
		}
	})
	// 还款颜色变化E
});
