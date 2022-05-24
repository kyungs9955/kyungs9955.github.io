$(document).ready(function () {

   //gnb
   var $header = $('.header'),
       $gnbMenuButton = $('.menuButton')
       $gnbMenuContainer = $(".gnbMenuContainer"),
       $gnbMenuList = $(".gnb .depth1 > li > strong"),
       $gnbMenuContent = $(".menuContent");

   //header fixed
   $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
         $header.addClass('fixed');
      } else {
         $header.removeClass('fixed');
      }
   });

   //header window size
   $(window).on('resize', function () {
      $header.removeClass('pc mobile open');
      $gnbMenuContent.removeAttr('style');
      if (window.innerWidth <= 767) {
         $header.addClass('mobile');
      } else {
         $header.addClass('pc');
      }
   }).trigger('resize');

   //header hover (pc)
   $gnbMenuList.mouseenter(function () {
      if (window.innerWidth >= 767) {
         $header.addClass('open');
         $header.height($(this).siblings($gnbMenuContent).height() + 110);

         $gnbMenuContent.hide();
         $(this).siblings($gnbMenuContent).stop().fadeTo('slow', 1);
      }
   });
   $header.mouseleave(function () {
      if (window.innerWidth >= 767) {
         $header.removeClass('open').removeAttr('style');
         $gnbMenuContent.removeAttr('style');
      }
   });

   //header click (mobile)
   $gnbMenuButton.click(function () {
      if (window.innerWidth < 767) {
         $header.toggleClass('open')
      }
   });
   $gnbMenuList.click(function () {
      if (window.innerWidth < 767) {
         $gnbMenuList.parent().removeClass('active')
         $(this).parent().addClass('active');

         $gnbMenuContent.hide();
         $(this).siblings($gnbMenuContent).fadeIn();
      }
   });

   //plan
   var $planButton = $(".planContent .title button"),
       $planContent = $(".planContent .content");

   $planButton.click(function () {
      $(this).toggleClass('close')
      $(this).parent().next($planContent).slideToggle(300);
   });

   //showcase
   var $searchButton = $(".searchContainer .searchTitle button"),
       $searchContent = $(".searchContainer .searchContent");
       $showcaseListButton = $(".showcase .showcaseList .title button");
       $showcaseListContent = $(".showcase .showcaseList .content");

   $(window).on('resize', function () {
      if (window.innerWidth <= 767) {
         $searchContent.slideUp('300');
         $searchButton.addClass('close');
      } else {
         $searchContent.slideDown('300')
         $searchButton.removeClass('close');
      }
   });
   $searchButton.click(function () {
      $(this).toggleClass('close')
      $(this).parent().next($searchContent).slideToggle(300);
   });
   $showcaseListButton.click(function () {
      $(this).toggleClass('close')
      $(this).parent().next($showcaseListContent).slideToggle(300);
   });

   //showcase compare floating
   $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - $(".footer").height()) {
         $(".compareContainer").css('position', 'absolute').css('bottom', $(".footer").height())
      }
      if ($(window).scrollTop() + $(window).height() < $(document).height() - $(".footer").height()) {
         $(".compareContainer").css('position', 'fixed').css('bottom', '0')
      }
   });

   //guide
   var $guideListContainer = $(".guideList")
       $guideList = $(".guideList > ul > li");
       $guideListLink = $(".guideList a");
       $guideListButton = $(".guideContainer .guideList .title");
       $guideListContent = $(".guideContainer .guideList .title + ul");

   $guideListButton.click(function () {
      $guideList.removeClass('active')
      $(this).parent($guideList).addClass('active');

      $guideListContent.hide();
      $(this).siblings($guideListContent).slideToggle();
   });
   
   //guide list sticky
   $(window).scroll(guideSticky);
   $(window).resize(guideSticky);
   function guideSticky (e) {
      e.preventDefault();
      if($(".guideContainer").length) {
         if (window.innerWidth > 1280) {
            var scrollTop = $(window).scrollTop();
            var stickyTop = $guideListContainer.offset().top - $(".header").height() - 30;
            if (scrollTop > stickyTop) {
               $guideListContainer.addClass("fixed");
            } else {
               $guideListContainer.removeClass("fixed");
            }
            if ($('.guideList > ul').height() > $(window).innerHeight() - $(".header").height() - $(".footer").height() - 40) {
               if ($(window).scrollTop() + $(window).height() > $(document).height() - $(".footer").height()) {
                  $(".guideList > ul").css('position', 'absolute').css('top', 'auto').css('bottom', 0);
               } else {
                  $(".guideList > ul").removeAttr('style');
               }
            } else {
               $(".guideList > ul").removeAttr('style');
            }
         } else {
            $guideListContainer.removeClass("fixed");
            $(".guideList > ul").removeAttr('style');
         }
      }
   };

   //guide smooth scroll & active link
   $guideListLink.click(function () {
      
      if (this.hash !== "") {
         var hash = this.hash;
         var headerHeightScroll = $('.header').outerHeight() + 40;
         $('html, body').animate({
            scrollTop: $(hash).offset().top - headerHeightScroll
         }, 800, function () {
            window.location.hash = hash;
         });
      }
   });
   // $(window).scroll(function() {
	// 	var windowPos = $(window).scrollTop() + $('.header').outerHeight() + 40;
	// 	$('.guideList li a[href^="#"]').each(function() { 
   //       var currentLink = $(this);
	// 		if ($(currentLink.attr("href")).length > 0)
   //              {
   //              var refElement = $(currentLink.attr("href"));
   //              if (refElement.offset().top <= windowPos) {
   //                  $('.guideList li a').removeClass("on");
   //                  currentLink.addClass("on");
   //              }
   //              else{
   //                  currentLink.removeClass("on");
   //              }
   //          }
	// 	});
	// });


   //faq
   // var $faqTitle = $(".faqContainer .title");
   //     $faqContent = $(".faqContainer .content");

   // $faqTitle.click(function () {
   //    $(this).parent().toggleClass('active');
   //    $(this).next($faqContent).slideToggle();
   // });


   //slider (main)
   $('.mainVisual .slick-slider').slick({
      autoplay: true,
      infinite: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: true,
      nextArrow: document.getElementById('slick-next'),
		prevArrow: document.getElementById('slick-previous'),
      dots: true,
      appendDots: $(".slick-page"),
      dotsClass: "slick-dots",
      customPaging: function (slider, i) {
         console.log(slider);
         return  + (i + 1) + ' / ' + slider.slideCount ;
      },
      responsive: [{
         breakpoint: 1440,
         settings: {
            arrows: false,
         }
      }]
   });
   $('#slick-pause').click( function() {
      if ($(this).hasClass('play')){
         $('.mainVisual .slick-slider').slick('slickPause')
         $(this).removeClass('play') 
         $(this).addClass('pause') 
      } else {
        $('.mainVisual .slick-slider').slick('slickPlay')  
        $(this).removeClass('pause') 
        $(this).addClass('play') 
      }  
    });
   $('.mainShowcase .slick-slider').slick({
      autoplay: true,
      infinite: false,
      pauseOnHover: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipe: true,
      arrows: true,
      dots: false,
      responsive: [{
            breakpoint: 1280,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 1023,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               centerMode: true,
               dots: true,
               dotsClass: "slick-dots",
            }
         }
      ]
   });
   $('.mainNotice .slick-slider').slick({
      autoplay: true,
      vertical: true,
      infinite: false,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: true,
      dots: false,
   });

   //slider (showcase)
   $('.subContainer.showcase .showcaseImage .slick-slider').slick({
      autoplay: false,
      infinite: false,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: true,
      dots: true,
   });

});



