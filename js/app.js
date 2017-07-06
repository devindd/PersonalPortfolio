document.addEventListener('DOMContentLoaded', function() {

  $(document).on('click', 'a', function(event){
  		var diff = 0;
  		if (window.innerWidth < 640) {
  			diff = 300;
  		} else {
  			diff = 0;
  		}
  		event.preventDefault();
  		var scrollto=$($(this).attr('href')).offset().top-diff;
  		$('body,html').animate({
  			scrollTop: scrollto
  		}, 800);
  	});
    
// ANIMATE MENU
  $(function() {
    setTimeout(function() {
      $('#pre_title').fadeTo(1000, 1);
    }, 4000);

    $(function() {
      setTimeout(function() {
        $('#load_screen').fadeOut('slow');
      }, 6000);
    });
  });

// PHOTO Before and After

(function() {
  var imageReveal,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  imageReveal = (function() {
    function imageReveal(el) {
      this.el = el;
      this.moveSplit = bind(this.moveSplit, this);
      this.calculateSplit = bind(this.calculateSplit, this);
      this.resetReveal = bind(this.resetReveal, this);
      this.startReveal = bind(this.startReveal, this);
      this._bindEvents = bind(this._bindEvents, this);
      this.overSlide = this.el.find('.js-over-slide');
      this.overImage = this.el.find('.js-over-image');
      this.divider = this.el.find('.js-divider');
      console.log(this.el);
      this._bindEvents();
      this.resetReveal();
    }

    imageReveal.prototype._bindEvents = function() {
      this.el.on('mouseenter', this.startReveal);
      return this.el.on('mouseleave', this.resetReveal);
    };

    imageReveal.prototype.startReveal = function() {
      console.log('start reveal');
      return this.el.on('mousemove', this.calculateSplit);
    };

    imageReveal.prototype.resetReveal = function() {
      var elMiddle;
      console.log('reset');
      this.el.off('mousemove', this.calculateSplit);
      elMiddle = this.el.width() / 2;
      return this.moveSplit(elMiddle);
    };

    imageReveal.prototype.calculateSplit = function(e) {
      var elOffset;
      elOffset = this.el.offset().left;
      return this.moveSplit(e.pageX - elOffset);
    };

    imageReveal.prototype.moveSplit = function(offset) {
      if (offset < 0) {
        offset = 0;
      }
      console.log(offset);
      this.overSlide.css('transform', 'translateX(' + offset + 'px)');
      this.overImage.css('transform', 'translateX(-' + offset + 'px)');
      return this.divider.css('transform', 'translateX(' + offset + 'px)');
    };

    return imageReveal;

  })();

  window.imageReveal = imageReveal;

  $(function() {
    return new imageReveal($('.js-image-reveal'));
  });

}).call(this);


//counter

$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};

setTimeout(function(){$('#number1').jQuerySimpleCounter({end: 12,duration: 7000})}, 6500);
setTimeout(function(){$('#number2').jQuerySimpleCounter({end: 55,duration: 7000})}, 6500);
setTimeout(function(){$('#number3').jQuerySimpleCounter({end: 359,duration: 7000})}, 6500);
setTimeout(function(){$('#number4').jQuerySimpleCounter({end: 246,duration: 7000})}, 6500);

// Hover in portfolio

$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

// Portfolio choosing category
  //var allImg = $(".photo").find("img");
  var allPics = $(".photo");
	var logotypesPics = $(".logotypes");
	var photomaniPics = $(".photomanipulations");
	var otherPics = $(".othergraphics");
  var websitesPics = $(".websites");

	var allBtn = $(".allBtn");
	var logotypesBtn = $(".logotypesBtn");
	var photomanipulationsBtn = $(".photomanipulationsBtn");
	var othergraphicsBtn = $(".othergraphicsBtn");
	var websitesBtn = $(".websitesBtn")

  var fullScreen = $(".fullScreen");
	var closeBtn = $(".fullScreenClose")

	logotypesBtn.on("click", function(){
		allPics.hide();
		logotypesPics.fadeIn();
    websitesBtn.css("color", "")
    logotypesBtn.css("color", "#FDCD3B")
    photomanipulationsBtn.css("color", "")
    othergraphicsBtn.css("color", "")
    allBtn.css("color", "")
	})

	photomanipulationsBtn.on("click", function(){
		allPics.hide();
		photomaniPics.fadeIn();
    websitesBtn.css("color", "")
    logotypesBtn.css("color", "")
    photomanipulationsBtn.css("color", "#FDCD3B")
    othergraphicsBtn.css("color", "")
    allBtn.css("color", "")
	})

	othergraphicsBtn.on("click", function(){
		allPics.hide();
		otherPics.fadeIn();
    websitesBtn.css("color", "")
    logotypesBtn.css("color", "")
    photomanipulationsBtn.css("color", "")
    othergraphicsBtn.css("color", "#FDCD3B")
    allBtn.css("color", "")
	})

	websitesBtn.on("click", function(){
    allPics.hide();
		websitesPics.fadeIn();
    websitesBtn.css("color", "#FDCD3B")
    logotypesBtn.css("color", "")
    photomanipulationsBtn.css("color", "")
    othergraphicsBtn.css("color", "")
    allBtn.css("color", "")
	})

  allBtn.on("click", function(){
		allPics.fadeIn();
    websitesBtn.css("color", "")
    logotypesBtn.css("color", "")
    photomanipulationsBtn.css("color", "")
    othergraphicsBtn.css("color", "")
    allBtn.css("color", "#FDCD3B")
	})

  allPics.on("click", function(event){
		var toAppend = $(event.target.parentElement.querySelector("img")).clone();
		fullScreen.find(".picContainer").append(toAppend);
		fullScreen.fadeIn();
		fullScreen.removeClass("hidden");
	})

	closeBtn.on("click", function(){
		var child = fullScreen.find(".picContainer");
		child.empty();
		fullScreen.fadeOut();
		fullScreen.addClass("hidden");
	})


});
