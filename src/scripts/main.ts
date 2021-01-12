import * as $ from "jquery";
import * as data from '../../state/data.json'
import {Popup} from "./popUp";
import '../assets/themes/base/styles/base.less'
// let click = 0;
let cart = new Map;
let preBasket = [];

let newPopup= new Popup(preBasket);



document.onclick = (event: MouseEvent) => {
    // console.log(<HTMLElement>event.target);
    if ((<HTMLElement>event.target).classList.contains('product-card__button')) {
        const button: HTMLElement = <HTMLElement>event.target;
        let id: number = +button.attributes[0].value;
        importToCart(id);
    }
    // else if((<HTMLElement>event.target).classList.contains('header_basket')) {
    //     $('.basketPopup').remove();
    //     newPopup= new Popup(preBasket);
    // }
    else{
        console.log('');
    }

};
//проверка на совпадение эллементов
let click = 0;
let importToCart = (id: number) => {
    if (!cart.has(id)) {
        cart.set(id, data[id]);
        $('.basketPopup').remove();
        newPopup.mapProductData(cart);
    } else {
        cart.get(id).count++;
    }
}

