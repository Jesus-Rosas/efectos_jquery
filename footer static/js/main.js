$(document).ready(init);

function init()
{
	if($('body').height() < $(window).height())
	{
		$('footer').css({
			"position": "absolute",
			"bottom":"0px",
			"background": "#c2c"
		})
	}
}