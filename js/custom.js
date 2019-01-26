// jQuery Mask Plugin v1.14.15
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp={scope:{},findInternal:function(a,l,d){a instanceof String&&(a=String(a));for(var p=a.length,h=0;h<p;h++){var b=a[h];if(l.call(d,b,h,a))return{i:h,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,l,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[l]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,l,d,p){if(l){d=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var h=a[p];h in d||(d[h]={});d=d[h]}a=a[a.length-1];p=d[a];l=l(p);l!=p&&null!=l&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:l})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a,l,d){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(l||d)})(function(a){var l=function(b,e,f){var c={invalid:[],getCaret:function(){try{var a,r=0,g=b.get(0),e=document.selection,f=g.selectionStart;if(e&&-1===navigator.appVersion.indexOf("MSIE 10"))a=e.createRange(),a.moveStart("character",-c.val().length),r=a.text.length;else if(f||"0"===f)r=f;return r}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c,
g=b.get(0);g.setSelectionRange?g.setSelectionRange(a,a):(c=g.createTextRange(),c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select())}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){d===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){d=c.val()}).on("focus.mask",function(b){!0===f.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){f.clearIfNotMatch&&!h.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,f,n,d=0;d<e.length;d++)(b=m.translation[e.charAt(d)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,
(b=b.recursive)?(a.push(e.charAt(d)),n={digit:e.charAt(d),pattern:c}):a.push(f||b?c+"?":c)):a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");n&&(a=a.replace(new RegExp("("+n.digit+"(.*"+n.digit+")?)"),"($1)?").replace(new RegExp(n.digit,"g"),n.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(){var a=b.data("mask-previus-value")||"",e=c.getMasked(),g=c.getCaret();if(a!==e){var f=b.data("mask-previus-caret-pos")||0,e=e.length,d=a.length,m=a=0,h=0,l=0,k;for(k=g;k<e&&c.maskDigitPosMap[k];k++)m++;for(k=g-1;0<=k&&c.maskDigitPosMap[k];k--)a++;for(k=g-1;0<=k;k--)c.maskDigitPosMap[k]&&h++;for(k=f-1;0<=k;k--)c.maskDigitPosMapOld[k]&&l++;g>d?g=10*e:f>=g&&f!==d?c.maskDigitPosMapOld[g]||(f=g,g=g-(l-h)-a,c.maskDigitPosMap[g]&&(g=f)):g>f&&
(g=g+(h-l)+m)}return g},behaviour:function(f){f=f||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,m.byPassKeys)){var e=c.getMasked(),g=c.getCaret();setTimeout(function(){c.setCaret(c.calculateCaretPosition())},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(g);return c.callbacks(f)}},getMasked:function(a,b){var g=[],d=void 0===b?c.val():b+"",n=0,h=e.length,q=0,l=d.length,k=1,r="push",p=-1,t=0,y=[],v,z;f.reverse?(r="unshift",k=-1,v=0,n=h-1,q=l-1,z=function(){return-1<
n&&-1<q}):(v=h-1,z=function(){return n<h&&q<l});for(var A;z();){var x=e.charAt(n),w=d.charAt(q),u=m.translation[x];if(u)w.match(u.pattern)?(g[r](w),u.recursive&&(-1===p?p=n:n===v&&n!==p&&(n=p-k),v===p&&(n-=k)),n+=k):w===A?(t--,A=void 0):u.optional?(n+=k,q-=k):u.fallback?(g[r](u.fallback),n+=k,q-=k):c.invalid.push({p:q,v:w,e:u.pattern}),q+=k;else{if(!a)g[r](x);w===x?(y.push(q),q+=k):(A=x,y.push(q+t),t++);n+=k}}d=e.charAt(v);h!==l+1||m.translation[d]||g.push(d);g=g.join("");c.mapMaskdigitPositions(g,
y,l);return g},mapMaskdigitPositions:function(a,b,e){a=f.reverse?a.length-e:0;c.maskDigitPosMap={};for(e=0;e<b.length;e++)c.maskDigitPosMap[b[e]+a]=1},callbacks:function(a){var h=c.val(),g=h!==d,m=[h,a,b,f],q=function(a,b,c){"function"===typeof f[a]&&b&&f[a].apply(this,c)};q("onChange",!0===g,m);q("onKeyPress",!0===g,m);q("onComplete",h.length===e.length,m);q("onInvalid",0<c.invalid.length,[h,a,b,c.invalid,f])}};b=a(b);var m=this,d=c.val(),h;e="function"===typeof e?e(c.val(),void 0,b,f):e;m.mask=
e;m.options=f;m.remove=function(){var a=c.getCaret();m.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(m.getCleanVal());c.setCaret(a);return b};m.getCleanVal=function(){return c.getMasked(!0)};m.getMaskedVal=function(a){return c.getMasked(!1,a)};m.init=function(d){d=d||!1;f=f||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,f.translation);
m=a.extend(!0,{},m,f);h=c.getRegexMask();if(d)c.events(),c.val(c.getMasked());else{f.placeholder&&b.attr("placeholder",f.placeholder);b.data("mask")&&b.attr("autocomplete","off");d=0;for(var l=!0;d<e.length;d++){var g=m.translation[e.charAt(d)];if(g&&g.recursive){l=!1;break}}l&&b.attr("maxlength",e.length).data("mask-maxlength",!0);c.destroyEvents();c.events();d=c.getCaret();c.val(c.getMasked());c.setCaret(d)}};m.init(!b.is("input"))};a.maskWatchers={};var d=function(){var b=a(this),e={},f=b.attr("data-mask");
b.attr("data-mask-reverse")&&(e.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(p(b,f,e))return b.data("mask",new l(this,f,e))},p=function(b,e,f){f=f||{};var c=a(b).data("mask"),d=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof e&&(e=e(b)),"object"!==typeof c||d(c.options)!==d(f)||c.mask!==e}catch(t){}},h=function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,
"return;"),d="function"===typeof b[a]);return d};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,h=c.watchInterval,c=d.watchInputs||c.watchInputs,t=function(){if(p(this,b,d))return a(this).data("mask",new l(this,b,d))};a(this).each(t);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(t)},h));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)};h={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
h("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};h=a.jMaskGlobals=a.extend(!0,{},h,a.jMaskGlobals);h.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},h.watchInterval)},window.jQuery,window.Zepto);


;( function( $, window, document, undefined )
{
	$( '.inputfile' ).each( function(){
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();
			console.log($label);

		$input.on( 'change', function( e ){
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName ) {
				$(".docs__list").append(`
				<li class="docs__item js-remove">
					<div class="docs__all">
						<div>
							<span>${fileName}</span>
							<a class="docs__remove js-remove-button" href="javascript:void(0);">
							</a>
						</div>
					</div>
					<input type="hidden" name="techtask_docs[]">
				</li>`);
			}
			else
				$label.html( labelVal );
				console.log(fileName);
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
	});
})( jQuery, window, document );


$.validator.setDefaults({
    // debug: true,
    validClass: "valid",
    errorClass: "error",
    ignore: [],
    messages: {},
    errorPlacement: function(error, element) {},
    success: function() {},
    highlight: function(element) {
        if (
            $(element)
                .attr("class")
                .indexOf("valid")
        ) {
            $(element)
                .addClass("error");
        }
    },
    unhighlight: function(element) {
        if (
            $(element)
                .attr("class")
                .indexOf("valid")
        ) {
            $(element)
                .removeClass("error")
                .addClass("success");
        }
    }
});


// $(".js-file-button").on("click", function(){
// 	$(this).closest(".js-file").find("input[type='file']").trigger("click");
// });

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
		var link = "https://www.youtube.com/watch?v=8igoqDZlm6g";
		var myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
		var yt_id = link.match(myregexp)[1];
		var yt_img = "https://img.youtube.com/vi/" + yt_id + "/0.jpg";
		var yt_link = "https://www.youtube.com/embed/" + yt_id ;
		$('.img').attr("src", yt_img);
		$('.link').attr("href", yt_link);
		$("iframe").attr("src", yt_link);

		function readURL(input) {

			if (input.files && input.files[0]) {
				var reader = new FileReader();
		
				reader.onload = function (e) {
					$('#image').attr('src', e.target.result);
					$(".load-logo__title").css("display", "none");
					$(".js-file-button").text("");
				};
		
				reader.readAsDataURL(input.files[0]);
			}
		}
		function readURLl(input) {

			if (input.files && input.files[0]) {
				var reader = new FileReader();
		
				reader.onload = function (e) {
					$('#image-review').attr('src', e.target.result);
					$(".add-photo__icon").css("display", "none");
					$(".add-photo__text").text("");
				};
		
				reader.readAsDataURL(input.files[0]);
			}
		}
		function readURLIMG(input) {

			if (input.files && input.files[0]) {
				var reader = new FileReader();
		
				reader.onload = function (e) {
					$(".photos").append('<li class="photos__item js-remove"><a class="photos__image photo-item-img" href="'+e.target.result+'" style="background-image:url('+e.target.result+');" data-fancybox="new-gal-1"></a><a class="photos__remove js-remove-button" href="javascript:void(0);">Удалить</a></li>');
					// $(".photos__image")
					// $(".load-logo__title").css("display", "none");
					// $(".js-file-button").text("");
				};
				reader.readAsDataURL(input.files[0]);
			}
		}

		$(".js-remove-button").click(function() {
			alert('fdsafsda');
		});	
		
		$("body").on("click", ".js-remove-button", function() {
			$(this).closest(".js-remove").remove();
		});

		$(".object-img-upload").change(function() {
			readURLIMG(this);
		});
		// $("#object-img-upload2").change(function() {
		// 	readURLIMG(this);
		// });
		
		$("#imgInput").change(function(){
			readURL(this);
		});
		$("#imgrewiews").change(function(){
			readURLl(this);
		});


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


		$('.box-sort__item').each(function() {
			var it = $(this);
			it.find(".js-filter").click(function() {
				// $(".filter__drop").removeClass("visible");
				it.find(".filter__drop").toggleClass("visible");
			});
		});

		// file trigger
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
		


		//if($(".js-masked").length){
		//	$(".js-masked").mask("+7 (999) 999 - 99 - 99");
		//}
		// masked input

		// validation

		$(document).ready(function() {
			$('select').niceSelect();
		});
		
		$.validator.addMethod("regx", function(value, element, regexpr) {      
			return regexpr.test(value);
		}, "Please enter a valid pasword.");

		$('body').on('click','.object__edit', function(e)  {
			var fdsa = 1;
			var it = $(this).closest(".object-video");
			e.preventDefault();
			var link = it.find(".object__image").attr("href");
			// var img = it.find(".object__image").attr("style");
			var title = it.find(".object__title").text();
			var addres = it.find(".object__text").text();
			$(".open-edit-video-popup").trigger("click");
			$("#name_fieldx").val(title);
			$("#addres_fieldx").val(addres);
			$("#url_fieldx").val(link);

			var iter = +$(this).closest('.object').index()+1;
			$("#iter").val(iter);
		});

		

		///Объекты -----------------------------------  

		$('body').on('click','.object__edit-object', function(e)  {
			e.preventDefault();
			var it = $(this).closest(".object-img");
			// var link = it.find(".object__image").attr("href");
			// var img = it.find(".object__image").attr("style");
			var title = it.find(".object__title").text();
			var addres = it.find(".object__text").text();
			$(".open-edit-object-popup").trigger("click");
			$("#edit_objectName").val(title);
			$("#edit_objectAddres").val(addres);
			
			// $("#url_fieldx").val(link);

			var iter = +$(this).closest('.object-img').index()+1;
			$("#iterx").val(iter);
			$(".edit-object-form").find('.js-remove').remove();
			it.find(".object-append-link").each(function() {
				var valHref = $(this).attr("href");
				console.log(valHref);
				$(".edit-object-form").find('.photos').append('<li class="photos__item js-remove"><a class="photos__image photo-item-img" href="'+valHref+'" style="background-image:url('+valHref+');" data-fancybox="new-gal-1"></a><a class="photos__remove js-remove-button" href="javascript:void(0);">Удалить</a></li>')
			})
		});
		$(document).on('click', ".object__delete", function(e){
			e.preventDefault()
			$(this).closest(".object").remove()
		})

	
		///Объекты -----------------------------------
		
		

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

	
	if ($("#map").length >0) {
		ymaps.ready(init);
		function init () {
			var myMap = new ymaps.Map("map", {
				center: [55.810182, 37.533939],
				zoom: 16,
				controls: ['zoomControl']
			}),
			myPlacemark = new ymaps.Placemark([55.810182, 37.533939]);
			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
		
			$(".map-open").click(function(e) {
				e.preventDefault()
				$("#map").addClass("visible");
				var x = $(this).data('x');
				var y = $(this).data('y');
				console.log(x);
				// myMap.panTo([x, y], {duration: 2000});
				myMap.setCenter([x, y], 15);
			});
		}	
	}
	
})(jQuery);