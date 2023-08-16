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


    let order = document.querySelector(".order")
    let orderCurrency = document.querySelector(".order-currency")
    let orderTotalCurrency = document.querySelector(".order-total-currency")
    let orderSale = document.querySelector(".order-sale")
   

    update_order_goods()


    function update_order_goods() {
        let totalOrderСost = 0
        let goods = JSON.parse(localStorage.getItem('goods')) 
        let ordersInfo = JSON.parse(localStorage.getItem('ordersInfo'))  
        order.innerHTML = ""
        if(goods.length) {
            for (let i = 0; i < goods.length; i++) {
                order.append(createOrder())
                scoreOrderCount()
                function createOrder() {
                    let bodyOrder = document.createElement('div');
                    bodyOrder.className = 'order-body';
                    bodyOrder.insertAdjacentHTML('beforeend', `<div class="order-image">
                                                <img src="${goods[i][1]}">
                                            </div>
                                            <div class="order-name">
                                                ${goods[i][2]}
                                            </div>
                                            <div class="order-count">
                                                <button class="order-count-minus"><span>-</span></button>
                                                <span class="order-display-count">${goods[i][4]}</span>
                                                <button class="order-count-plus"><span>+</span></button>
                                            </div>
                                            <div class="order-prise">
                                                <span class="order-currency">${goods[i][3] * goods[i][4]}</span>
                                                <span>₽</span>
                                            </div>`);   

                console.log('chmo')
                totalOrderСost += Number(goods[i][3] * goods[i][4])    //Total Cost
                return bodyOrder;
                }

            }
        }
        

        orderCurrency.innerHTML = `${totalOrderСost} ₽`
        orderTotalCurrency.innerHTML = `${totalOrderСost} ₽`
        if (ordersInfo.length) {
        orderSale.innerHTML = `${totalOrderСost * ordersInfo[0][0] / 100}`
        orderTotalCurrency.innerHTML = `${totalOrderСost - orderSale.innerHTML} ₽`
        }
    }
    
    function scoreOrderCount() {
        let countOrderPlus = document.querySelectorAll(".order-count-plus")
        let countOrderMinus = document.querySelectorAll(".order-count-minus") 
       
    for (let i = 0; i < countOrderPlus.length; i++) {
        let goods = JSON.parse(localStorage.getItem('goods')) 

        countOrderPlus[i].onclick = function() {
            goods[i].splice(4,1, goods[i][4] + 1)
            localStorage.setItem('goods', JSON.stringify(goods))
            update_order_goods() 
            update_goods()        
        }

        countOrderMinus[i].onclick = function() {   
            if (goods[i][4] == 1) {
                goods.splice(i, 1)
                localStorage.setItem('goods', JSON.stringify(goods))
                update_order_goods()
                update_goods()  
            } else {
                goods[i].splice(4,1, goods[i][4] - 1)
                localStorage.setItem('goods', JSON.stringify(goods))
                update_order_goods()
                update_goods()  
            }
        }
        
    }
    }


//new local St

if(!localStorage.getItem('ordersInfo')) {
    localStorage.setItem('ordersInfo', JSON.stringify([]))
}







