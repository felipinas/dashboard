var select = document.querySelector("#rows-per-page")

for (var cont = 2; cont <= 155; cont++) {

    select.innerHTML += `<option>${cont}</option>`

}

document.querySelector("#overview").addEventListener("click", () => {

    var ticketsButton = document.querySelector("#tickets")
    var overviewButton = document.querySelector("#overview")
    var titlePage = document.querySelector("#title-page")
    var whiteRec = document.querySelector("#principal-content")

    overviewButton.classList.replace("disabled-option", "active-option")
    ticketsButton.classList.replace("active-option", "disabled-option")
    titlePage.innerHTML = "Overview"
    whiteRec.innerHTML = ""

})

document.querySelector("#tickets").addEventListener("click", () => {
    location.reload(true)
})