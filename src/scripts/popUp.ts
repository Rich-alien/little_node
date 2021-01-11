import * as $ from "jquery";
import {ProductLine} from "./productLine";

let bsCount = $(".basket__counter");

export class Popup {

    mapProductData(productData) {
        let popupContainer = document.querySelector(".popup-container__product");
        bsCount.append(
            productData.forEach((item, index) => {
                item.counter = new ProductLine(item, popupContainer, index);
                item.counter.updateCount = (count) => {
                    item.count = count;
                };
            })
        )
    }

    constructor(private readonly preBasket: Array<string>) {
        console.log(preBasket);
        this.preBasket = preBasket;
        const template = <HTMLTemplateElement>document.getElementById("popup");
        const content = document.importNode(template.content, true);

        document.querySelector(".basket").addEventListener("click", () => $(".b-popup").show());
        content.querySelector(".button__popup").addEventListener("click", Popup.hideCart);

        document.querySelector(".header").appendChild(content);
        this.mapProductData(this.preBasket);
    }

    private static hideCart(): void {
        $(".b-popup").hide();
        $(".popup-container__product").empty();
        bsCount.empty();
    }
}