const NOT_SELECTED = "nav-item";
const SELECTED     = "nav-selected";

const HIDDEN       = "content-hidden";
const SHOWN        = "content-shown";

var currentNavItem = "nav-eventos";
var currentContent = "cont-eventos"

function changeNavItem(item) {
    let navItem = getNav(item);
    let contItem = getCont(item);

    changeButtonClass(navItem);
    showContent(contItem);

    currentNavItem = navItem;
    currentContent = contItem;
}

function changeButtonClass(navItem) {
    document.getElementById(currentNavItem).className = NOT_SELECTED;

    document.getElementById(navItem).className = SELECTED;
}

function showContent(contItem) {
    document.getElementById(currentContent).className = HIDDEN;

    document.getElementById(contItem).className = SHOWN;
}

function getNav(item) {
    return "nav-" + item;
}

function getCont(item) {
    return "cont-" + item;
}
