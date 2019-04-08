// http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/
$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 650);
    }
});

// https://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll
$(window).scroll(function() {
    const menu = $("#navbar");
    let menuItems = menu.find("a");
    const scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    // Get container scroll position
    const fromTop = $(this).scrollTop() + 20;
 
    // Get id of current scroll item
    let cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    const id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
      .removeClass("active")
      .filter("[href='#"+id+"']").addClass("active");
})
