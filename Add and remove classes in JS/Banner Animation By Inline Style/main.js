var collapsePanel = document.querySelector(".collapse_panel "),
    expand_panel = document.querySelector(".expand_panel "),
    closeBtn = document.querySelector(".close_btn"),
    animationDelay = 1000;

collapsePanel.addEventListener("click", collapseAnimation);
closeBtn.addEventListener("click", exit);

function collapseAnimation() {
    expand_panel.style.transform = "translateY(0px)";
    closeBtn.style.transform = "translateX(0px)";
    closeBtn.style.opacity = "1";
}

function exit() {
    expand_panel.style.transform = "translateY(-480px)";
    closeBtn.style.opacity = "0";
    setTimeout(function() {
        closeBtn.style.transform = "translateX(-50px)";
    }, animationDelay);
}