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

//modal card info

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



// Add cart to basket and all basket option

if(!localStorage.getItem('goods')) {
    localStorage.setItem('goods', JSON.stringify([]))
}
if(!localStorage.getItem('ordersInfo')) {
    localStorage.setItem('ordersInfo', JSON.stringify([]))
}


//pop-up messages for adding an item to the cart
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
let toastImg = document.querySelector(".toast-img");
let toastTitle = document.querySelector(".toast-title");

const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
toastTrigger.addEventListener('click', () => {
    console.log("lohh")
    toastImg.src = modalImg.src
    toastTitle.innerHTML = modalTitle.innerHTML
    toastBootstrap.show()
});


//add cart to basket

let basketCountIconNumber = document.querySelector(".basket-count-icon-number")


const addToCart = document.querySelector(".add-to-cart")
let modalBodyCost = document.querySelector(".modal-body-cost")

let comment = document.createElement('div');



addToCart.addEventListener('click', function() {
    let modalPrice = document.querySelector(".modal-currency")
    let goods = JSON.parse(localStorage.getItem('goods')) 

    let roll = false
    for (i = 0;i < goods.length; i++) {
        if (goods[i][2] == modalTitle.innerHTML) {
            roll = true
        }
    }
    if (!roll) {
        goods.push([goods.length, modalImg.src, modalTitle.innerHTML, modalPrice.innerHTML, 1])
        localStorage.setItem('goods', JSON.stringify(goods))
    }
    
    update_goods()
    
})


update_goods()

    function update_goods() {
        let countBascket = 0
        let totalСost = 0
        let goods = JSON.parse(localStorage.getItem('goods')) 
        modalBody.innerHTML = ""
        if(goods.length) {
            for (let i = 0; i < goods.length; i++) {
                modalBody.append(createBasketTwo())
                scoreCartCount()
                function createBasketTwo() {
                    let comment = document.createElement('div');
                    countBascket++
                comment.className = 'cart-body';
                comment.insertAdjacentHTML('beforeend', `<div class="cart-image">
                                                <img src="${goods[i][1]}">
                                            </div>
                                            <div class="cart-name">
                                                ${goods[i][2]}
                                            </div>
                                            <div class="cart-count">
                                                <button class="count-minus"><span>-</span></button>
                                                <span class="display-count">${goods[i][4]}</span>
                                                <button class="count-plus"><span>+</span></button>
                                            </div>
                                            <div class="cart-prise">
                                                <span class="basket-cart-currency">${goods[i][3] * goods[i][4]}</span>
                                                <span>₽</span>
                                            </div>`);   

                console.log('pidr')
                totalСost += Number(goods[i][3] * goods[i][4])    //Total Cost
                return comment;
                }

            }
            
        }
        modalBodyCost.innerHTML = `${totalСost} ₽`
        basketCountIconNumber.innerHTML = countBascket  //basket count icon

        
    }
        
    

//quantity product +-
    function scoreCartCount() {
        let countPlus = document.querySelectorAll(".count-plus")
        let countMinus = document.querySelectorAll(".count-minus") 
       
    for (let i = 0; i < countPlus.length; i++) {
        let goods = JSON.parse(localStorage.getItem('goods')) 

        countPlus[i].onclick = function() {
            goods[i].splice(4,1, goods[i][4] + 1)
            localStorage.setItem('goods', JSON.stringify(goods))
            update_goods()        
        }

        countMinus[i].onclick = function() {   
            if (goods[i][4] == 1) {
                goods.splice(i, 1)
                localStorage.setItem('goods', JSON.stringify(goods))
                update_goods()
            } else {
                goods[i].splice(4,1, goods[i][4] - 1)
                localStorage.setItem('goods', JSON.stringify(goods))
                update_goods()
            }
        }
        
    }
    }