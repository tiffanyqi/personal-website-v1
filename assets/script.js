$(document).ready(function() {

    // Navbar Automatic Scrolling
    $("#title a, #navbar a").click(function() {
        var topHeight = $("#title").height() + $("#navbar").height()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - topHeight
        });
    });

    // Social Media Icon Hovers
    $(".box-social").mouseover(function() {
        var icon = this.hash.split(-)[1];
        var image = "background: url('img/social-" + icon + "-hover.jpg'); ";
        var speed = "transition: 0.5s;";
        var imageAnimation = image + speed;
        $(this.hash).css(imageAnimation);

        var hover = this + "-hover";
        $(hover.hash).css(speed);
        )};
});




// #social-mail {
//     height: 75px;
//     width: 75px;
//     background: url("img/social-mail.jpg");
//     transition: 0.5s;
// }
// #social-mail:hover {
//     height: 75px;
//     width: 75px;
//     background: url("img/social-mail-hover.jpg");
//     transition: 0.5s;
// }