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
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems, options);
   });
   $('.materialboxed').materialbox();


   // Menu Fixed
   var nav = $('header');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 180) {
      	nav.addClass("fixed");
      } else {
         nav.removeClass("fixed");
      }
   });
});
