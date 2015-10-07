$(document).ready(init)

function init()
{
	$('#banner').css({
		"height": $(window).height() + "px"
	})

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200)
		{
			if(!flag)
			{
				$('#logo').css(
				{
					"margin-top": "-5px",
					"width": "50px",
					"height": "50px"
				})
				flag = true;
			}
		}
		else 
		{
			if(flag)
			{
				$('#logo').css({
					"margin-top" : "150px",
					"width" : "250px",
					"height" : "250px"
				})
				flag = false;
			}
		}
	}) 
}