$(document).ready(function() {

    // Navbar Automatic Scrolling
    $("#navbar-first a, #navbar-second a").click(function() {
        var topHeight = $("#navbar-first").height() + $("#navbar-second").height()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - topHeight
        });
    });

    // Navbar color stays if clicked, then removed
    var link = $("navbar-second a").click(function() {
        link.removeClass('nav-active');
        $(this).addClass('nav-active');
    })

    // Social Media Icon Hovers-Color
    $(".contact-box").hover(
        function() {
            this.src = "assets/img/contact/" + this.id.split("-")[1] + "-hover.jpg"; 
        }, function() {
            this.src = "assets/img/contact/" + this.id.split("-")[1] + ".jpg";
        });

    // Filters for experience, slightly modified from
    // http://codepen.io/terf/blog/jquery-filter-divs
    var expFilter = $('.filter-box').click(function() {

        // if want to show all
        if (this.id == 'all') {
            $('#exp-columns > div').fadeIn(450);
        // show a specific filter
        } else {
            var $selectedProfiles = $('.' + this.id).fadeIn(450);
            $('#exp-columns > div').not($selectedProfiles).hide();
        }
        // changes the active filter color
        expFilter.removeClass('exp-active');
        $(this).addClass('exp-active');

    })

    // filters for interests
    var workFilter = $('.work-filter-box').click(function() {

        // if want to show all
        if (this.id == 'all') {
            $('#work-columns > div').fadeIn(450);
        // show a specific filter
        } else {
            var $selectedProfiles = $('.' + this.id).fadeIn(450);
            $('#work-columns > div').not($selectedProfiles).hide();
        }
        // changes the active filter color
        workFilter.removeClass('exp-active');
        $(this).addClass('exp-active');

    }) 


    // mouseover show text for interests


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
