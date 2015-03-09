var drawer = false;

function index(){
	$(".loading")
		.toggle(true);
	$(".loading").delay(2000).fadeToggle();
	$(".body").addClass('animated bounceInLeft');
}
function defis(){
	$(".loading")
		.toggle(true);
	$(".loading").delay(2000).fadeToggle();
	$(".body").addClass('animated bounceIn');
}
function instruction(){
	$(".loading")
		.toggle(true);
	$(".loading").delay(2000).fadeToggle();
	$(".body").addClass('animated bounceInRight');
}

function drawerPanel(){
	$('.menu').click(function(){
		$(".drawer-panel").toggle(true);
		$(".drawer-panel").removeClass('animated slideInLeft');
		$(".drawer-panel").removeClass('animated slideOutLeft');
		if(!document.drawer){
			$(".drawer-panel").addClass('animated slideInLeft');
			document.drawer = true;
		}
		else{
			$(".drawer-panel").addClass('animated slideOutLeft');
			document.drawer = false;
		}
	});
}

function bubble(){
	$('.chal').click(function(e){
		e.preventDefault();
		$(this).removeClass('rubberBand animated').addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('rubberBand animated');
		});
	});
}