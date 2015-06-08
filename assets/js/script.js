$(document).ready(function() {

    // Navbar Automatic Scrolling
    $("#navbar-first a, #navbar-second a").click(function() {
        var topHeight = $("#navbar-first").height() + $("#navbar-second").height()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - topHeight
        });
    });

    // Social Media Icon Hovers-Color
    $(".contact-box").hover(
        function() {
            this.src = "assets/img/contact/" + this.id.split("-")[1] + "-hover.jpg"; 
        }, function() {
            this.src = "assets/img/contact/" + this.id.split("-")[1] + ".jpg";
        });

    // Filters for experience, slightly modified from
    // http://codepen.io/terf/blog/jquery-filter-divs
    var filter = $('.filter-box').click(function() {

        // if want to show all
        if (this.id == 'all') {
            $('#columns > div').fadeIn(450);
        // show a specific filter
        } else {
            var $el = $('.' + this.id).fadeIn(450);
            $('#columns > div').not($el).hide();
        }
        // changes the active filter color
        filter.removeClass('active');
        $(this).addClass('active');

    })

    // Social Media Icon Hovers-Opacity
    // $(".box-contact").hover(
    //     function() {
    //         $(this).stop().fadeTo("slow", 1);
    //     }, function() {
    //         $(this).stop().fadeTo("slow", 0.5);
    // });


    // Work Pop-ups
    // $("a img.work-box").click(function() {
    //     var textBox = $(this).attr("href");
        
    //     $(textBox).fadeIn(300);
    //     $(textBox).css({ 
    //         "margin-top": 0,
    //         "margin-left": -100,
    //     });

    //     $("body").append('<div class="popup-overlay"></div>');
    //     $(".popup-overlay").fadeIn(300);
        
    //     return false;
    // });
    
    // $(".popup-overlay").live("click", function() { 
    //   $(".popup-overlay, .popup-window").fadeOut(300, function() {
    //     $(".popup-overlay").remove();  
    // }); 
    // return false;
    // });
});
