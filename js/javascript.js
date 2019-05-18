
function radio(x) {
    var man_lab = document.getElementsByClassName("man")[0];
    var man_sp = document.getElementsByClassName("man-span")[0];
    var women_lab = document.getElementsByClassName("women")[0];
    var women_sp = document.getElementsByClassName("women-span")[0];

    if (x > 0) {
        man_lab.style.color = "rgb(" + 225 + "," + 37 + "," + 27 + ")";
        man_sp.style.backgroundColor = "rgb(" + 225 + "," + 37 + "," + 27 + ")";
        women_lab.style.color = "rgb(" + 128 + "," + 128 + "," + 128 + ")";
        women_sp.style.backgroundColor = "rgb(" + 255 + "," + 255 + "," + 255 + ")";
    }
    if (x < 0) {
        man_lab.style.color = "rgb("+128+"," +128+","+ 128+")";
        man_sp.style.backgroundColor = "rgb("+255+"," +255+","+ 255+")";
        women_lab.style.color = "rgb("+225+"," +37+","+ 27+")";
        women_sp.style.backgroundColor = "rgb("+225+"," +37+","+ 27+")";
    }
}

function getmouse(x) {
    var label = document.getElementsByClassName("mouse");

    label[x].style.opacity = "0";
}

function lostmouse(x,text) {
    var label = document.getElementsByClassName("mouse");
    if (text.value != "") {
        label[x].style.opacity = "0";
    } else {
        label[x].style.opacity = "1";
    }
}

function getmouse1(x) {
    var label = document.getElementsByClassName("input-text");

    label[x].style.opacity = "0";
}

function lostmouse1(x,text) {
    var label = document.getElementsByClassName("input-text");

    if (text.value != "" && x!=1) {

        label[x].style.opacity = "0";
    } else {
        label[x].style.opacity = "1";
    }
}

function getmouse2(x) {
    var label = document.getElementsByClassName("input-text1");

    label[x].style.opacity = "0";
}

function lostmouse2(x,text) {
    var label = document.getElementsByClassName("input-text1");

    if (text.value != "" && x!=0) {

        label[x].style.opacity = "0";
    } else {
        label[x].style.opacity = "1";
    }
}

function Personal(x) {
    var Per_lab = document.getElementsByClassName("Personal-check");
    var Per_span = document.getElementsByClassName("Personal-span");

    for (var i = 0; i < Per_lab.length; i++) {
        Per_lab[i].style.color = "rgb("+128+"," +128+","+ 128+")";
        Per_span[i].style.backgroundColor = "rgb("+255+"," +255+","+ 255+")";
    }

    Per_lab[x].style.color = "rgb(" + 225 + "," + 37 + "," + 27 + ")";
    Per_span[x].style.backgroundColor = "rgb(" + 225 + "," + 37 + "," + 27 + ")";
}


function select(x) {
    var label = document.getElementsByClassName("input-text")[1];
    var index = x.selectedIndex;
    var value = x.options[index].value;
    if (value == "请选择") {
        label.style.zIndex = "0";
    } else {
        label.style.zIndex = "-1";
    }
}

function select1(x) {
    var label = document.getElementsByClassName("input-text1")[0];
    var index = x.selectedIndex;
    var value = x.options[index].value;
    if (value == "请选择") {
        label.style.zIndex = "0";
    } else {
        label.style.zIndex = "-1";
    }
}
