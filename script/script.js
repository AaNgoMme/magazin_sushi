

// nav scrol effects


let actionAndNew = document.querySelector("#action-and-new");
let sushi = document.querySelector('#sushi');
let prostieSushi = document.querySelector('#prostie-sushi');
let zapechenieSushi = document.querySelector("#zapechenie-sushi");
let slojnieSushi = document.querySelector('#slojnie-sushi');
/*et prostieSushi1 = document.querySelector('#prostie-sushi');
let zapechenieSushi1 = document.querySelector("#zapechenie-sushi");
let zapechenieSushi2 = document.querySelector("#zapechenie-sushi");*/


let navAction = document.querySelector('.nav-action');
let navSushi = document.querySelector('.nav-sushi');
let navProstie = document.querySelector('.nav-prostie');
let navZapechenie = document.querySelector('.nav-zapechenie');
let navSlojnie = document.querySelector('.nav-slojnie');
let navSets = document.querySelector('.nav-sets');
let navPizza = document.querySelector('.nav-pizza');
let navWok = document.querySelector('.nav-wok');


window.addEventListener('scroll', function () {
    if (pageYOffset > -10 && pageYOffset < (sushi.getBoundingClientRect().top + window.pageYOffset - 50)) {
        navAction.className = "nav-link nav-sushi active";
        navAction.ariaSelected = "true";
    }
    else {
        navAction.className = "nav-link nav-sushi";
        navAction.ariaSelected = "false";
    }
    if (pageYOffset > (sushi.getBoundingClientRect().top + window.pageYOffset - 50) && pageYOffset < (prostieSushi.getBoundingClientRect().top + window.pageYOffset - 50)) {
        navSushi.className = "nav-link nav-sushi active";
        navSushi.ariaSelected = "true";
    }
    else {
        navSushi.className = "nav-link nav-sushi";
        navSushi.ariaSelected = "false";
    }

    if (pageYOffset > (prostieSushi.getBoundingClientRect().top + window.pageYOffset - 50) && pageYOffset < (zapechenieSushi.getBoundingClientRect().top + window.pageYOffset - 50)) {
        navProstie.className = "nav-link nav-sushi active";
        navProstie.ariaSelected = "true";
    }
    else {
        navProstie.className = "nav-link nav-sushi";
        navProstie.ariaSelected = "false";
    }
    if (pageYOffset > (zapechenieSushi.getBoundingClientRect().top + window.pageYOffset - 50) && pageYOffset < (slojnieSushi.getBoundingClientRect().top + window.pageYOffset - 50)) {
        navZapechenie.className = "nav-link nav-sushi active";
        navZapechenie.ariaSelected = "true";
    }
    else {
        navZapechenie.className = "nav-link nav-sushi";
        navZapechenie.ariaSelected = "fasle";
    }
    if (pageYOffset > (slojnieSushi.getBoundingClientRect().top + window.pageYOffset - 50) && pageYOffset < (slojnieSushi.getBoundingClientRect().top + window.pageYOffset - 50)) {
        navSlojnie.className = "nav-link nav-sushi active";
        navSlojnie.ariaSelected = "true";
    }
    else {
        navSlojnie.className = "nav-link nav-sushi";
        navSlojnie.ariaSelected = "fasle";
    }
    
}
);

//modal card

let modalTitle = document.querySelector(".modal-card-title");
let modalBody = document.querySelector(".modal-body");
let modalImg = document.querySelector(".modal-img");
let modalTxt = document.querySelector(".modal-txt");

let cardBox = document.querySelectorAll(".card-box");
let cardTitle = document.querySelectorAll(".card-title");
let cardText = document.querySelectorAll(".card-text");
let cardInfo = document.querySelectorAll(".card-info");
let cardImage = document.querySelectorAll(".card-img-top");
let btnPrice = document.querySelectorAll(".btn-price");
let currency = document.querySelectorAll(".currency"); 


for (let i = 0; i < cardBox.length; i++) {
    cardBox[i].onclick = function () {
        modalTitle.innerHTML = cardTitle[i].innerHTML
        modalImg.src = cardImage[i].src
        modalTxt.innerHTML = `${cardInfo[i].innerHTML} <br> <br>Вес: ${cardText[i].innerHTML} <span class="modal-price"> ${btnPrice[i].innerHTML} </span> <span class="modal-currency" hidden> ${currency[i].innerHTML} </span>`

    }
};



// Add cart to basket
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

/*if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }*/

const addToCart = document.querySelector(".add-to-cart")

    addToCart.onclick = function() {
    modalBody.prepend(createComment())
        scoreCartCount()  
        }
        
          function createComment() {
          let comment = document.createElement('div');
          let modalPrice = document.querySelector(".modal-currency")
          comment.className = 'cart-body';
          comment.insertAdjacentHTML('afterbegin', `<div class="cart-image">
                                        <img src="${modalImg.src}">
                                    </div>
                                    <div class="cart-name">
                                        ${modalTitle.innerHTML}
                                    </div>
                                    <div class="cart-count">
                                        <button class="count-minus">-</button>
                                        <span class="display-count">1</span>
                                        <button class="count-plus">+</button>
                                    </div>
                                    <div class="cart-prise">
                                        <span class="basket-cart-currency">${modalPrice.innerHTML}</span>
                                        <span>₽</span>
                                    </div>`);
        console.log('pidr')
        
          return comment;
        }
        
    /*    let toastImg = document.querySelectorAll(".toast-img");
        let toastTitle = document.querySelectorAll(".toast-title");

            function toast() {
            toastImg.src = modalImg.src
            toastTitle.innerHTML = modalTitle.innerHTML
        } */

    function scoreCartCount() {
        let displayCount = document.querySelectorAll(".display-count")
        let countPlus = document.querySelectorAll(".count-plus")
        let countMinus = document.querySelectorAll(".count-minus") 
        let cartBody = document.querySelectorAll(".cart-body") 
        let cartPrise = document.querySelectorAll(".cart-prise")
        let basketCartCurrency = document.querySelectorAll(".basket-cart-currency") 
        
    for (let i = 0; i < countPlus.length; i++) {
        let count = 1
        countPlus[i].onclick = function() {
            count++
            displayCount[i].innerHTML = count
            cartPrise[i].innerHTML = `${Number(basketCartCurrency[i].innerHTML) * count} ₽` 
        }

        countMinus[i].onclick = function() {
            count--
            if (count == 0) {
                cartBody[i].innerHTML = ""
            } else {
                displayCount[i].innerHTML = count
                cartPrise[i].innerHTML = `${Number(basketCartCurrency[i].innerHTML) * count} ₽` 
            }
            
        }
    }
    }

