jQuery(document).ready(function($) {

   // wow
   wow = new WOW({
   	boxClass:     'wow',      // 기본값
   	animateClass: 'animated', // 기본값
   	offset:       0,          // 기본값
   	mobile:       true,       // 기본값
   	live:         true        // 기본값
   })
   wow.init();

   // materialize
   document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var elems = document.querySelectorAll('.collapsible');
      var elems = document.querySelectorAll('.portfolio-modal, .notice-modal');
      var elems = document.querySelectorAll('.slider');
      var instances = M.Sidenav.init(elems, options);
      var instances = M.Collapsible.init(elems, options);
      var instances = M.Modal.init(elems, options);
      var instances = M.Slider.init(elems, options);
   });
   $('.sidenav').sidenav({
      edge: 'right'
   });
   $('.collapsible').collapsible();
   $('.portfolio-modal, .notice-modal').modal();
   $('.slider').slider({
      height: 530
   });


   // Menu Fixed
   var nav = $('header');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 180) {
      	nav.addClass("fixed");
      } else {
         nav.removeClass("fixed");
      }
   });

   // Tab
   var tabMenu = $('.join-tab-menu a, .portfolio-tab-menu a');
   var tabContent = $('.join-tab-content, .portfolio-tab-content');
   tabContent.hide();
   tabContent.first().show();
   tabMenu.click(function(event) {
      event.preventDefault();
      $(this).parent().addClass('on');
      $(this).parent().siblings().removeClass('on');
      var tab = $(this).attr('href');
      tabContent.not(tab).hide();
      $(tab).show();
   });
});
