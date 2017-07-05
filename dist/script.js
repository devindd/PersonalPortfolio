/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  // ANIMATE MENU\n  $(function () {\n    setTimeout(function () {\n      $('#pre_title').fadeTo(1000, 1);\n    }, 4000);\n\n    $(function () {\n      setTimeout(function () {\n        $('#load_screen').fadeOut('slow');\n      }, 6000);\n    });\n  });\n\n  // PHOTO Before and After\n\n  (function () {\n    var imageReveal,\n        bind = function bind(fn, me) {\n      return function () {\n        return fn.apply(me, arguments);\n      };\n    };\n\n    imageReveal = function () {\n      function imageReveal(el) {\n        this.el = el;\n        this.moveSplit = bind(this.moveSplit, this);\n        this.calculateSplit = bind(this.calculateSplit, this);\n        this.resetReveal = bind(this.resetReveal, this);\n        this.startReveal = bind(this.startReveal, this);\n        this._bindEvents = bind(this._bindEvents, this);\n        this.overSlide = this.el.find('.js-over-slide');\n        this.overImage = this.el.find('.js-over-image');\n        this.divider = this.el.find('.js-divider');\n        console.log(this.el);\n        this._bindEvents();\n        this.resetReveal();\n      }\n\n      imageReveal.prototype._bindEvents = function () {\n        this.el.on('mouseenter', this.startReveal);\n        return this.el.on('mouseleave', this.resetReveal);\n      };\n\n      imageReveal.prototype.startReveal = function () {\n        console.log('start reveal');\n        return this.el.on('mousemove', this.calculateSplit);\n      };\n\n      imageReveal.prototype.resetReveal = function () {\n        var elMiddle;\n        console.log('reset');\n        this.el.off('mousemove', this.calculateSplit);\n        elMiddle = this.el.width() / 2;\n        return this.moveSplit(elMiddle);\n      };\n\n      imageReveal.prototype.calculateSplit = function (e) {\n        var elOffset;\n        elOffset = this.el.offset().left;\n        return this.moveSplit(e.pageX - elOffset);\n      };\n\n      imageReveal.prototype.moveSplit = function (offset) {\n        if (offset < 0) {\n          offset = 0;\n        }\n        console.log(offset);\n        this.overSlide.css('transform', 'translateX(' + offset + 'px)');\n        this.overImage.css('transform', 'translateX(-' + offset + 'px)');\n        return this.divider.css('transform', 'translateX(' + offset + 'px)');\n      };\n\n      return imageReveal;\n    }();\n\n    window.imageReveal = imageReveal;\n\n    $(function () {\n      return new imageReveal($('.js-image-reveal'));\n    });\n  }).call(this);\n\n  //counter\n\n  $.fn.jQuerySimpleCounter = function (options) {\n    var settings = $.extend({\n      start: 0,\n      end: 100,\n      easing: 'swing',\n      duration: 400,\n      complete: ''\n    }, options);\n\n    var thisElement = $(this);\n\n    $({ count: settings.start }).animate({ count: settings.end }, {\n      duration: settings.duration,\n      easing: settings.easing,\n      step: function step() {\n        var mathCount = Math.ceil(this.count);\n        thisElement.text(mathCount);\n      },\n      complete: settings.complete\n    });\n  };\n\n  setTimeout(function () {\n    $('#number1').jQuerySimpleCounter({ end: 12, duration: 7000 });\n  }, 6500);\n  setTimeout(function () {\n    $('#number2').jQuerySimpleCounter({ end: 55, duration: 7000 });\n  }, 6500);\n  setTimeout(function () {\n    $('#number3').jQuerySimpleCounter({ end: 359, duration: 7000 });\n  }, 6500);\n  setTimeout(function () {\n    $('#number4').jQuerySimpleCounter({ end: 246, duration: 7000 });\n  }, 6500);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCIkIiwic2V0VGltZW91dCIsImZhZGVUbyIsImZhZGVPdXQiLCJpbWFnZVJldmVhbCIsImJpbmQiLCJmbiIsIm1lIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlbCIsIm1vdmVTcGxpdCIsImNhbGN1bGF0ZVNwbGl0IiwicmVzZXRSZXZlYWwiLCJzdGFydFJldmVhbCIsIl9iaW5kRXZlbnRzIiwib3ZlclNsaWRlIiwiZmluZCIsIm92ZXJJbWFnZSIsImRpdmlkZXIiLCJjb25zb2xlIiwibG9nIiwicHJvdG90eXBlIiwib24iLCJlbE1pZGRsZSIsIm9mZiIsIndpZHRoIiwiZSIsImVsT2Zmc2V0Iiwib2Zmc2V0IiwibGVmdCIsInBhZ2VYIiwiY3NzIiwid2luZG93IiwiY2FsbCIsImpRdWVyeVNpbXBsZUNvdW50ZXIiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJleHRlbmQiLCJzdGFydCIsImVuZCIsImVhc2luZyIsImR1cmF0aW9uIiwiY29tcGxldGUiLCJ0aGlzRWxlbWVudCIsImNvdW50IiwiYW5pbWF0ZSIsInN0ZXAiLCJtYXRoQ291bnQiLCJNYXRoIiwiY2VpbCIsInRleHQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXOztBQUV6RDtBQUNFQyxJQUFFLFlBQVc7QUFDWEMsZUFBVyxZQUFXO0FBQ3BCRCxRQUFFLFlBQUYsRUFBZ0JFLE1BQWhCLENBQXVCLElBQXZCLEVBQTZCLENBQTdCO0FBQ0QsS0FGRCxFQUVHLElBRkg7O0FBSUFGLE1BQUUsWUFBVztBQUNYQyxpQkFBVyxZQUFXO0FBQ3BCRCxVQUFFLGNBQUYsRUFBa0JHLE9BQWxCLENBQTBCLE1BQTFCO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRCxLQUpEO0FBS0QsR0FWRDs7QUFZRjs7QUFFQSxHQUFDLFlBQVc7QUFDVixR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QUFuQixFQUFsQztBQUE0RCxHQUFsRixFQUFvRixJQUFwRjtBQUNBekMsYUFBVyxZQUFVO0FBQUNELE1BQUUsVUFBRixFQUFjbUMsbUJBQWQsQ0FBa0MsRUFBQ0ssS0FBSyxFQUFOLEVBQVNFLFVBQVUsSUFBbkIsRUFBbEM7QUFBNEQsR0FBbEYsRUFBb0YsSUFBcEY7QUFDQXpDLGFBQVcsWUFBVTtBQUFDRCxNQUFFLFVBQUYsRUFBY21DLG1CQUFkLENBQWtDLEVBQUNLLEtBQUssR0FBTixFQUFVRSxVQUFVLElBQXBCLEVBQWxDO0FBQTZELEdBQW5GLEVBQXFGLElBQXJGO0FBQ0F6QyxhQUFXLFlBQVU7QUFBQ0QsTUFBRSxVQUFGLEVBQWNtQyxtQkFBZCxDQUFrQyxFQUFDSyxLQUFLLEdBQU4sRUFBVUUsVUFBVSxJQUFwQixFQUFsQztBQUE2RCxHQUFuRixFQUFxRixJQUFyRjtBQUdDLENBbkhEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcblxyXG4vLyBBTklNQVRFIE1FTlVcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgJCgnI3ByZV90aXRsZScpLmZhZGVUbygxMDAwLCAxKTtcclxuICAgIH0sIDQwMDApO1xyXG5cclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI2xvYWRfc2NyZWVuJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICB9LCA2MDAwKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuLy8gUEhPVE8gQmVmb3JlIGFuZCBBZnRlclxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBpbWFnZVJldmVhbCxcclxuICAgIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xyXG5cclxuICBpbWFnZVJldmVhbCA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIGltYWdlUmV2ZWFsKGVsKSB7XHJcbiAgICAgIHRoaXMuZWwgPSBlbDtcclxuICAgICAgdGhpcy5tb3ZlU3BsaXQgPSBiaW5kKHRoaXMubW92ZVNwbGl0LCB0aGlzKTtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVTcGxpdCA9IGJpbmQodGhpcy5jYWxjdWxhdGVTcGxpdCwgdGhpcyk7XHJcbiAgICAgIHRoaXMucmVzZXRSZXZlYWwgPSBiaW5kKHRoaXMucmVzZXRSZXZlYWwsIHRoaXMpO1xyXG4gICAgICB0aGlzLnN0YXJ0UmV2ZWFsID0gYmluZCh0aGlzLnN0YXJ0UmV2ZWFsLCB0aGlzKTtcclxuICAgICAgdGhpcy5fYmluZEV2ZW50cyA9IGJpbmQodGhpcy5fYmluZEV2ZW50cywgdGhpcyk7XHJcbiAgICAgIHRoaXMub3ZlclNsaWRlID0gdGhpcy5lbC5maW5kKCcuanMtb3Zlci1zbGlkZScpO1xyXG4gICAgICB0aGlzLm92ZXJJbWFnZSA9IHRoaXMuZWwuZmluZCgnLmpzLW92ZXItaW1hZ2UnKTtcclxuICAgICAgdGhpcy5kaXZpZGVyID0gdGhpcy5lbC5maW5kKCcuanMtZGl2aWRlcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsKTtcclxuICAgICAgdGhpcy5fYmluZEV2ZW50cygpO1xyXG4gICAgICB0aGlzLnJlc2V0UmV2ZWFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VSZXZlYWwucHJvdG90eXBlLl9iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZWwub24oJ21vdXNlZW50ZXInLCB0aGlzLnN0YXJ0UmV2ZWFsKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZWwub24oJ21vdXNlbGVhdmUnLCB0aGlzLnJlc2V0UmV2ZWFsKTtcclxuICAgIH07XHJcblxyXG4gICAgaW1hZ2VSZXZlYWwucHJvdG90eXBlLnN0YXJ0UmV2ZWFsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdGFydCByZXZlYWwnKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZWwub24oJ21vdXNlbW92ZScsIHRoaXMuY2FsY3VsYXRlU3BsaXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbWFnZVJldmVhbC5wcm90b3R5cGUucmVzZXRSZXZlYWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGVsTWlkZGxlO1xyXG4gICAgICBjb25zb2xlLmxvZygncmVzZXQnKTtcclxuICAgICAgdGhpcy5lbC5vZmYoJ21vdXNlbW92ZScsIHRoaXMuY2FsY3VsYXRlU3BsaXQpO1xyXG4gICAgICBlbE1pZGRsZSA9IHRoaXMuZWwud2lkdGgoKSAvIDI7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vdmVTcGxpdChlbE1pZGRsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGltYWdlUmV2ZWFsLnByb3RvdHlwZS5jYWxjdWxhdGVTcGxpdCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGVsT2Zmc2V0O1xyXG4gICAgICBlbE9mZnNldCA9IHRoaXMuZWwub2Zmc2V0KCkubGVmdDtcclxuICAgICAgcmV0dXJuIHRoaXMubW92ZVNwbGl0KGUucGFnZVggLSBlbE9mZnNldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGltYWdlUmV2ZWFsLnByb3RvdHlwZS5tb3ZlU3BsaXQgPSBmdW5jdGlvbihvZmZzZXQpIHtcclxuICAgICAgaWYgKG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKG9mZnNldCk7XHJcbiAgICAgIHRoaXMub3ZlclNsaWRlLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIG9mZnNldCArICdweCknKTtcclxuICAgICAgdGhpcy5vdmVySW1hZ2UuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgtJyArIG9mZnNldCArICdweCknKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlci5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyBvZmZzZXQgKyAncHgpJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBpbWFnZVJldmVhbDtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgd2luZG93LmltYWdlUmV2ZWFsID0gaW1hZ2VSZXZlYWw7XHJcblxyXG4gICQoZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IGltYWdlUmV2ZWFsKCQoJy5qcy1pbWFnZS1yZXZlYWwnKSk7XHJcbiAgfSk7XHJcblxyXG59KS5jYWxsKHRoaXMpO1xyXG5cclxuXHJcbi8vY291bnRlclxyXG5cclxuJC5mbi5qUXVlcnlTaW1wbGVDb3VudGVyID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblx0ICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcclxuXHQgICAgICAgIHN0YXJ0OiAgMCxcclxuXHQgICAgICAgIGVuZDogICAgMTAwLFxyXG5cdCAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxyXG5cdCAgICAgICAgZHVyYXRpb246IDQwMCxcclxuXHQgICAgICAgIGNvbXBsZXRlOiAnJ1xyXG5cdCAgICB9LCBvcHRpb25zICk7XHJcblxyXG5cdCAgICB2YXIgdGhpc0VsZW1lbnQgPSAkKHRoaXMpO1xyXG5cclxuXHQgICAgJCh7Y291bnQ6IHNldHRpbmdzLnN0YXJ0fSkuYW5pbWF0ZSh7Y291bnQ6IHNldHRpbmdzLmVuZH0sIHtcclxuXHRcdFx0ZHVyYXRpb246IHNldHRpbmdzLmR1cmF0aW9uLFxyXG5cdFx0XHRlYXNpbmc6IHNldHRpbmdzLmVhc2luZyxcclxuXHRcdFx0c3RlcDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIG1hdGhDb3VudCA9IE1hdGguY2VpbCh0aGlzLmNvdW50KTtcclxuXHRcdFx0XHR0aGlzRWxlbWVudC50ZXh0KG1hdGhDb3VudCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbXBsZXRlOiBzZXR0aW5ncy5jb21wbGV0ZVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblxyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JCgnI251bWJlcjEnKS5qUXVlcnlTaW1wbGVDb3VudGVyKHtlbmQ6IDEyLGR1cmF0aW9uOiA3MDAwfSl9LCA2NTAwKTtcclxuc2V0VGltZW91dChmdW5jdGlvbigpeyQoJyNudW1iZXIyJykualF1ZXJ5U2ltcGxlQ291bnRlcih7ZW5kOiA1NSxkdXJhdGlvbjogNzAwMH0pfSwgNjUwMCk7XHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKXskKCcjbnVtYmVyMycpLmpRdWVyeVNpbXBsZUNvdW50ZXIoe2VuZDogMzU5LGR1cmF0aW9uOiA3MDAwfSl9LCA2NTAwKTtcclxuc2V0VGltZW91dChmdW5jdGlvbigpeyQoJyNudW1iZXI0JykualF1ZXJ5U2ltcGxlQ291bnRlcih7ZW5kOiAyNDYsZHVyYXRpb246IDcwMDB9KX0sIDY1MDApO1xyXG5cclxuXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);