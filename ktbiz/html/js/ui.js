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

   //window size
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
         $(this).siblings($gnbMenuContent).stop().fadeTo('slow',1);
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
   $(window).scroll(function() {
      if($(window).scrollTop() + $(window).height() > $(document).height() - $(".footer").height()) {
         $(".compareContainer").css('position','absolute').css('bottom',$(".footer").height())
      }
      if($(window).scrollTop() + $(window).height() < $(document).height() - $(".footer").height()) {
         $(".compareContainer").css('position','fixed').css('bottom','0')
      }
   });


   //guide
   var $guideList = $(".guideList > ul > li");
       $guideListButton = $(".guideContainer .guideList .title");
       $guideListContent = $(".guideContainer .guideList .title + ul");

   $guideListButton.click(function () {
      $guideList.removeClass('active')
      $(this).parent($guideList).addClass('active');

      $guideListContent.hide();
      $(this).siblings($guideListContent).slideToggle();
   });


   //faq
   var $faqList = $(".faqContainer li");
       $faqTitle = $(".faqContainer .title");
       $faqContent = $(".faqContainer .content");

   $faqTitle.click(function () {
      $(this).parent().toggleClass('active');
      $(this).next($faqContent).slideToggle();

   });


   //slider (main)
   $('.mainVisual .slick-slider').slick({
      autoplay: true,
      infinite: false,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: true,
      dots: true,
      dotsClass: "slick-dots",
      responsive: [{
         breakpoint: 1640,
         settings: {
            arrows: false,
         }
      }]
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
            breakpoint: 1640,
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
