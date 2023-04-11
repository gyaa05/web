function getCookie(c_name) {
    var c_value = document.cookie;
    console.log(c_value);
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function authorize() {
    username = prompt("Enter your name:", "");
    if (username != null && username != "") {
        setCookie("username", username, 365);
    }
    checkCookie();
}

function checkCookie() {
    var username = getCookie("username");
    if (username != null && username != "") {
        document.getElementById("naming").innerHTML = "Имя: " + username;
        document.getElementById("registration").hidden = true;
        document.getElementById("delete").style.display = "block";
    }
    else {
        document.getElementById("registration").hidden = false;
    }
}

function deleteCookie() {
    setCookie("username", null, null);
    document.getElementById("naming").innerHTML = "";
    document.getElementById("registration").hidden = false;
    document.getElementById("delete").style.display = "none";
}

var username = getCookie("username");
    if (username != "null" && username != "") {
        document.getElementById("naming").innerHTML = "Имя: " + username;
        document.getElementById("registration").hidden = true;
        document.getElementById("delete").style.display = "block";
    }
    else {
        document.getElementById("registration").hidden = false;
    }