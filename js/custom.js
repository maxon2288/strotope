(function($){
	// viewport size
	function viewport(){
		var a = window,
		b = "inner";
		return "innerWidth" in window || (b = "client", a = document.documentElement || document.body), {width: a[b + "Width"], height: a[b + "Height"]};
	}
	// viewport size

	// footer
	function footerSize(){
		var footLen = $(".footer").length;
		if(footLen < 1){
			$(".main-wrap").css("padding-bottom", "0");
		}
		else{
			var footH = $(".footer").height();
			$(".main-wrap").css("padding-bottom", footH + "px");
		}
	}
	// footer

	/*----------begin doc ready----------*/
	$(document).ready(function(){

		// ie fix
		if(/MSIE 10/i.test(navigator.userAgent)){
			$("html").addClass("ie");
		}
		if(/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)){
			$("html").addClass("ie");
		}
		if(/Edge\/\d./i.test(navigator.userAgent)){
			$("html").addClass("ie");
		}
		// ie fix

		// ios fix
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('html').addClass('ios');
		}
		else{
			$('html').addClass('desktop');
		}
		// ios fix

		// mozilla fix
		if(navigator.userAgent.toLowerCase().indexOf("firefox") > -1){
			$("html").addClass("mozilla");
		}
		// mozilla fix

		// mac fix
		if(navigator.platform.toUpperCase().indexOf('MAC')>=0){$("body").addClass("mac");}

		if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			$('html').addClass('safari-mac');
		}
		// mac fix

		// placeholder
		$("input, textarea").each(function(){
			var a = $(this).attr("placeholder");
			$(this).focus(function(){$(this).attr("placeholder", "");});
			$(this).focusout(function(){$(this).attr("placeholder", a);});
		});
		// placeholder

		// close popup
		$(".js-close-popup").on("click", function(){
			$(".fancybox-button--close").trigger("click");
		});



		// close popup


		// header nav
		$(".desktop.html-1 .js-menu-link").live("mouseover", function(){
			if(!$(this).hasClass("active")){
				$(this).addClass("active").closest(".js-menu-item").find(".js-menu-hide").stop().slideDown(200);
			}
		})
		$(".desktop.html-1 .js-menu-item").live("mouseleave", function(){
			$(".js-menu-hide").stop().slideUp(200, function(){
				$(".js-menu-link").removeClass("active");
			});
		})
		$(".ios.html-1 .js-menu-link").live("click", function(e){
			e.preventDefault();
			if(!$(this).hasClass("active")){
				$(this).addClass("active").closest(".js-menu-item").find(".js-menu-hide").stop().slideDown(200);
			}
			else{
				$(".js-menu-hide").stop().slideUp(200, function(){
					$(".js-menu-link").removeClass("active");
				});
			}
		})
		$(".html-2 .js-menu-link").live("click", function(e){
			e.preventDefault();
			if(!$(this).hasClass("active")){
				$(this).addClass("active").closest(".js-menu-item").find(".js-menu-hide").stop().slideDown(200);
			}
			else{
				$(this).removeClass("active").closest(".js-menu-item").find(".js-menu-hide").stop().slideUp(200);
			}
		})
		// header nav

		// mobile nav
		$(".js-nav-open").on("click", function(){
			$("html").addClass("hidden");
			$(".header").addClass("active");
			$(".js-nav-mask").stop().fadeIn(0);
		});
		$(".js-nav-mask, .js-nav-close").on("click", function(){
			$("html").removeClass("hidden");
			$(".header").removeClass("active");
			$(".js-nav-mask").stop().fadeOut(300);
		});
		// mobile nav

		// js slide
		$(".js-slide-button").on("click", function(){
			if($(this).closest(".js-slide-item").hasClass("active")){
				$(this).closest(".js-slide-item").removeClass("active").find(".js-slide-hide").stop().slideUp(300);
			}
			else{
				$(this).closest(".js-slide-item").addClass("active").find(".js-slide-hide").stop().slideDown(300);
			}
		});
		// js slide

		// formstyler
		if($('input[type=checkbox].js-formstyler').length){
			$('input[type=checkbox].js-formstyler').styler();
		}
		if($('select.js-formstyler').length){
			$('select.js-formstyler').styler({
				onSelectClosed:function(){
					if($(this).find("option[data-hidden]:selected").length==0){
						$(this).addClass("hide-selected");
					}
				}
			});
		}
		// formstyler

		// file trigger
		$(".js-file-button").on("click", function(){
			$(this).closest(".js-file").find("input[type=file]").trigger("click");
		});
		// file trigger

		// remove item
		$(".js-remove-button").on("click", function(){
			$(this).closest(".js-remove").fadeOut(300, function(){
				$(this).remove();
			});
		});
		// remove item

		// tabs
		$(".js-tabs-link").on("click",function(e){
			e.preventDefault();
			if($(this).closest(".js-tabs-item.active").length<1){
				$(this).closest(".js-tabs-item").addClass("active").siblings(".js-tabs-item").removeClass("active");
				var curHref = $(this).attr("href");
				$(curHref).addClass("active").siblings(".js-tabs-content").removeClass("active");
			}
		});

		$(".js-login-1").live("click",function(e){
			$(".js-tab-1").trigger("click");
		});

		$(".js-login-2").live("click",function(e){
			$(".js-tab-2").trigger("click");
		});
		// tabs

		// load more
		$(".js-load-button").live("click",function(){
			$(this).closest(".js-load").find(".js-load-item").addClass("visible");
		});
		// load more

		// masked input
		if ($(".js-masked").lenght) {
			$(".js-masked").inputmask({"mask": "+7 (999) 999 - 99 - 99"});
		};
		


		//if($(".js-masked").length){
		//	$(".js-masked").mask("+7 (999) 999 - 99 - 99");
		//}
		// masked input

		// validation
		$(".js-validation-complaint").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					email:{
						required:true,
						email:true
					}
				},
				messages: {
					required: true,
					email:"неправильный email"
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});
		$(".js-validation-1").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					email:{
						required:true,
						email:true
					}
				},
				messages: {
					required: true,
					email:"неправильный email"
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});

		
		console.log('ffsfs');

		$(".js-validation-2").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					/*
					phone:{
						required:true,
						minlength:10,
						maxlength:10,
						phoneUS:true
					},
					*/
					email:{
						required:true,
						email:true
					},
					name_feedback:{
						required:true,
					},
					company_feedback:{
						required:true,
					},
					comment_feedback:{
						required:true,
					},
				},
				messages: {
					email:"неправильный email",
					phone:"неправильный номер"
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});

		$(".js-validation-3").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					/*
					phone:{
						required:true,
						minlength:10,
						maxlength:10,
						phoneUS:true
					},
					*/
					email_tz:{
						required:true,
						email:true
					},
					name_tz:{
						required:true,
					},
					company_tz:{
						required:true,
					},
					file_tz:{
						required:true,
					},
				},
				messages: {
					email:"неправильный email",
					phone:"неправильный номер"
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});

		$(".js-validation-4").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					email:{
						required:true,
						email:true
					}
				},
				messages: {
					email:"неправильный email"
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});

		$(".js-validation-5").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					phone:{
						required:true,
					},
					compamy_name:{
						required:true,
					},
					desc: {
						required: true,
						maxlength: 150,
					},
					fulldesc: {
						required: true,
						maxlength: 150,
					},
					year:{
						digits: true,
					},
					count:{
						digits: true,
						required: true,
					},
				},
				messages: {
					// phone:"неправильный номер",
					url_site: "неправильный url caйта",
					url_inst: "неправильный url Instagram",
					url_vk: "неправильный url Вконтакте",
					url_fb: "неправильный url Facebook",
					url_tw: "неправильный url Twitter",
	
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});

		$(".js-validation-6").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					/*
					phone:{
						required:true,
						minlength:10,
						maxlength:10,
						phoneUS:true
					},
					*/
					email:{
						required:true,
						email:true
					},
					name:{
						required:true,
					},
					service:{
						required:true,
					},
					photo:{
						required:true,
					},
					review:{
						required:true,
					},
				},
				messages: {
					email:"неправильный email",
					phone:"неправильный номер",
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});

		$(".js-validation-7").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					/*
					phone:{
						required:true,
						minlength:10,
						maxlength:10,
						phoneUS:true
					},
					*/
					email:{
						required:true,
						email:true
					}
				},
				messages: {
					email:"неправильный email",
					phone:"неправильный номер"
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});

		$(".js-validation-5").each(function() {
			var it = $(this);
			it.validate({
				rules:{
					phone:{
						required:true,
					},
					compamy_name:{
						required:true,
					},
					desc: {
						required: true,
						maxlength: 150,
					},
					fulldesc: {
						required: true,
						maxlength: 150,
					},
					year:{
						digits: true,
					},
					count:{
						digits: true,
						required: true,
					},
				},
				messages: {
					// phone:"неправильный номер",
					url_site: "неправильный url caйта",
					url_inst: "неправильный url Instagram",
					url_vk: "неправильный url Вконтакте",
					url_fb: "неправильный url Facebook",
					url_tw: "неправильный url Twitter",
	
				},
				errorPlacement: function (error, element) {
				},
				submitHandler: function() {
					console.log('fdsafsad');
					it.find("input, textarea").val('');
				},  
			});

		});

		// validation
	});
