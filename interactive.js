$(document).ready(function(){
	$('#hambuger').click(function(){		
		$('#slider-nav').slideDown('slow');		
		$('#hambuger').fadeOut('fast', function(){
			$('#close').fadeIn('fast');
		});
		
	});
	
	$('#close').click(function(){		
		$('#slider-nav').slideUp('slow');	
		$('#close').fadeOut('fast', function(){		
			$('#hambuger').fadeIn('fast');			
		});
	});
});