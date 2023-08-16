let modalTitle = document.querySelector(".modal-card-title");
let modalBody = document.querySelector(".modal-body");
let modalImg = document.querySelector(".modal-img");
let modalTxt = document.querySelector(".modal-txt");

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
let toastImg = document.querySelector(".toast-img");
let toastTitle = document.querySelector(".toast-title");


let basketCountIconNumber = document.querySelector(".basket-count-icon-number")


const addToCart = document.querySelector(".add-to-cart")
let modalBodyCost = document.querySelector(".modal-body-cost")

let comment = document.createElement('div');

if(!localStorage.getItem('goods')) {
    localStorage.setItem('goods', JSON.stringify([]))
}




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