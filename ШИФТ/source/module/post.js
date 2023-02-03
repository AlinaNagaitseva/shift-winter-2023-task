
const cartOrder = document.querySelector('.cart-item');

const sendData = async (url, data) => {

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: data,
    });

    if (!response.ok) {
        throw new Error("Ошибка по адресу ${url}, ${response}");
    }
    return await response.json();
};
const sendCart = () => {
    const cartForm = document.querySelector('.form');


    cartForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const card = document.querySelector('.col-lg-3');
        const title = card.querySelector('.card-title');
        const price = card.querySelector('[data-price]');
        const counter = card.querySelector('[data-counter]');
        const cartOrder = {
            title: title.innerText,
            price: price.innerText,
            counter: counter.innerText,
        }
        console.log(cartOrder);
        const formData = new FormData(cartForm);
        console.log(formData);
        formData.set('order', JSON.stringify(cartOrder));
        //const cartList = JSON.stringify(formData);
        const cartList = JSON.stringify(cartOrder);
        console.log(cartList);
        sendData("https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder/", cartList)
            .then(() => {
                cartForm.reset();
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
sendCart();