/*----------doc ready eof----------*/

/*----------begin win load----------*/
$(window).load(function(){

		// body fix
		$("body").removeClass("loaded");
		// body fix

	});
/*----------win load eof----------*/

/*----------begin bind load & resize & orientation eof----------*/
var handler1 = function(){
		// footer fix
		footerSize();

		setTimeout(function(){
			footerSize();
		}, 1);

		setTimeout(function(){
			footerSize();
		}, 500);
		// footer fix

	  	// doc type
	  	if(viewport().width>767){
	  		$("html").addClass("html-1").removeClass("html-2");
	  	}
	  	if(viewport().width<=767){
	  		$("html").addClass("html-2").removeClass("html-1");
	  	}
	  	// doc type
	  };
	  $(window).bind('orientationchange', handler1);
	  $(window).bind('resize', handler1);
	  $(window).bind('load', handler1);
	  /*----------bind load & resize & orientation eof----------*/

	  /*----------begin touch----------*/
	  $(document).on('touchstart', function(){documentClick = true;});
	  $(document).on('touchmove', function(){documentClick = false;});
	  $(document).on('click touchend', function(event){
	  	if(event.type == "click") documentClick = true;
	  	if(documentClick){
	  		var target = $(event.target);
	  		if(target.is('.js-menu-item')||target.is('.js-menu-item *')){return}
	  			else{
	  				$(".html-1 .js-menu-hide").stop().slideUp(200, function(){
	  					$(".js-menu-link").removeClass("active");
	  				});
	  			}
	  		}
	  	});
	  /*----------touch eof----------*/

	// esc click
	$(document).keyup(function(e){
		if(e.keyCode==27){
			$("html").removeClass("hidden");
			$(".header").removeClass("active");
			$(".js-nav-mask").stop().fadeOut(300);
		}
	});
	// esc click
})(jQuery);