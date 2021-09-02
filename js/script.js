/*https://stackoverflow.com/questions/30527139/html-elements-displayinitial-or-displaynone-changing-upon-checkbox-state*/
/*https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector*/
/*https://www.w3schools.com/jsref/jsref_foreach.asp*/
/*https://stackoverflow.com/questions/48300164/filter-div-by-checkbox*/

var checkBoxAlles = document.querySelector('.alles');
var checkBoxRood = document.querySelector('.rood');
var checkBoxBlauw = document.querySelector('.blauw');
var checkBoxGeel = document.querySelector('.geel');
var checkBoxGroen = document.querySelector('.groen');
var checkBoxPaars = document.querySelector('.paars');

var imagesAlles = document.querySelectorAll('img');
var imagesRood = document.querySelectorAll('.imgrood');
var imagesBlauw = document.querySelectorAll('.imgblauw');
var imagesGeel = document.querySelectorAll('.imggeel');
var imagesGroen = document.querySelectorAll('.imggroen');
var imagesPaars = document.querySelectorAll('.imgpaars');

//de functie luisterd als er wordt geklikt op checkboxAlles. 
//For each is een loop waarbij je een collectie meeneemt, dus je neemt alle elementen van imagesAlles mee
//Dan kijk je of de checkboxAlles is gechecked, als dat zo is dan is imagesAlles 'block'
//Zo niet dan worden de elementen van imagesAlles niet getoont

checkBoxAlles.addEventListener('click', function () {
    imagesAlles.forEach(function (element) {
        if (checkBoxAlles.checked == true) {
            element.style.display = 'block';
        } else { 
            element.style.display = 'none';
        }
    });
});

checkBoxRood.addEventListener('click', function () {
    imagesRood.forEach(function (element) {
        if (checkBoxRood.checked == true) { 
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

checkBoxBlauw.addEventListener('click', function () {
    imagesBlauw.forEach(function (element) {
        if (checkBoxBlauw.checked == true) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});


checkBoxGeel.addEventListener('click', function () {
    imagesGeel.forEach(function (element) {
        if (checkBoxGeel.checked == true) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

checkBoxGroen.addEventListener('click', function () {
    imagesGroen.forEach(function (element) {
        if (checkBoxGroen.checked == true) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});


checkBoxPaars.addEventListener('click', function () {
    imagesPaars.forEach(function (element) {
        if (checkBoxPaars.checked) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

//Ik heb geprobeerd om een animatie te maken met (bijvoorbeeld rode afbeeldingen):
//checkBoxRood.addEventListener('click', function () {
//    imagesRood.forEach(function (element) {
//        if (checkBoxRood.checked == true) { 
//            element.style.transition = '2s';
//            element.style.opacity = 1;
//            element.style.display = 'block';
//        } else {
//            element.style.opacity = 0;  
//        }
//    });
//});
//Dit is helaas niet gelukt. De afbeeldingen bleven namelijk op hun oude positie staan en ik heb op meerdere manieren geprobeerd dat te veranderen, maar is helaas niet gelukt
//Ik snap dat het komt omdat de andere afbeeldingen niet verwijnen, maar onzichtbaar worden, maar ik weet niet hoe ik het kan oplossen
//Als ik namelijk, zoals nu display block en none gebruik, kan ik geen animatie maken