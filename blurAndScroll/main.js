$(document).ready(init);

function init()
{
	var height = $(window).height()
	ajustesIniciales()
	function ajustesIniciales()
	{
		$('section#body').css({
			"margin-top": height - 80 + "px"
		})
	}

	$(document).scroll(blur)

	function blur()
	{
		var scrollTop = $(this).scrollTop()
		var pixels = scrollTop / 70

		if(scrollTop < height)
		{
			$('section#contenedor_general').css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			})
		}
	}
}