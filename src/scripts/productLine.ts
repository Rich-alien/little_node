import { CountProduct} from "./countProduct";
import {Product} from "./product";

export class ProductLine {
    private _count : number;

    constructor(product: Product, wrapper: Element, index: number) {
        this.createProduct(product,wrapper);
    }

    createProduct(product:Product,wrapper : Element) {
        let template : HTMLElement = document.createElement("div");
        template.className = ("basketPopup");
        template.innerHTML = `<p class="basket__name">${product.name}</p>
                              <p class="basket__price">${product.price * product.count}`;

        const counter : CountProduct = new CountProduct(product.count, template);
        counter.updatePrice = (count) => {
            this._count = count;
            this.updateCount(this._count);
            template.querySelector(".basket__price").innerHTML = String(count * product.price);
        }
        wrapper.append(template);
    }

    public updateCount(_count: number) {

    }
}
