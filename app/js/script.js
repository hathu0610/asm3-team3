const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function() {
    console.log('open');
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');    
        });
    } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    console.log(fadeElems);
    fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');    
    });
    }
});

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

  }

function openTab(evt1, tabName) {
    // Declare all variables
    var k, tabfbcontent, tabfblinks;

    // Get all elements with class="tabfbcontent" and hide them
    tabfbcontent = document.getElementsByClassName("tabfbcontent");
    for (k = 0; k < tabfbcontent.length; k++) {
        tabfbcontent[k].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabfblinks = document.getElementsByClassName("tabfblinks");
    for (k = 0; k < tabfblinks.length; k++) {
        tabfblinks[k].className = tabfblinks[k].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt1.currentTarget.className += " active";

}


  document.getElementById("defaultOpen").click();
  document.getElementById("defaultFBOpen").click();
