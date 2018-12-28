// tracking
const externalLinkView = "External Link View";
const pageView = "Page View";

function trackPageView(pageName) {
    mixpanel.track(pageView, {"Page": pageName});
}

function trackClick(eventName, navId, pageName) {
    mixpanel.track(eventName, {
        "Page": navId,
        "Source": pageName,
    });
}

// other picture functions
function convertToGrid() {
    const images = window.document.images;
    for (var i=0; i<images.length; i++) {
        const image = images[i];
        const caption = image.nextSibling;
        $(image).toggleClass('grid-picture');
        $(caption).toggleClass('grid-caption');
    }
}

function convertToLarge() {
    const images = window.document.images;
    for (var i=0; i<images.length; i++) {
        const image = images[i];
        $(image).removeClass('grid-picture');
        const caption = image.nextSibling;
        $(caption).removeClass('grid-caption');
    }
}