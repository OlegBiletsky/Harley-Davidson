//JS for disabling scroll in mobile  

// select body
let bodyElement = document.body;
// select menu toggler
let togglerElement = document.getElementById('toggler');

// function which toggle overflow for body
function ToggleScroll() {
    if (bodyElement.style.overflow === "hidden") {
            bodyElement.style.overflow = "auto"// scroll ON
    } else {
        bodyElement.style.overflow = "hidden"//scroll OFF
    }
}