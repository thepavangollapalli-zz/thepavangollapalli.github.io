//MODIFIED FROM http://jsfiddle.net/LaL3v/325/
var player = new Audio('audio/track_clipped.mp3');

$(document).ready(function () {
//    $(".overlay").hide();
    if($(window).width() < 340)
    {
        console.log("put in email link");
        $("#email").html("<h2><a href='mailto:deewaneacappella@gmail.com'>Email</a></h2>");
    }
    $("nav ul li a").css({"color":"black"});      
    var scroll_start = 0;
    var startchange = $('#music');
    var offset = startchange.offset();
    var highlight = false;
    //Let's get some scroll tunes up in here
    $(window).scroll(function(event) {
        player.play();
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            player.pause();
        }, 750));
    });

    $(document).scroll(function() { 
      // console.log("should highlight scroll");
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top-10) {
          highlight = true;
          $('nav').css({
          'background-color': 'black',
          'border-bottom': "1px solid white",
          'transition' : "all .5s ease",
          });
          $('nav ul li a').css({
            'color': "white"});
       } else {
          highlight = false;
          $('nav').css({
            'background-color': 'rgba(0,0,0,0)',
            'border-bottom': 'none'
          });
          $('nav ul li a').css({
            "color": "black"
          });
       }
   });
   $("nav ul li a").hover(function(){
      console.log("should highlight scroll");
      if(highlight === true)
      {
        $(this).css({
            'color': '#C8001E',
            'transition' : "all .4s ease"
        });
      }
   },function(){
      if(highlight === true)
      {
        $(this).css({
              'color': 'white',
              'transition' : "all .4s ease"
        });
      }
   });
   if ($(window).width() < 480) {
        $('#music_right').html('<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5SCQow3jVp0KUlebxpj5mm" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
        if($(window).width()>340)
        {
            $('#contact').html('<h1>CONTACT</h1><h2>Send inquiries to deewaneacappella@gmail.com!</h2><br><div class="pr_icons"><a href="https://www.facebook.com/cmudeewane/" target="blank"><img src="img/contact/fb.png" class="social"></a><a href="https://twitter.com/cmudeewane" target="blank"><img src="img/contact/twitter.png" class="social"></a><a href="https://www.instagram.com/cmudeewane/" target="blank"><img src="img/contact/ig.png" class="social"></a><a href="snapchat.pdf" target="blank"><img src="img/contact/snapchat.png" class="social"></a></div>')
        }
       } else {
        //enables embed_responsive if not smartphone
        $('#music_right').html('<div class="embed-responsive"><iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5SCQow3jVp0KUlebxpj5mm" width="300" height="380" frameborder="0" allowtransparency="true"></iframe></div>');
        $('#contact').html('<h1>CONTACT</h1><h2>Send inquiries to deewaneacappella@gmail.com, or fill out the form below!</h2><br><div class="typeform-widget" data-url="https://pavangollapalli.typeform.com/to/EcMZLD" data-text="Deewane Inquiries" style="width:80%;height:400px;margin:auto"></div><script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id="typef_orm",b="https://s3-eu-west-1.amazonaws.com/share.typeform.com/";if(!gi.call(d,id)){js=ce.call(d,"script");js.id=id;js.src=b+"widget.js";q=gt.call(d,"script")[0];q.parentNode.insertBefore(js,q)}})()</script><br><div class="pr_icons"><a href="https://www.facebook.com/cmudeewane/" target="blank"><img src="img/contact/fb.png" class="social"></a><a href="https://twitter.com/cmudeewane" target="blank"><img src="img/contact/twitter.png" class="social"></a><a href="https://www.instagram.com/cmudeewane/" target="blank"><img src="img/contact/ig.png" class="social"></a><a href="snapchat.pdf" target="blank"><img src="img/contact/snapchat.png" class="social"></a></div>')
       }
    
        $(window).resize(function(){
            if ($(window).width() < 480) {
                $('#music_right').html('<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5SCQow3jVp0KUlebxpj5mm" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
            } else {
                $('#music_right').html('<div class="embed-responsive"><iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5SCQow3jVp0KUlebxpj5mm" width="300" height="380" frameborder="0" allowtransparency="true"></iframe></div>');
            }
        });
//    $("#cross").hide();
    $("#hamburger a").click(function() {
//        $("#mobile-nav").slideToggle("medium", function(){
////             $("#hamburger").hide();
////             $("#cross").show();
//        });
        if($("#mobile-nav").css("right")=="-200px")
        {
            console.log("opening navbar");
            $("#mobile-nav").css({
              'right': '0px',
              'transition' : "all .4s ease"
            });
//            $("#hamburger a").hide();
            $(".overlay").fadeIn("fast");
        }
        else{
            $("#mobile-nav").css({
              'right': '-200px',
              'transition' : "all .4s ease"
            });
//            $("#hamburger a").show();
            $(".overlay").fadeOut("fast");
        }
    });
    $(".overlay").click(function(){
        if($("#mobile-nav").css("right")=="0px")
        {
            console.log("opening navbar");
            $("#mobile-nav").css({
              'right': '-200px',
              'transition' : "all .4s ease"
            });
//            $("#hamburger a").show();
            $(".overlay").fadeOut("fast");
        }
    });
    $("#mobile-nav a").click(function() {
        $("#mobile-nav").css({
              'right': '-200px',
              'transition' : "all .4s ease"
        });
//        $("#hamburger a").show();
        $(".overlay").fadeOut("fast");
    });

});