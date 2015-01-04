$(document).ready(function() {
    $("#title a, #navbar a").click(function() {
        var topHeight = $("#title").height() + $("#navbar").height()
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - topHeight - 56
        });
    });
});