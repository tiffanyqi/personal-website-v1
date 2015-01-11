$(document).ready(function() {

    // Navbar Automatic Scrolling
    $("#title a, #navbar a").click(function() {
        var topHeight = $("#title").height() + $("#navbar").height()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - topHeight
        });
    });

    // Social Media Icon Hovers-Color
    $(".box-contact").hover(
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
});




