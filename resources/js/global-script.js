$(document).ready(function(){
	
	$("#readMore,#read-more,#read").click(function(){
		
		var text = $(this).text();
		
		if(text =='Read More' ){
			$(".hidden-sec").css('display','block');
			//$(this).text('Read Less');
			$("#readMore,#read-more,#read").text('Read Less');
		}
		if(text ==='Read Less'){
			$(".hidden-sec").css('display','none');
			//$(this).text('Read More');
			$("#readMore,#read-more,#read").text('Read More');
		}
    });
  
	
});