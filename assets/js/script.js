$(document).ready(function() {

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
            $('#work-table > div').fadeIn(450);
        // show a specific filter
        } else {
            var $selectedProfiles = $('.' + this.id).fadeIn(450);
            $('#work-table > div').not($selectedProfiles).hide();
        }
        // changes the active filter color
        workFilter.removeClass('exp-active');
        $(this).addClass('exp-active');

    })
});
