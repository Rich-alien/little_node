import * as $ from "jquery";
import * as data from '../../state/data.json'
// let click = 0;
let cart = new Map;
let basketCount = $(".basket__counter");
let preBasket = [];
// let product = [];
const discount = 0.3;
function processCart(f) {
    return function (data) {
        return function (discount) {
            return f(data, discount);
        }
    }
}


const calculationDiscount  = (data, discount) => {
    data.map(item => {
        item.price -= (item.price * discount);
    })
}

let applyDiscount = processCart(calculationDiscount );



const newPopup = new Popup(preBasket);

const initProducts = () => {
    $(".basket__counter").append(cart.size);
    data.forEach(item => {
        $('.product-list').append(`
            <div class="product-card">
                <div class="product-card__image">
                    <img style="width: auto" src="" alt="zzzz">
                </div>
                <div class="product-cart__info">
                    <div class="product-card__info-name">Name: <p class="product-card__name">${item.name}</p></div>
                    <div class="product-card__info-country">country: <p class="product-card__country">${item.country}</p></div>
                    <div class="product-card__info-year">year: <p class="product-card__year">${item.year}</p></div>
                    <div class="product-card__info-blade">blade:<p class="product-card__blade">${item.blade}</p></div>
                    <div class="product-card__info-price">price:<p class="product-card__price">${item.price}</p></div>
                </div>
                <div class="product-card__more-info">
                     <button onclick="pressBuy(${item.id})" class="product-card__button">buy</button>
                 </div>
            </div>`)
    })
}
const setData = (id) => {
    return (
        {
            id: data[id].id,
            name: data[id].name,
            country: data[id].country,
            year: data[id].year,
            blade: data[id].blade,
            description: data[id].description,
            price: data[id].price,
            count: data[id].count,
        }
    )

}
const pressBuy = (id) => {
    if (!cart.has(id)) {
        cart.set(id, setData(id));
        applyDiscount(cart)(discount);
        newPopup.mapProductData(cart);
        basketCount.empty()
        basketCount.append(cart.size);
    } else {
        cart.get(id).count++;
    }
}
