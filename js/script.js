let bottomHeaders = document.querySelectorAll(".opt");
let page = document.querySelector(".page");
let buySell = document.querySelector(".buySell");
let collections = document.querySelector(".collectionsHeader");
let departments = document.querySelector(".departmentsHeader");
let BuySellSearchButton = document.querySelector("#buySell-SearchButton")

//HomePage Function Toggles
function hideHomePage() {
    page.setAttribute("class", 'page-afterclick');
    for(let i=0;i<bottomHeaders.length;i++){
        bottomHeaders[i].classList.remove("active-button");
    }
    bottomHeaders[i].classList.add("active-button");
}
function showHomePage(){
    for(let i=1;i<bottomHeaders.length;i++){
        bottomHeaders[i].classList.remove("active-button");
    }
    bottomHeaders[0].classList.add("active-button");
    page.setAttribute("class", "page");
}

//Collections - Funtion Toggles
function hideCollections() {
    collections.setAttribute("class", 'collectionsHeader');
    for(let i=0;i<bottomHeaders.length;i++){
        bottomHeaders[i].classList.remove("active-button");
    }
    bottomHeaders[1].classList.add("active-button");
}
function showCollections(){
    collections.setAttribute("class", 'collectionsHeader-afterclick');
    for(let i=0;i<bottomHeaders.length;i++){
        bottomHeaders[i].classList.remove("active-button");
    }
    bottomHeaders[1].classList.add("active-button");
    
}

//Departments - Function Toggles
function hideDepartments() {
    departments.setAttribute("class", 'departmentsHeader');
    for(let i=0;i<bottomHeaders.length;i++){
        bottomHeaders[i].classList.remove("active-button");
    }
    bottomHeaders[i].classList.add("active-button");
}
function showDepartments(){
    departments.setAttribute("class", 'departmentsHeader-afterclick');
    for(let i=0;i<bottomHeaders.length;i++){
        bottomHeaders[i].classList.remove("active-button");
    }
    bottomHeaders[2].classList.add("active-button");
}


//BuySell - Function Toggles
function hideBuySell() {
    buySell.setAttribute("class", 'buySell');
    for(let i=0;i<bottomHeaders.length;i++){
        bottomHeaders[i].classList.remove("active-button");
    }
    bottomHeaders[i].classList.add("active-button");
}
function showBuySell(){
    buySell.setAttribute("class", 'buySell-afterclick');
    for(let i=0;i<bottomHeaders.length;i++){
        bottomHeaders[i].classList.remove("active-button");
    }
    bottomHeaders[3].classList.add("active-button");
}

//HideHomePage for all other clicks
for(let i=1;i<bottomHeaders.length;i++){
    bottomHeaders[i].addEventListener("click", function () {
        hideHomePage();
    });
}

//HideCollections for all other clicks
for(let i=0;i<bottomHeaders.length;i++){
    if(i!=1){
        bottomHeaders[i].addEventListener("click", function () {
            hideCollections();
        });
    }
}

//HideDepartments for all other clicks
for(let i=0;i<bottomHeaders.length;i++){
    if(i!=2){
        bottomHeaders[i].addEventListener("click", function () {
            hideDepartments();
        });
    }
}

//HideBuySell for all other clicks
for(let i=0;i<bottomHeaders.length;i++){
    if(i!=3){
        bottomHeaders[i].addEventListener("click", function () {
            hideBuySell();
        });
    }
}

//showHomePage
bottomHeaders[0].addEventListener("click", function () {
    showHomePage();
});

//showCollections
bottomHeaders[1].addEventListener("click", function () {
    showCollections();
});

//showDepartments
bottomHeaders[2].addEventListener("click", function () {
    showDepartments();
});

//showBuySell
bottomHeaders[3].addEventListener("click", function () {
    showBuySell();
});

//Buy/Sell Search Button Functionality
BuySellSearchButton.addEventListener("click", function(){
    document.getElementById("buySellPlayground").style.display = "";
})