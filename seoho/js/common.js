document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  // wow
  wow = new WOW({
     boxClass:     'wow',      // 기본값
     animateClass: 'animated', // 기본값
     offset:       0,          // 기본값
     mobile:       true,       // 기본값
     live:         true        // 기본값
  })
  wow.init();
