$(document).ready(function() {

    // Navbar Automatic Scrolling
    $("#title a, #navbar a").click(function() {
        var topHeight = $("#title").height() + $("#navbar").height()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - topHeight
        });
    });

    // Social Media Icon Hovers-Color
    // $(".box-social").hover(
    //     function() {
    //         this.src = "assets/img/" + this.id + "-hover.jpg"; 
    //     }, function() {
    //         this.src = "assets/img/" + this.id + ".jpg";
    //     });

    // Social Media Icon Hovers-Opacity
    $(".box-social").hover(
        function() {
            $(this).stop().fadeTo("slow", 1);
        }, function() {
            $(this).stop().fadeTo("slow", 0.4);
    });
});




