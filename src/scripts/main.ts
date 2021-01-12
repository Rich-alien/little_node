import * as $ from "jquery";
import * as data from '../../state/data.json'
import {Popup} from "./popUp";
import '../assets/themes/base/styles/base.less'
// let click = 0;
let cart = new Map;
let basketCount = $(".basket__counter");
let preBasket = [];
let newPopup = new Popup(preBasket);



document.onclick = (event: MouseEvent) => {
    if ((<HTMLElement>event.target).classList.contains('product-card__button')) {
        // $('.basketPopup').remove();
        const button: HTMLElement = <HTMLElement>event.target;
        let id: number = +button.attributes[0].value;
        importToCart(id);
    }
    else{
        console.log('');
    }

};
//проверка на совпадение эллементов

let importToCart = (id: number) => {
    if (!cart.has(id)) {
        cart.set(id, data[id]);
        newPopup.mapProductData(cart);
    } else {
        cart.get(id).count++;
    }
}

