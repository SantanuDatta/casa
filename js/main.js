$(function () {
	$("body").niceScroll({
        cursorcolor:"#ed145b",
        cursorwidth:"10px",
        cursorborder:"0px",
		cursorfixedheight: 100,
    });
});

$ function get_action(form){
    var v = grecaptcha.getResponse();
    if(v.length == 0)
    {
        document.getElementById('captcha').innerHTML="You can't leave Captcha Code empty";
        return false;
    }
    else
    {
         document.getElementById('captcha').innerHTML="Captcha completed";
        return true; 
    }
}