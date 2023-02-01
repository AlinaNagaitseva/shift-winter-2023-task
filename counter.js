
//Увеличение/уменьшение количества товара
window.addEventListener('click', function (event) {
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterParents = event.target.closest('.counter-parents');
        const counter = counterParents.querySelector('[data-counter]');

        if (event.target.dataset.action === 'plus') {

            counter.innerText = ++counter.innerText;
        }
        if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 0) {
                counter.innerText = --counter.innerText;
            }
        }
        
    }
})

//Добавление товаров в корзину
const cartParents = document.querySelector('.cart-item-main');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.col-lg-4')
        const productInfo = {
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.card-title').innerText,
            price: card.querySelector('[data-price]').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };
        const cartItemHTML = `<div class = "cart-item">
        <div class="card mt-4" style="width: 16rem; height: 18rem;">
            <img src="${productInfo.imgSrc}" class="card-img-top" alt="...">
            <div class="card-body item">
                <div class="card-title">${productInfo.title}</div>
                <div class = "btn btn-warning" data-counter>${productInfo.counter}</div>
                <span class = "price" data-price> ${productInfo.price} </span>
            </div>
          </div>
          </div>`;
        cartParents.insertAdjacentHTML('beforeend', cartItemHTML);
        calcCart();
        
    }
})
//Удаление товаров из корзины
window.addEventListener('click', function (event) {
if(event.target.hasAttribute('data-delete')) {
    const list = document.querySelectorAll('.cart-item')
    list.forEach(function(item) {
        item.remove();
    }) 
    calcCart();
}
})
//Подсчёт итоговой суммы в корзине
function calcCart () {
    const cartItems = document.querySelectorAll('.item')
    const cartPrice = this.document.querySelector('.cart-price');
    let totalPrice = 0;
    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice+=currentPrice;
    })
    cartPrice.innerText = totalPrice;
}


