import * as $ from "jquery";
import * as data from '../../state/data.json'
import {Popup} from "./popUp";
import '../assets/themes/base/styles/base.less'
// let click = 0;
let cart = new Map;
let basketCount = $(".basket__counter");
let preBasket = [];
// let product = [];


const newPopup = new Popup(preBasket); // создание popUp

const allProduct: NodeListOf<HTMLElement> = document.querySelectorAll('.product-card');
document.onclick = (event: MouseEvent) => {
    let id: number
    if ((<HTMLElement>event.target).classList.contains('product-card__button')) {

        const button: HTMLElement = <HTMLElement>event.target
        id = +button.attributes[0].value;
    }
    let productToCart: HTMLElement = allProduct[id];
    console.log(productToCart);

};
//проверка на совпадение эллементов

// let pressBuy = (id: string) => {
//     console.log(id)
//     if (!cart.has(id)) {
//         cart.set(id, setData(id));
//         applyDiscount(cart)(discount);
//         newPopup.mapProductData(cart);
//         basketCount.empty()
//         // basketCount.append(cart.size);
//     } else {
//         cart.get(id).count++;
//     }
// }

