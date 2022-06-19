let dropdown = document.getElementById("dropdown");
function showHideDropDown() {
    if (dropdown.style.visibility === "" || dropdown.style.visibility === "hidden") {
        dropdown.style.visibility = "visible"
    }
    else if (dropdown.style.visibility === "visible") {
        dropdown.style.visibility = "hidden"
    }
}