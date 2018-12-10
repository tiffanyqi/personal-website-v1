$(document).ready(function() {

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

// tracking
const externalLinkView = "External Link View";
const pageView = "Page View";
const pressedNavItem = "Pressed Navbar Item";
const pressedSort = "Pressed Sort";

function trackPageView(pageName) {
    mixpanel.track(pageView, {"Page": pageName});
}

function trackClick(eventName, navId, pageName) {
    link_id = String("#" + navId);
    mixpanel.track(eventName, {
        "Page": link_id.split("-")[2],
        "Source": pageName,
    });
}

function trackSort(boxId, pageName) {
    mixpanel.track(pressedSort, {
        "Button": boxId,
        "Source": pageName,
    });
}