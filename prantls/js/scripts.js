//MODIFIED FROM http://jsfiddle.net/LaL3v/325/

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('nav').css({
          'background-color': 'black',
          'transition' : "all .5s ease"
          });
          $('nav ul li a').css({
            'color': "white"});
       } else {
          $('nav').css({
            'background-color': 'rgba(255,255,255,0.5)'
            // 'border-bottom': 'none'
          });
          $('nav ul li a').css({
            "color": "black"
          });
       }
   });
});

function showDescription(descript){
    $("#event_content").html(descript);
}

function hideDescription(descript){
    $("#event_content").html("");
}