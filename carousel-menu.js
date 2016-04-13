/** jQuery CarouselMenu 1.0
  * @version: 1.00
  * @author: Pablo E. Fernández (islavisual@gmail.com).
  * Copyright 2016 Islavisual. 
  * Licensed under MIT (https://github.com/islavisual/jQueryCarouselMenu/blob/master/LICENSE). 
  * Last update: 13/04/2016
  **/
$.fn.carouselMenu = function(options) {
	var settings = $.extend({
		duration: 500,
		height: 'auto',
		hoverEffect: false,
		nextClass: "button right",
		nextId: "carousel-menu-next",
		prevClass: "button left",
		prevId: "carousel-menu-prev"
	}, options );
	
	function assign(){
		if($(window).width()<768){
			$('.carousel-menu-button').hide();
			$('> div', target).removeClass("items").find("ul").removeClass('visible');
			target.css({height: "", 'min-height': "" });
		}else{
			$('.carousel-menu-button').show();
			target.find("ul:first").addClass('visible').parent().addClass("items");
			target.css({height: settings.height, 'min-height': settings.height });
		}
		var items = $(".navbar-collapse > ul", target);
		for (var x = 0; x < items.length; ++x){
			var item = $(items[x]);
			item.css("left",$(window).width()*x);
		}
	}

	var carouselIn = "stop";
	var target = $(this);
	target.append('<a id="'+settings.prevId+'" class="'+settings.prevClass+' carousel-menu-button"><span class="icon"></span></a><a id="'+settings.nextId+'" class="'+settings.nextClass+' carousel-menu-button"><span class="icon"></span></a>');
	assign();
	
	var items = $('div > ul', target);
	for(var x = 0; x < items.length; ++x){
		var item = $(items[x]); item.css("left", $(window).width()*x); 
	}
	
	$('#'+settings.nextId).on("click", function(e){
		e.preventDefault();

		if(carouselIn == "stop"){
			carouselIn = "progress";
			$('div > ul:not(.visible)', target).css("left", $(window).width()+"px");
			var idx = $('ul.visible', target).removeClass('visible').index()+1;
			$('div > ul:nth-child('+idx+')', target).animate({left: (-1*$(window).width())+"px"}, settings.duration);
			idx++; 
			
			if(idx > $('div > ul', target).length) idx = 1;

			$('div > ul:nth-child('+idx+')', target).animate({left: "0px"}, settings.duration, function(){
				$(this).addClass("visible");
				carouselIn = "stop";
			});
		}
	});
	
	$('> ul li > a', $('#'+settings.prevId).prev()).on("click", function(){
		if($(this).parents(".items").length != 0){
			$(this).next().css({left: $(this).offset().left+"px", position: 'fixed', top: '50px', width: 'auto'});
		} else {
			$(this).next().css({left: '', position: '', top: '', width: ''})
		}
	});
	 
	$('#'+settings.prevId).on("click", function(e){
		e.preventDefault();

		if(carouselIn == "stop"){
			carouselIn = "progress";
			$('div > ul:not(.visible)', target).css("left", (-1*$(window).width())+"px");
			var idx = $('ul.visible', target).removeClass('visible').index()+1;
			$('div > ul:nth-child('+idx+')', target).animate({left: ($(window).width())+"px"}, settings.duration);

			idx++; 
			
			if(idx > $('div > ul', target).length) idx = 1;

			$('div > ul:nth-child('+idx+')', target).animate({left: "0px"}, settings.duration, function(){ 
				$(this).addClass("visible");
				carouselIn = "stop";
			});
		}
	});

	if(settings.hoverEffect){
		$('ul.nav li.dropdown').hover(function() {
			if($('.navbar-toggle').css("display") != "none") return true;
			$('> a', $(this)).click();
			$(this).find('.dropdown-menu').stop(true, true).show();
		}, function() {
			if($('.navbar-toggle').css("display") != "none") return true;
			$(this).find('.dropdown-menu').stop(true, true).css("display", '');
		});
	}

	$(window).resize(function(){ assign(); });
};
