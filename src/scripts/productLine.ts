import { CountProduct} from "./count";
import {Product} from "./product";

export class ProductLine {
    private _count;
    private newCounter;

    constructor(product: Product, wrapper: Element, index: number) {
        this.createProduct(product,wrapper,index);
    }

    createProduct(product,wrapper,index) {
        debugger;
        let template = document.createElement("div");
        template.className = ("basketPopup");
        template.innerHTML = `<p class="basket__name">${product.name}</p>
                              <p class="basket__country">${product.country}</p>
                              <p class="basket__price">${product.price * product.count}</p>
           `;
        const counter : CountProduct = new CountProduct(product.count, template);
        wrapper.append(template);
        counter.updatePrice = (count : number) => {
            this._count = count;
            counter.updatePrice(this._count);
            template.querySelector(".basket__price").innerHTML = String(this._count * product.price);
        }
    }
}