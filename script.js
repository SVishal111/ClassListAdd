console.log("Hello, World!");

var main = document.getElementById("main");
var btn = document.getElementById("btn");
var heroSection = document.getElementById("heroSection");

btn.addEventListener("click", function() {
    main.classList.add("mainAdd");
    btn.classList.add("btnAdd");
    heroSection.classList.add("heroSectionAdd");

    btn.innerHTML = "Theme Added!";
});