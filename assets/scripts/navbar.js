/* Open Dropdown Menu If Not Open, Close If Open */
function hamburger() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className += "responsive";
    } else {
        x.className = "";
    }
}

/* Go To Section And Close Dropdown Menu */
function goTo(id){
    var x = document.getElementById("navbar");
    x.className = "";
    if (id == "#bio") {
        $('html,body').animate({scrollTop: $(id).offset().top-30},'slow');
    } else {
        $('html,body').animate({scrollTop: $(id).offset().top},'slow');
    }
}


/* Hide Dropdown Menu When User Clicks Outside of Menu */
$(document).mouseup(function(e) {
    var navbar = $("#navbar");
    var rightlinks = $("#right-links");
    // if the target of the click isn't the container nor a descendant of the container
    if (!navbar.is(e.target) && navbar.has(e.target).length === 0 && !rightlinks.is(e.target) && rightlinks.has(e.target).length === 0) {
        navbar.removeClass("responsive");
    }
});