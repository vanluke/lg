$(document).on("click","a",function(e){
        var id = $(this).attr("href");
        if(id && !id.startsWith('#')) {
          return true;
        }
        e.preventDefault();
        var topSpace = 0;
        $('html, body').animate({
          scrollTop: $(id).offset().top - topSpace
        }, 800);
});
