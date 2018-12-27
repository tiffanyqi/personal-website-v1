// tracking
const externalLinkView = "External Link View";
const pageView = "Page View";
const pressedNavItem = "Pressed Navbar Item";

function trackPageView(pageName) {
    mixpanel.track(pageView, {"Page": pageName});
}

function trackClick(eventName, navId, pageName) {
    mixpanel.track(eventName, {
        "Page": navId,
        "Source": pageName,
    });
}
