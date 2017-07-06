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
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  // ANIMATE MENU\n  $(function () {\n    setTimeout(function () {\n      $('#pre_title').fadeTo(1000, 1);\n    }, 4000);\n\n    $(function () {\n      setTimeout(function () {\n        $('#load_screen').fadeOut('slow');\n      }, 6000);\n    });\n  });\n\n  // PHOTO Before and After\n\n  (function () {\n    var imageReveal,\n        bind = function bind(fn, me) {\n      return function () {\n        return fn.apply(me, arguments);\n      };\n    };\n\n    imageReveal = function () {\n      function imageReveal(el) {\n        this.el = el;\n        this.moveSplit = bind(this.moveSplit, this);\n        this.calculateSplit = bind(this.calculateSplit, this);\n        this.resetReveal = bind(this.resetReveal, this);\n        this.startReveal = bind(this.startReveal, this);\n        this._bindEvents = bind(this._bindEvents, this);\n        this.overSlide = this.el.find('.js-over-slide');\n        this.overImage = this.el.find('.js-over-image');\n        this.divider = this.el.find('.js-divider');\n        console.log(this.el);\n        this._bindEvents();\n        this.resetReveal();\n      }\n\n      imageReveal.prototype._bindEvents = function () {\n        this.el.on('mouseenter', this.startReveal);\n        return this.el.on('mouseleave', this.resetReveal);\n      };\n\n      imageReveal.prototype.startReveal = function () {\n        console.log('start reveal');\n        return this.el.on('mousemove', this.calculateSplit);\n      };\n\n      imageReveal.prototype.resetReveal = function () {\n        var elMiddle;\n        console.log('reset');\n        this.el.off('mousemove', this.calculateSplit);\n        elMiddle = this.el.width() / 2;\n        return this.moveSplit(elMiddle);\n      };\n\n      imageReveal.prototype.calculateSplit = function (e) {\n        var elOffset;\n        elOffset = this.el.offset().left;\n        return this.moveSplit(e.pageX - elOffset);\n      };\n\n      imageReveal.prototype.moveSplit = function (offset) {\n        if (offset < 0) {\n          offset = 0;\n        }\n        console.log(offset);\n        this.overSlide.css('transform', 'translateX(' + offset + 'px)');\n        this.overImage.css('transform', 'translateX(-' + offset + 'px)');\n        return this.divider.css('transform', 'translateX(' + offset + 'px)');\n      };\n\n      return imageReveal;\n    }();\n\n    window.imageReveal = imageReveal;\n\n    $(function () {\n      return new imageReveal($('.js-image-reveal'));\n    });\n  }).call(this);\n\n  //counter\n\n  $.fn.jQuerySimpleCounter = function (options) {\n    var settings = $.extend({\n      start: 0,\n      end: 100,\n      easing: 'swing',\n      duration: 400,\n      complete: ''\n    }, options);\n\n    var thisElement = $(this);\n\n    $({ count: settings.start }).animate({ count: settings.end }, {\n      duration: settings.duration,\n      easing: settings.easing,\n      step: function step() {\n        var mathCount = Math.ceil(this.count);\n        thisElement.text(mathCount);\n      },\n      complete: settings.complete\n    });\n  };\n\n  setTimeout(function () {\n    $('#number1').jQuerySimpleCounter({ end: 12, duration: 7000 });\n  }, 6500);\n  setTimeout(function () {\n    $('#number2').jQuerySimpleCounter({ end: 55, duration: 7000 });\n  }, 6500);\n  setTimeout(function () {\n    $('#number3').jQuerySimpleCounter({ end: 359, duration: 7000 });\n  }, 6500);\n  setTimeout(function () {\n    $('#number4').jQuerySimpleCounter({ end: 246, duration: 7000 });\n  }, 6500);\n\n  // Hover in portfolio\n\n  $(\".hover\").mouseleave(function () {\n    $(this).removeClass(\"hover\");\n  });\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCIkIiwic2V0VGltZW91dCIsImZhZGVUbyIsImZhZGVPdXQiLCJpbWFnZVJldmVhbCIsImJpbmQiLCJmbiIsIm1lIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlbCIsIm1vdmVTcGxpdCIsImNhbGN1bGF0ZVNwbGl0IiwicmVzZXRSZXZlYWwiLCJzdGFydFJldmVhbCIsIl9iaW5kRXZlbnRzIiwib3ZlclNsaWRlIiwiZmluZCIsIm92ZXJJbWFnZSIsImRpdmlkZXIiLCJjb25zb2xlIiwibG9nIiwicHJvdG90eXBlIiwib24iLCJlbE1pZGRsZSIsIm9mZiIsIndpZHRoIiwiZSIsImVsT2Zmc2V0Iiwib2Zmc2V0IiwibGVmdCIsInBhZ2VYIiwiY3NzIiwid2luZG93IiwiY2FsbCIsImpRdWVyeVNpbXBsZUNvdW50ZXIiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJleHRlbmQiLCJzdGFydCIsImVuZCIsImVhc2luZyIsImR1cmF0aW9uIiwiY29tcGxldGUiLCJ0aGlzRWxlbWVudCIsImNvdW50IiwiYW5pbWF0ZSIsInN0ZXAiLCJtYXRoQ291bnQiLCJNYXRoIiwiY2VpbCIsInRleHQiLCJtb3VzZWxlYXZlIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXOztBQUV6RDtBQUNFQyxJQUFFLFlBQVc7QUFDWEMsZUFBVyxZQUFXO0FBQ3BCRCxRQUFFLFlBQUYsRUFBZ0JFLE1BQWhCLENBQXVCLElBQXZCLEVBQTZCLENBQTdCO0FBQ0QsS0FGRCxFQUVHLElBRkg7O0FBSUFGLE1BQUUsWUFBVztBQUNYQyxpQkFBVyxZQUFXO0FBQ3BCRCxVQUFFLGNBQUYsRUFBa0JHLE9BQWxCLENBQTBCLE1BQTFCO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRCxLQUpEO0FBS0QsR0FWRDs7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QUFDSyxLQUFLLEVBQU4sRUFBU0UsVUFBVSxJQUFuQixFQUFsQztBQUE0RCxHQUFsRixFQUFvRixJQUFwRjtBQUNBekMsYUFBVyxZQUFVO0FBQUNELE1BQUUsVUFBRixFQUFjbUMsbUJBQWQsQ0FBa0MsRUFBQ0ssS0FBSyxFQUFOLEVBQVNFLFVBQVUsSUFBbkIsRUFBbEM7QUFBNEQsR0FBbEYsRUFBb0YsSUFBcEY7QUFDQXpDLGFBQVcsWUFBVTtBQUFDRCxNQUFFLFVBQUYsRUFBY21DLG1CQUFkLENBQWtDLEVBQUNLLEtBQUssR0FBTixFQUFVRSxVQUFVLElBQXBCLEVBQWxDO0FBQTZELEdBQW5GLEVBQXFGLElBQXJGO0FBQ0F6QyxhQUFXLFlBQVU7QUFBQ0QsTUFBRSxVQUFGLEVBQWNtQyxtQkFBZCxDQUFrQyxFQUFDSyxLQUFLLEdBQU4sRUFBVUUsVUFBVSxJQUFwQixFQUFsQztBQUE2RCxHQUFuRixFQUFxRixJQUFyRjs7QUFFQTs7QUFFQTFDLElBQUUsUUFBRixFQUFZb0QsVUFBWixDQUNFLFlBQVc7QUFDVHBELE1BQUUsSUFBRixFQUFRcUQsV0FBUixDQUFvQixPQUFwQjtBQUNELEdBSEg7QUFPQyxDQTNIRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuLy8gQU5JTUFURSBNRU5VXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJyNwcmVfdGl0bGUnKS5mYWRlVG8oMTAwMCwgMSk7XHJcbiAgICB9LCA0MDAwKTtcclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNsb2FkX3NjcmVlbicpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgfSwgNjAwMCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbi8vIFBIT1RPIEJlZm9yZSBhbmQgQWZ0ZXJcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICB2YXIgaW1hZ2VSZXZlYWwsXHJcbiAgICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcclxuXHJcbiAgaW1hZ2VSZXZlYWwgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBpbWFnZVJldmVhbChlbCkge1xyXG4gICAgICB0aGlzLmVsID0gZWw7XHJcbiAgICAgIHRoaXMubW92ZVNwbGl0ID0gYmluZCh0aGlzLm1vdmVTcGxpdCwgdGhpcyk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU3BsaXQgPSBiaW5kKHRoaXMuY2FsY3VsYXRlU3BsaXQsIHRoaXMpO1xyXG4gICAgICB0aGlzLnJlc2V0UmV2ZWFsID0gYmluZCh0aGlzLnJlc2V0UmV2ZWFsLCB0aGlzKTtcclxuICAgICAgdGhpcy5zdGFydFJldmVhbCA9IGJpbmQodGhpcy5zdGFydFJldmVhbCwgdGhpcyk7XHJcbiAgICAgIHRoaXMuX2JpbmRFdmVudHMgPSBiaW5kKHRoaXMuX2JpbmRFdmVudHMsIHRoaXMpO1xyXG4gICAgICB0aGlzLm92ZXJTbGlkZSA9IHRoaXMuZWwuZmluZCgnLmpzLW92ZXItc2xpZGUnKTtcclxuICAgICAgdGhpcy5vdmVySW1hZ2UgPSB0aGlzLmVsLmZpbmQoJy5qcy1vdmVyLWltYWdlJyk7XHJcbiAgICAgIHRoaXMuZGl2aWRlciA9IHRoaXMuZWwuZmluZCgnLmpzLWRpdmlkZXInKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5lbCk7XHJcbiAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcclxuICAgICAgdGhpcy5yZXNldFJldmVhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlUmV2ZWFsLnByb3RvdHlwZS5fYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmVsLm9uKCdtb3VzZWVudGVyJywgdGhpcy5zdGFydFJldmVhbCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmVsLm9uKCdtb3VzZWxlYXZlJywgdGhpcy5yZXNldFJldmVhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGltYWdlUmV2ZWFsLnByb3RvdHlwZS5zdGFydFJldmVhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3RhcnQgcmV2ZWFsJyk7XHJcbiAgICAgIHJldHVybiB0aGlzLmVsLm9uKCdtb3VzZW1vdmUnLCB0aGlzLmNhbGN1bGF0ZVNwbGl0KTtcclxuICAgIH07XHJcblxyXG4gICAgaW1hZ2VSZXZlYWwucHJvdG90eXBlLnJlc2V0UmV2ZWFsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBlbE1pZGRsZTtcclxuICAgICAgY29uc29sZS5sb2coJ3Jlc2V0Jyk7XHJcbiAgICAgIHRoaXMuZWwub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLmNhbGN1bGF0ZVNwbGl0KTtcclxuICAgICAgZWxNaWRkbGUgPSB0aGlzLmVsLndpZHRoKCkgLyAyO1xyXG4gICAgICByZXR1cm4gdGhpcy5tb3ZlU3BsaXQoZWxNaWRkbGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbWFnZVJldmVhbC5wcm90b3R5cGUuY2FsY3VsYXRlU3BsaXQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBlbE9mZnNldDtcclxuICAgICAgZWxPZmZzZXQgPSB0aGlzLmVsLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vdmVTcGxpdChlLnBhZ2VYIC0gZWxPZmZzZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbWFnZVJldmVhbC5wcm90b3R5cGUubW92ZVNwbGl0ID0gZnVuY3Rpb24ob2Zmc2V0KSB7XHJcbiAgICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgb2Zmc2V0ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhvZmZzZXQpO1xyXG4gICAgICB0aGlzLm92ZXJTbGlkZS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyBvZmZzZXQgKyAncHgpJyk7XHJcbiAgICAgIHRoaXMub3ZlckltYWdlLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLScgKyBvZmZzZXQgKyAncHgpJyk7XHJcbiAgICAgIHJldHVybiB0aGlzLmRpdmlkZXIuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgb2Zmc2V0ICsgJ3B4KScpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaW1hZ2VSZXZlYWw7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIHdpbmRvdy5pbWFnZVJldmVhbCA9IGltYWdlUmV2ZWFsO1xyXG5cclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBpbWFnZVJldmVhbCgkKCcuanMtaW1hZ2UtcmV2ZWFsJykpO1xyXG4gIH0pO1xyXG5cclxufSkuY2FsbCh0aGlzKTtcclxuXHJcblxyXG4vL2NvdW50ZXJcclxuXHJcbiQuZm4ualF1ZXJ5U2ltcGxlQ291bnRlciA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cdCAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XHJcblx0ICAgICAgICBzdGFydDogIDAsXHJcblx0ICAgICAgICBlbmQ6ICAgIDEwMCxcclxuXHQgICAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuXHQgICAgICAgIGR1cmF0aW9uOiA0MDAsXHJcblx0ICAgICAgICBjb21wbGV0ZTogJydcclxuXHQgICAgfSwgb3B0aW9ucyApO1xyXG5cclxuXHQgICAgdmFyIHRoaXNFbGVtZW50ID0gJCh0aGlzKTtcclxuXHJcblx0ICAgICQoe2NvdW50OiBzZXR0aW5ncy5zdGFydH0pLmFuaW1hdGUoe2NvdW50OiBzZXR0aW5ncy5lbmR9LCB7XHJcblx0XHRcdGR1cmF0aW9uOiBzZXR0aW5ncy5kdXJhdGlvbixcclxuXHRcdFx0ZWFzaW5nOiBzZXR0aW5ncy5lYXNpbmcsXHJcblx0XHRcdHN0ZXA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBtYXRoQ291bnQgPSBNYXRoLmNlaWwodGhpcy5jb3VudCk7XHJcblx0XHRcdFx0dGhpc0VsZW1lbnQudGV4dChtYXRoQ291bnQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21wbGV0ZTogc2V0dGluZ3MuY29tcGxldGVcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cclxuc2V0VGltZW91dChmdW5jdGlvbigpeyQoJyNudW1iZXIxJykualF1ZXJ5U2ltcGxlQ291bnRlcih7ZW5kOiAxMixkdXJhdGlvbjogNzAwMH0pfSwgNjUwMCk7XHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKXskKCcjbnVtYmVyMicpLmpRdWVyeVNpbXBsZUNvdW50ZXIoe2VuZDogNTUsZHVyYXRpb246IDcwMDB9KX0sIDY1MDApO1xyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JCgnI251bWJlcjMnKS5qUXVlcnlTaW1wbGVDb3VudGVyKHtlbmQ6IDM1OSxkdXJhdGlvbjogNzAwMH0pfSwgNjUwMCk7XHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKXskKCcjbnVtYmVyNCcpLmpRdWVyeVNpbXBsZUNvdW50ZXIoe2VuZDogMjQ2LGR1cmF0aW9uOiA3MDAwfSl9LCA2NTAwKTtcclxuXHJcbi8vIEhvdmVyIGluIHBvcnRmb2xpb1xyXG5cclxuJChcIi5ob3ZlclwiKS5tb3VzZWxlYXZlKFxyXG4gIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImhvdmVyXCIpO1xyXG4gIH1cclxuKTtcclxuXHJcblxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);