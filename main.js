
document.addEventListener("DOMContentLoaded", init);

function init() {
    addEventlisteners();
};

function addEventlisteners(){
    document.querySelector(".goBack").addEventListener("click", goBack);
    document.querySelector(".scan").addEventListener("click", goNext);
}

function goBack(){
    document.querySelector(".pageOne").classList.remove("hide");
    document.querySelector(".pageTwo").classList.add("hide");

}

function goNext(){
    document.querySelector(".pageOne").classList.add("hide");
    document.querySelector(".pageTwo").classList.remove("hide");

}