// Validation and Order

    IMask(
        document.getElementById('ttt'),
        {
          mask: '+{7}(000)000-00-00'
        }
      )


    let labelInput = document.querySelector(".label-input")
    let numberSpan = document.querySelector(".number-span")
    let infoBox2 = document.querySelector('.info-box2')

      document.getElementById('ttt').onblur = function() {
        if (document.getElementById('ttt').value.length == 16) { 
            infoBox2.id = "valid"
            numberSpan.innerHTML = ""
        }
        if (!document.getElementById('ttt').value || !(document.getElementById('ttt').value.length == 16)) { 
            infoBox2.id = "invalid"
            numberSpan.innerHTML = "Некоректный номер телефона"
        }
      };


    let infoName = document.querySelector(".info-name")
    let infoNameSpan = document.querySelector(".info-name-span")
    let infoBox1 = document.querySelector('.info-box1')

    infoName.onblur = function() {
        if(infoName.value == "") {
            infoBox1.id = "invalid"
            infoNameSpan.innerHTML = "Пожалуйста, заполните имя"
        } else {
            const regex = /^[а-яА-Я\s]+$/;                
            if(regex.test(infoName.value) === false) {
                infoBox1.id = "invalid"
                infoNameSpan.innerHTML = "Имя может содержать символы кириллицы и пробел"
            } else {
                infoBox1.id = "valid"
                infoNameSpan.innerHTML = ""
            }
        }
    }

    let infoAdres = document.querySelector(".info-adres")
    let adresSpan = document.querySelector(".adres-span")
    let infoBox4 = document.querySelector('.info-box4')

    infoAdres.onblur = function() {
        if(infoAdres.value == "") {
            infoBox4.id = "invalid"
            adresSpan.innerHTML = "Пожалуйста, заполните адрес"
        } else {
            const regex = /^[а-яА-Я0-9.\s]+$/;                
            if(regex.test(infoAdres.value) === false) {
                infoBox4.id = "invalid"
                adresSpan.innerHTML = "Адрес может содержать символы кириллицы цифры и пробел"
            } else {
                infoBox4.id = "valid"
                adresSpan.innerHTML = ""
            }
        }
    }

    let infoPromo = document.querySelector(".info-promo")
    let promoSpan = document.querySelector(".promo-span")
    let infoBox3 = document.querySelector('.info-box3')
    let btnPromo = document.querySelector(".btn-promo")
    let skidki = ["Skidos14", "loh2", "pidr"]


    infoPromo.onblur = function() {
        let ordersInfo = JSON.parse(localStorage.getItem('ordersInfo'))  
        if(infoPromo.value == "") {
            infoBox3.id = ""
            promoSpan.style.color = "rgb(226, 226, 226)"
            promoSpan.innerHTML = ""
        } else if ((infoPromo.value == skidki[0]) || (infoPromo.value == skidki[1]) || (infoPromo.value == skidki[2])) {
            btnPromo.style.display = "block"
            btnPromo.onclick = function() {
                infoBox3.id = "valid"
                promoSpan.style.color = "rgb(105, 196, 124)"
                promoSpan.innerHTML = "Промокод на скидку 10% активирован"
                ordersInfo.push([10])
                localStorage.setItem('ordersInfo', JSON.stringify(ordersInfo))
                update_order_goods()
                btnPromo.style.display = "none"
            }
            } else {
                btnPromo.style.display = "block"
                btnPromo.onclick = function() {
                    infoBox3.id = "invalid"
                    promoSpan.style.color = "rgb(196, 105, 105)"
                    promoSpan.innerHTML = "Промокод введен некорректно, попробуйте еще раз."
                    btnPromo.style.display = "none"
                }

            }
        }



let btnOrder = document.querySelector(".btn-order")




    btnOrder.onclick = function() {
        if ((infoBox2.id == "") & (infoBox1.id == "") & (infoBox4.id == "")) {
            window.location='#article'
            infoBox2.id = "invalid"
            infoBox1.id = "invalid"
            infoBox4.id = "invalid"
        }
        if ((infoBox2.id == "valid") & (infoBox1.id == "valid") & (infoBox4.id == "valid")) {
            let goods = JSON.parse(localStorage.getItem('goods')) 
            let ordersInfo = JSON.parse(localStorage.getItem('ordersInfo')) 
            for (i = 0; i < goods.length; i++) {
                ordersInfo.push( `Название: ${goods[i][2]}`, `Цена: ${goods[i][3]}`, `Количество: ${goods[i][4]}`)
            }
            ordersInfo.push(`Сумма скидки: ${orderSale.innerHTML}`, `Итоговая сумма: ${orderTotalCurrency.innerHTML}`,"---Данные заказчика---",`Имя: ${infoName.value}`, `Номер телефона: ${document.getElementById('ttt').value}`, `Адрес: ${infoAdres.value}`,`Промокод: ${infoPromo.value}`)
            localStorage.setItem('ordersInfo', JSON.stringify(ordersInfo))
        } else {
            window.location='#article'
 
            alert(infoBox2.id)
            alert(infoBox1.id)
            alert(infoBox4.id)
        }


    }