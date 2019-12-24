var collapsePanel = document.querySelector(".collapse_panel ");
var expand_panel = document.querySelector(".expand_panel ");
var closeBtn = document.querySelector(".close_btn");

collapsePanel.addEventListener("click", myFunction);
closeBtn.addEventListener("click", exit);

function myFunction() {
    expand_panel.style.transform = "translateY(0px)";
    //closeBtn.setAttribute('class', closeBtn.getAttribute('class') + ' exit_in'); //Keep existing and add multiple CSS Class way 1
    //closeBtn.setAttribute('class', 'close_btn exit_in'); //Add both (existing and new class)
    closeBtn.className += " exit_in"; //Keep existing and add multiple CSS Class way 2
    closeBtn.classList.remove("exit_out"); //Romove class
    //closeBtn.classList.remove("exit_out", "close_btn"); //Romove multiple class
}

function exit() {
    expand_panel.style.transform = "translateY(-480px)";
    closeBtn.className += " exit_out";
    closeBtn.classList.remove("exit_in");
}