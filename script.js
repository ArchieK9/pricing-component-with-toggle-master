"use strict";

let toggleCont = document.querySelector(".toggle-cont");
let toggle = document.querySelector(".toggle");
let annuallys = document.querySelectorAll(".annually");
let nones = document.querySelectorAll(".none");

toggleCont.addEventListener("click", () => {
    toggle.classList.toggle('left');

    nones.forEach(none => {
        none.classList.toggle('block'); 
    });

    annuallys.forEach(annually => {
        annually.classList.toggle('none'); 
    });
});
