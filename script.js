
// required variables

const features = document.getElementById("features");
const company = document.getElementById("company");


const arrowFeatureUp = document.getElementById("arrow-features-up");
const arrowFeatureDown = document.getElementById("arrow-features-down");
const arrowCompanyUp = document.getElementById("arrow-company-up");
const arrowCompanyDown = document.getElementById("arrow-company-down");

const featureDropdown = document.getElementById("list-one");
const companyDropdown = document.getElementById("list-two");


// opens/closes feature dropdown menu


features.addEventListener("click", openFeatures);



function openFeatures() {



    featureDropdown.classList.toggle("show");
    arrowFeatureUp.classList.toggle("showarrow");
    arrowFeatureDown.classList.toggle("hide");



}

// opens/closes company dropdown menu

company.addEventListener("click", openCompany);

function openCompany() {


    companyDropdown.classList.toggle("show");
    arrowCompanyUp.classList.toggle("showarrow");
    arrowCompanyDown.classList.toggle("hide");

}



window.addEventListener("click", function (e) {



    if (!featureDropdown.contains(e.target) && (!features.contains(e.target))) {

        featureDropdown.classList.remove("show");
        arrowFeatureUp.classList.remove("showarrow");
        arrowFeatureDown.classList.remove("hide");




    }


})


window.addEventListener("click", function (e) {


    if (!companyDropdown.contains(e.target) && (!company.contains(e.target))) {


        companyDropdown.classList.remove("show");
        arrowCompanyUp.classList.remove("showarrow");
        arrowCompanyDown.classList.remove("hide");

    }

})