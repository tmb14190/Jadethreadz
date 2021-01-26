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

function visitedBefore() {
    
    // IMPLEMENT
    
}

function sumBasket() {
    var basket = sessionStorage.length;
    
    document.getElementById("bask_txt").innerHTML = basket.toString();

}

function addMask(id) {
    
    var explain = "explain" + id.toString();
    var btns = "btns" + id.toString();
    var qty = "qty_cont" + id.toString();
    var bk = "bk" + id.toString();
    
    document.getElementById(btns).style.display = "none";
    
    document.getElementById(explain).innerHTML = "You would like to order a Mask:";
    document.getElementById(qty).style.display = "flex";
    document.getElementById(bk).style.visibility = "visible";
    
    
}

function addScrunchie(id) {
    var explain = "explain" + id.toString();
    var btns = "btns" + id.toString();
    var qty = "qty_cont" + id.toString();
    var bk = "bk" + id.toString();
    
    document.getElementById(btns).style.display = "none";
    document.getElementById(explain).innerHTML = "";
    
    document.getElementById(explain).innerHTML = "You would like to order a Scrunchie:";
    document.getElementById(qty).style.display = "flex";
    document.getElementById(bk).style.visibility = "visible";
}

function back(id) {
    var explain = "explain" + id.toString();
    var btns = "btns" + id.toString();
    var qty = "qty_cont" + id.toString();
    var bk = "bk" + id.toString();
    
    document.getElementById(bk).style.visibility = "hidden";
    document.getElementById(qty).style.display = "none";
    document.getElementById(explain).innerHTML = "";
    
    document.getElementById(btns).style.display = "flex";
    document.getElementById(explain).innerHTML = "Add to Basket:";
    
}

function addToBasket(id) {

    var explain = "explain" + id.toString();
    var order = "";
    if (document.getElementById(explain).innerHTML === "You would like to order a Mask:") {
        order = "m";
    } else if (document.getElementById(explain).innerHTML === "You would like to order a Scrunchie:") {
        order = "s";
    } else {
        window.alert("Not a valid order");
    }
        
    var qtyString = "qty" + id.toString();
    var qty = document.getElementById(qtyString).value.toString();
    
    if (!qty || qty === "0" || isNaN(qty)) {
        window.alert("Not a valid order");
    } else {
        if (localStorage.getItem("m" + id.toString()) === null) {
            window.alert("Added to Basket");
        } else {
            window.alert("Basket Updated");
        }
            
        sessionStorage.setItem("m" + id.toString(), qty.toString());
        sumBasket();
    }

}

var navbar;

window.onload = function() {
    navbar = document.getElementById("navbar");
    navbar.classList.add("sticky");
    window.scrollTo(0, 0);
    
    visitedBefore();
    
    sumBasket();
    
    
};


