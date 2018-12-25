$(document).ready(function() {

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
    });

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
    let link_id = navId;
    if (link_id.split("-").length > 1) {
        link_id = link_id.split("-")[2];
    }
    mixpanel.track(eventName, {
        "Page": link_id,
        "Source": pageName,
    });
}

function trackSort(boxId, pageName) {
    mixpanel.track(pressedSort, {
        "Button": boxId,
        "Source": pageName,
    });
}