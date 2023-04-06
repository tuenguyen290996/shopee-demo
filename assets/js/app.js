//Show modal Register on PC

function showReg() {
    var x = document.getElementById("myModal");
    var y = document.getElementById("auth-formReg");
    if ((x.className === "modal") && (y.className === "auth-form")) {
        x.className += " showModal";
        y.className += " show"
    } else {
        x.className = "modal";
        y.className = "auth-form";
    }
}

//Show modal Login on PC

function showLogin() {
    var x = document.getElementById("myModal");
    var y = document.getElementById("auth-formLogin");
    if ((x.className === "modal") && (y.className === "auth-form")) {
        x.className += " showModal";
        y.className += " show"
    } else {
        x.className = "modal";
        y.className = "auth-form";
    }
}

//Switch Reg form & Login form on PC

function switchForm() {
    var x = document.getElementById("auth-formLogin");
    var y = document.getElementById("auth-formReg");
    if ((x.className === "auth-form show")) {
        x.className = "auth-form";
        y.className += " show"
    } else {
        x.className += " show"
        y.className = "auth-form";
    }
}

//Hide auth form on PC
function hideRegForm() {
    var x = document.getElementById("myModal");
    var y = document.getElementById("auth-formReg");
    if ((x.className === "modal showModal") && (y.className === "auth-form show")) {
        x.className = "modal";
        y.className = "auth-form"
    } else {
        x.className = "modal showModal";
        y.className = "auth-form show"
    }
}

function hideLoginForm() {
    var x = document.getElementById("myModal");
    var y = document.getElementById("auth-formLogin");
    if ((x.className === "modal showModal") && (y.className === "auth-form show")) {
        x.className = "modal";
        y.className = "auth-form"
    } else {
        x.className = "modal showModal";
        y.className = "auth-form show"
    }
}

//Show cart on tablet & mobile
function showCart() {
    var x = document.getElementById("myCart");
    if (x.className === "header__cart-list") {
        x.className += " show-on-mobile-tablet";
    } else {
        x.className = "header__cart-list";
    }
}

//Responsive menu on mobile

function showMenu() {
    var x = document.getElementById("myRespon");
    if (x.className === "header__respon-content") {
        x.className += " show-on-mobile";
    } else {
        x.className = "header__respon-content";
    }
}