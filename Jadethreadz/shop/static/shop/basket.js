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

function emptyBasket() {

    sessionStorage.clear();
    location.reload();
}

function removeItem(key) {
    sessionStorage.removeItem(key[0]);
    location.reload();
}

function displayBasket(data) {

    var arData = data.toString().split(";");

    var basket = sessionStorage.length;
    
    if (parseInt(basket) === 0) {
        document.getElementById("h1").innerHTML = "Your basket is empty";
    } else if (parseInt(basket) === 1) {
        document.getElementById("h1").innerHTML = "You have " + basket.toString() + " item in your basket";
    } else {
        document.getElementById("h1").innerHTML = "You have " + basket.toString() + " items in your basket";
    }
    
    var grid = document.getElementById("basket_grid");
    
    // sessionStorage format = "m" / "s" + itemID : quantity 
    
    var i;
    for (i = 0; i < sessionStorage.length; i++) {
        var key = sessionStorage.key(i);
        var qty = sessionStorage.getItem(key);
        var tChar = key.charAt(0);
        var type = "";
        if (tChar === "m") {
            type = "Mask";
        } else if (tChar === "s") { 
            type = "Scrunchie";
        }
        var id = key.substring(1);
        var fName = arData[i].split("-")[0];
        var path = arData[i].split("-")[1];
        
        // Add image
        var imgDiv = document.createElement("div");
        imgDiv.className = "img_div";
        grid.append(imgDiv);
        var imgCell = document.createElement("img");
        imgCell.src =  "http://localhost:8000/media/" + path;
        imgCell.className = "img_cell";
        imgDiv.append(imgCell);
        
        // Add order type
        var typeCell = document.createElement("div");
        typeCell.innerHTML = type;
        typeCell.className = "type_cell";
        grid.append(typeCell); 
        
        // Add Name
        var nameCell = document.createElement("div");
        nameCell.innerHTML = fName;
        nameCell.className = "name_cell";
        grid.append(nameCell); 
        
        // Add Quantity
        var qtyCell = document.createElement("div");
        qtyCell.innerHTML = "Qty:" + qty.toString();
        qtyCell.className = "qty_cell";
        grid.append(qtyCell); 
        
        // Add Remove From Basket
        var btnDiv = document.createElement("div");
        btnDiv.className = "img_div";
        grid.append(btnDiv);
        var btnCell = document.createElement("button");
        btnCell.id = "btn" + i.toString();
        btnCell.className = "btn";
        btnCell.innerHTML = "Remove";
        btnCell.onclick = removeItem.bind(this, [tChar + id.toString()]);
        btnDiv.append(btnCell); 
    }
       
}

function getImagePathFromID() {
    
    var IDs = "";
    
    // sessionStorage format = "m" / "s" + itemID : quantity 
    
    var i;
    for (i = 0; i < sessionStorage.length; i++) {
        var key = sessionStorage.key(i);
        
        IDs += key.substring(1) + ";";
    
    }
    
    $.ajax({
        url: 'http://localhost:8000/shop/retrieve',
        data: {
          'itemIDs': IDs
        },
        dataType: 'json',
        success: function(data) {
            displayBasket(data.paths);
        },
        failure: function(data) { 
            window.alert('Error accessing database');
        }
    });
    
}

var navbar;

window.onload = function() {
    navbar = document.getElementById("navbar");
    navbar.classList.add("sticky");
    window.scrollTo(0, 0);
    
    getImagePathFromID();
    
};


