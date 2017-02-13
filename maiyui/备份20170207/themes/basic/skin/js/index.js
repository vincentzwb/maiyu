$(document).ready(function() {

	$('#contain').fullpage({
		sectionsColor: ['#e8eaec', '#eeeeee', '#eeeeee', '#f8f8f8', '#f2f2f2', '#f7f7f7'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',
		afterLoad: function(anchorLink, index) {
			
			if(index == 1) {

				$(".section2 .cirEff").css({
					"transform": "rotate(0deg)",
					"transform-origin": "center center"
				});
			}else if(index == 2) {
				scrollTop(0);

				$.fn.fullpage.setAllowScrolling(false)

				var _index = 0;
				var time = true;
				var t;
				var len = $(".section2 .font").length;
				
				
				//鼠标滚动
				// jquery 兼容的滚轮事件
				$(document).on("mousewheel DOMMouseScroll", function(e) {

					var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
						(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox

					if(delta > 0) {
						_index = 0;

						$(document).unbind("mousewheel DOMMouseScroll");
						$.fn.fullpage.setAllowScrolling(true);
						
						
						// 向上滚
						
						console.log("wheelup");

					} else if(delta < 0) {
						if(time) {
							time = false;
							clearTimeout(t)
							if(_index == 0) {
								_index++;
								section2_font(_index, len)
								$(".section2 .cirEff").css({
									"transform": "rotate(90deg)",
									"transform-origin": "center center"
								});

							} else if(_index == 1) {
								_index++;
								section2_font(_index, len)

								$(".section2 .cirEff").css({
									"transform": "rotate(180deg)",
									"transform-origin": "center center"
								});

							} else if(_index == 2) {
								_index++;
								section2_font(_index, len)
								$(".section2 .cirEff").css({
									"transform": "rotate(270deg)",
									"transform-origin": "center center"
								});

							} else {

							}
							time = false;
							t = setTimeout(function() {
								if(_index == 3) {
									_index = 0;
									$(document).unbind("mousewheel DOMMouseScroll");
									$.fn.fullpage.setAllowScrolling(true);
									
								}
								time = true;
							}, 2000);
						}

						// 向下滚
						console.log("wheeldown");
					}

				});

				//滚动结束
				
				
				//手指滑动
					slideSpan();
					var slideTo3=false;
					function slideSpan(){
						
						var slideRight=document.getElementsByClassName("section2")[0];
						var movestart=0;
						slideRight.addEventListener('touchstart',function(event){
							movestart=event.changedTouches[0].pageY;
		
							
							if(event.stopPropagation){
							 	 event.stopPropagation();
							 }else{
							 	event.cancelBubble = true;
							 }
						},false);
						
						slideRight.addEventListener('touchend',function(event){
							var movesend=event.changedTouches[0].pageY;
							if(movesend-movestart>80){
								
								_index = 0;

								$(document).unbind("mousewheel DOMMouseScroll");
								
								
								$.fn.fullpage.setAllowScrolling(true);
								slideTo3=false;
								location.href="#page1"
								
								// 向下滚
								console.log("touchdown");
							}else if(movesend-movestart<-80){
								if(time) {
									time = false;
									clearTimeout(t)
									if(_index == 0) {
										_index++;
										section2_font(_index, len)
										$(".section2 .cirEff").css({
											"transform": "rotate(90deg)",
											"transform-origin": "center center"
										});
		
									} else if(_index == 1) {
										_index++;
										section2_font(_index, len)
		
										$(".section2 .cirEff").css({
											"transform": "rotate(180deg)",
											"transform-origin": "center center"
										});
		
									} else if(_index == 2) {
										_index++;
										section2_font(_index, len)
										$(".section2 .cirEff").css({
											"transform": "rotate(270deg)",
											"transform-origin": "center center"
										});
		
									} else {
		
									}
									time = false;
									
									if(_index == 3 && slideTo3) {
										_index = 0;
										slideTo3=false;
										location.href="#page3";
									}
									
									t = setTimeout(function() {
										if(_index == 3) {
											slideTo3=true;
											
											$(document).unbind("mousewheel DOMMouseScroll");
											$.fn.fullpage.setAllowScrolling(true);
											
										}
										time = true;
									}, 2000);
								}
								
								// 向上滚
		
								console.log("touchup");
							}
							
							if(event.stopPropagation){
							 	 event.stopPropagation();
							 }else{
							 	event.cancelBubble = true;
							 }
						},false)
						
						
						
					}
					
					
					
				
				//手指滑动结束
				

				//					$(".section2 .cirEff").css({"transform":"rotate(90deg)","transform-origin":"center center"})
			}

		},
		onLeave: function(index, direction) {
			if(index == 2 && direction == 3) {

				$(".section2 .cirEff").css({
					"transform": "rotate(0deg)",
					"transform-origin": "center center"
				})

			}
			if(index == 2 && direction == 1) {

				$(".section2 .cirEff").css({
					"transform": "rotate(0deg)",
					"transform-origin": "center center"
				})

			}
		},
		afterRender: function() {},
		afterResize: function() {
			setCirWid();

			$('.slider_02').trigger("destroy", {
				origOrder: true
			})
			$('.slider_01').trigger("destroy", {
				origOrder: true
			})
			$('.switch_wrap').trigger("destroy", {
				origOrder: true
			})

			section3Silder();
			//				 index_gd_home('.section3 .imgWrap img', ".section3 .imgWrap", 750, 1080);

		}
	});

	//section2 font
	function section2_font(_index, len) {
		$(".section2 .font").eq(_index).find(".pw_scroll").animate({
			"scrollTop": "0"
		});
		for(var i = 0; i < len; i++) {
			if(i != _index && $(".section2 .font").eq(i).hasClass("fontshow")) {

				$(".section2 .font").eq(i).animate({
					opacity: "0.3"
				}, function() {
					$(this).css({
						display: "none"
					});
					$(this).removeClass("fontshow");

					$(".section2 .font").eq(_index).animate({
						opacity: "1"
					}, function() {

						$(".section2 .font").eq(_index).css({
							display: "block"
						});
						$(".section2 .font").eq(_index).addClass("fontshow");
						scrollTop(_index);
					})

				})
			}
		}
	}
	//scrollTop
	function scrollTop(_index) {

		var wapWid = $(".section2 .font").eq(_index).find(".pw_scroll").height()
		var contWid = $(".section2 .font").eq(_index).find(".pw_scroll .p").height()
		var scrolTO = contWid - wapWid;
		console.log("wapWid:" + wapWid + "，，，contWid：" + contWid + "，，，_index：" + _index)
		$(".section2 .font").eq(_index).find(".pw_scroll").delay(800).animate({
			'scrollTop': (scrolTO + 50) + 'px'
		}, 1000);
	}

	//menu 
	menueffe();

	function menueffe() {
		$(".sliderMenu").click(function() {
			$("#menu").css({
				display: "block",
				opacity: '1'
			});
			$("#menu li").eq(0).animate({
				opacity: "1"
			}, "fast", function() {
				$("#menu li").eq(1).animate({
					opacity: "1"
				}, "fast", function() {
					$("#menu li").eq(2).animate({
						opacity: "1"
					}, "fast", function() {
						$("#menu li").eq(3).animate({
							opacity: "1"
						}, "fast", function() {
							$("#menu li").eq(4).animate({
								opacity: "1"
							}, "fast", function() {
								$("#menu li").eq(5).animate({
									opacity: "1"
								}, "fast", function() {

									$("#menu .close").animate({
										opacity: "1"
									}, "fast", function() {})

								})
							})
						})
					})
				})

			})
		})

		$("#menu .next").click(function() {
			$("#menu").animate({
				opacity: "0"
			}, function() {
				$("#menu li").css({
					opacity: "0"
				});
				$("#menu").css({
					display: "none"
				});
				$("#menu .close").css({
					opacity: "0"
				});
			})
		})
		$("#menu .close").click(function() {

			$("#menu").animate({
				opacity: "0"
			}, function() {
				$("#menu li").css({
					opacity: "0"
				});
				$("#menu").css({
					display: "none"
				});
				$("#menu .close").css({
					opacity: "0"
				});
			})
		})
	}

	//section2
	setCirWid();

	function setCirWid() {
		var hig = $(".section2 .cirWrap").height();
		$(".section2 .cirWrap").width(hig);
	}

	//section3
	section3Silder();
	index_gd_home('.section3 .imgWrap img', ".section3 .imgWrap", 750, 1080);
	
	$("html").css({visibility:"visible"});
	
	function section3Silder() {
		$('.slider_01').carouFredSel({

			responsive: true,
			'scroll': {
				'duration': 600,
				'items': 1,
				//					'fx': 'crossfade'
			},
			'swipe': {
				'onMouse': true
			},
			'auto': false,
			'pagination': {
				'container': ".slider_02",
				'anchorBuilder': false
			}

		});
		$('.slider_02').carouFredSel({

			responsive: true,
			'scroll': {
				'duration': 600,
				'items': 1,
				//						'fx': 'crossfade',
				event: 'click'
			},
			'swipe': {
				'onMouse': true
			},
			'auto': false,
			'pagination': {
				'container': ".switch_wrap",
				'anchorBuilder': false
			},
			'synchronise': ".slider_01"

		});

		$(".switch_wrap").carouFredSel({
			'width': '100%',
			'scroll': {
				'duration': 600,
				'items': 1
			},
			'direction': "down",

			'synchronise': ".slider_02"
		});
	}

	function index_gd_home(a, b, w, h) {
		var $window = $(b);
		var $windowWidth = function() {
			return $window.width();
		};
		var $windowHeight = function() {
			return $window.height();
		};
		$window.fssResize(function() {
			var width = $windowWidth();
			var height = $windowHeight();

			$(b).each(function() {
				$this = $(this);
				$this.height(height).width(width);
				$this.triggerHandler("configuration", {
					height: height,
					width: width,
					items: {
						width: width
					}
				});
				$this.triggerHandler("updateSizes");
			});

		});

		$(a).each(function() {
			$(this).fullscreenstage({
				'width': w,
				'height': h
			});
		});

		$(window).fssResize();

	}

	//section5

	$(".section5 .cont_ele").mouseenter(function() {
		var len = $(".section5 .cont_ele").length;
		var _index = $(this).index();
		for(var i = 0; i < len; i++) {
			$(".section5 .cont_ele").eq(i).removeClass("active");
			if(i % 2 == 0) {
				$(".section5 .cont_ele").eq(i).find(".imgele").attr("src", "images/ele_b_n.png")
			} else {
				$(".section5 .cont_ele").eq(i).find(".imgele").attr("src", "images/ele_t_n.png")
			}

		}
		$(".section5 .cont_ele").eq(_index).addClass("active");
		if(_index % 2 == 0) {
			$(".section5 .cont_ele").eq(_index).find(".imgele").attr("src", "images/ele_b_a.png")
		} else {
			$(".section5 .cont_ele").eq(_index).find(".imgele").attr("src", "images/ele_t_a.png")
		}

		for(var i = 0; i < len; i++) {
			if($(".section5 .cont01 .show01").eq(i).hasClass("showtotal") & i !== _index) {
				$(".section5 .cont01 .show01").eq(i).removeClass("showtotal");
				$(".section5 .cont01 .show01").eq(i).css({
					display: "none"
				});
				$(".section5 .cont01 .show01").eq(_index).addClass("showtotal")
				$(".section5 .cont01 .show01").eq(_index).css({
					display: "block"
				});
				$(".section5 .cont01 .show01").eq(_index).animate({
					opacity: "1"
				})
			}
		}

	})

});