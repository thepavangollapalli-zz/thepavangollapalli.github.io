$(document).ready(function() {
      $(function () {
          $('[data-toggle="tooltip"]').tooltip()
      })
      
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

      var main = main = $('nav ul');

      $('nav a').click(function(event) {
        
      event.preventDefault();
 
      var full_url = this.href,
        parts = full_url.split('#'),
        trgt = parts[1],
        target_offset = $('#'+trgt).offset(),
        target_top = target_offset.top;
    
        /* Remove active class on any li when an anchor is clicked */
    
      main.children().removeClass();
    
      /* Add active class to clicked anchor's parent li */
        
      $(this).parent().addClass('active');

});
});