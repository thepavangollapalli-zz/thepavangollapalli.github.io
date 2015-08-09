$(document).ready(function() {
      var  mn = $(".nav");
        mns = "nav-scrolled";
        hdr = $('header').height();

      $(window).scroll(function() {
        if( $(this).scrollTop() > hdr ) {
          mn.addClass(mns);
        } else {
          mn.removeClass(mns);
        }
      });

      $('a[href^="#"]').on('click', function(event) {

       var target = $( $(this).attr('href') );

        if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 900);
        }

      });

      $("section").mouseenter(function(){
        var id = $(this).attr('id');
        $('nav li').removeClass('active');
        $("[href=#"+id+"]").closest('li').addClass('active');
      });
});