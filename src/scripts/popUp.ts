import {ProductLine} from "./groupProducts";
import {Product} from "./product";

export class Popup{
    private readonly _productData: DocumentFragment;
    private _modalWrapper: HTMLElement;
    private readonly wrapper: HTMLElement;
    private _modal: HTMLTemplateElement;
    constructor(private dataInCart: Map<string, Product>) {
        this._modal = <HTMLTemplateElement>document.getElementById('modal');
        this._modalWrapper = document.getElementById('modal-wrapper');
        // this.cartCounter = document.getElementById('body-counter');
        this.wrapper = <HTMLElement>this._productData.querySelector('.list__product');
       this.dataInCart = dataInCart;
        this._productData = document.importNode(this._modal.content, true);
        const contentEvent: HTMLElement = this._productData.querySelector('.modal__btn-close');

        contentEvent.onclick = (event:MouseEvent) => {
            this._modalWrapper.innerHTML = '';
        };

        // (this.content.querySelector('.modal__btn-drop') as HTMLElement).onclick = (event) => {
        //     this.removeAllProducts();
        // };
        //
        // this.renderList();
        // this.modalWrapper.appendChild(this.content);

    }

    private renderList(): void {
        this.dataInCart.forEach((product, index) => {
            const productLine = new ProductLine(this.wrapper, product, Number(index));
            productLine.updateValues = (updatedProduct) => {
                this.dataInCart.set(index, <Product>updatedProduct);
            }
            productLine.deleteLine = () => {
                this.dataInCart.delete(index);
            }
        });
    }
//ставить
    private removeAllProducts(): void {
        // this.cartCounter.innerHTML = '';
        this.dataInCart.clear();
        this.wrapper.innerHTML = '';

    }
}
//class Popup {


//     mapProductData(productData) {
//         let popupContainer = document.querySelector(".popup-container__product");
//         basketCount.append(
//             productData.forEach((item, index) => {
//                 item.counter = new Product(item, popupContainer, index);
//                 item.counter.updateCount = (count) => {
//                     item.count = count;
//                 };
//             })
//         )
//
//     }
//
//     constructor(productData) {
//         this._productData = productData;
//         const template = document.getElementById("popup");
//         const content = document.importNode(template.content, true);
//         document.querySelector(".basket").addEventListener("click", () => $(".b-popup").show());
//         content.querySelector(".button__popup").addEventListener("click", this.hideCart);
//         document.querySelector(".header").appendChild(content);
//         this.mapProductData(this._productData);
//     }
//
//     hideCart = () => {
//         $(".b-popup").hide();
//         $(".popup-container__product").empty();
//         basketCount.empty();
//     }
// }