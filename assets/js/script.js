$(document).ready(function() {

    // Navbar Automatic Scrolling
    $("#title a, #navbar a").click(function() {
        var topHeight = $("#title").height() + $("#navbar").height()
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

    // Social Media Icon Hovers-Opacity
    // $(".box-contact").hover(
    //     function() {
    //         $(this).stop().fadeTo("slow", 1);
    //     }, function() {
    //         $(this).stop().fadeTo("slow", 0.5);
    // });


    // Work Pop-ups
    $("a img.work-box").click(function() {
        var textBox = $(this).attr("href");
        
        $(textBox).fadeIn(300);
        $(textBox).css({ 
            "margin-top": 0,
            "margin-left": -100,
        });

        $("body").append('<div class="popup-overlay"></div>');
        $(".popup-overlay").fadeIn(300);
        
        return false;
    });
    
    $(".popup-overlay").live("click", function() { 
      $(".popup-overlay, .popup-window").fadeOut(300, function() {
        $(".popup-overlay").remove();  
    }); 
    return false;
    });
});
