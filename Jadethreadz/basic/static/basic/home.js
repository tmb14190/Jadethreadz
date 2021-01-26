/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    var width = document.getElementById("mySidebar").style.width;
    if (width === "0px" || width === "") {
        document.getElementById("mySidebar").style.width = "25%";
    } else {
        document.getElementById("mySidebar").style.width = "0";
    }
    
}

function fbook() {
    var win = window.open('fbook', '_blank');
    win.focus();
}

function igram() {
    var win = window.open('igram', '_blank');
    win.focus();
}

function sumBasket() {
    var basket = sessionStorage.length;
    
    document.getElementById("bask_txt").innerHTML = basket.toString();

}

function addItem(id) {
    
    var decodedCookie = decodeURIComponent(document.cookie);
    var ar = decodedCookie.split(';');
    
    document.cookie ="item" + id.toString() + "=" + id.toString() + "m" + "; path=/; ";
    
    sumBasket();
    
}

var navbar;

window.onload = function() {
    navbar = document.getElementById("navbar");
    navbar.classList.add("sticky");
    window.scrollTo(0, 0);
    
    sumBasket();
};



