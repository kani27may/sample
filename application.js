$(document).ready(function(){
	var listBlock = [];
	var matchedElem = [];
	var elemPos,listClone;
	// get original list
	listClone = $('#block').clone(); 
	//Store Default Positions Value
	$('#block li').each(function(){
		elemPos = $(this).position();
		listBlock.push(elemPos);
	});
	$('#block li').each(function(index){
		$(this).css({'position':'absolute','left':listBlock[index].left+'px','top':listBlock[index].top+'px'});
	});
	
	$('.menu li a').bind('click',function(event){
		matchedElem = [];
		var filter = $(this).attr('href'); 
		$('#block li.'+filter).each(function(index){
			matchedElem[index] = $(this);			
		});
		$.each(matchedElem, function(index, value) { 
		
			$(this).animate({ 
				left: listBlock[index].left+'px',
				top:listBlock[index].top+'px'
				},1500); 
		});
			$('#block li').css('position','absolute'); 
			$('#block li.'+filter).show();
			$('#block li').not('.'+filter).hide(); 		
			event.preventDefault();
		
	}); 
});



