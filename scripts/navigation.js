const NOT_SELECTED = "nav-item";
const SELECTED     = "nav-selected";

const HIDDEN       = "content-hidden";
const SHOWN        = "content-shown";

var currentItem = "eventos";

var toggleAction = {
    "eventos": toggleEventos,
    "sitios": function () {console.log("TODO")},
    "puntos": togglePuntos,
    "comercios": toggleComercios,
    "productos": function () {console.log("TODO")}
}


function changeNavItem(newItem) {
    let navItem = getNav(newItem);
    let contItem = getCont(newItem);

    changeButtonClass(navItem);
    showContent(contItem);

    toggleAction[currentItem]();
    toggleAction[newItem]();
    currentItem = newItem;
}

function changeButtonClass(newNavItem) {
    document.getElementById(getNav(currentItem)).className = NOT_SELECTED;

    document.getElementById(newNavItem).className = SELECTED;
}

function showContent(newContItem) {
    document.getElementById(getCont(currentItem)).className = HIDDEN;

    document.getElementById(newContItem).className = SHOWN;
}

function getNav(item) {
    return "nav-" + item;
}

function getCont(item) {
    return "cont-" + item;
}
