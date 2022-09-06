


/* Open and close dropdown menu */

let dropdowns = document.getElementsByClassName('dropdown');

let featureArrowUp = document.getElementById('featurearrowup');
let featureArrowDown = document.getElementById('featurearrowdown');
let featureTarget = document.getElementById('feature-target');
let featureMenu = document.getElementById('features-drop');
let companyTarget = document.getElementById('company-target');
let companyMenu = document.getElementById('company-drop');
let companyArrowUp = document.getElementById('companyarrowup');
let companyArrowDown = document.getElementById('companyarrowdown');


function openFeatures() {
    featureMenu.classList.toggle('show');
    featureArrowUp.classList.toggle('showarrow');
    featureArrowDown.classList.toggle('hide');
  }

  
companyTarget.addEventListener("click", openCompany);


function openCompany() {

    companyMenu.classList.toggle('show');
    companyArrowUp.classList.toggle('showarrow');
    companyArrowDown.classList.toggle('hide');
    

}



window.addEventListener("click", function (e) {


    if (!featureMenu.contains(e.target) && (!featureTarget.contains(e.target))) {

        featureMenu.classList.remove("show");
        featureArrowUp.classList.remove('showarrow');
        featureArrowDown.classList.remove('hide');

    }
})



window.addEventListener("click", function (e) {


    if (!companyMenu.contains(e.target) && (!companyTarget.contains(e.target))) {

        companyMenu.classList.remove("show");
        companyArrowUp.classList.remove('showarrow');
        companyArrowDown.classList.remove('hide');

    }
})

  

  






/* Hamburger menu toggle */


  
let menu = document.getElementById("menu");
let open = document.getElementById("open-menu");
let close = document.getElementById("close-menu");
let hamburger = document.getElementById("hamburger");

  function toggleMenu() {

    if (menu.classList.contains("showMenu")) {

        menu.classList.remove("showMenu");
        close.style.display = "none";
        open.style.display = "block";

    } else {

        menu.classList.add("showMenu");
        close.style.display = "block";
        open.style.display = "none";
    }

  }



 hamburger.addEventListener("click", toggleMenu);




