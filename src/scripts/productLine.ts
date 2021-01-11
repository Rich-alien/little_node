class Product {
    _product;
    wrapper;
    _index;
    _count;
    newCounter;

    constructor(product, wrapper, index) {
        this._product = product;
        this.wrapper = wrapper;
        this._index = index;
        this.createProduct();
    }

    createProduct() {
        let template = document.createElement("div");
        template.className = ("basketPopup");
        template.innerHTML = `<p class="basket__name">${this._product.name}</p>
                              <p class="basket__country">${this._product.country}</p>
                              <p class="basket__price">${this._product.price * this._product.count}</p>
           `;
        this.newCounter = new Count(this._product.count, template);
        this.wrapper.append(template);
        this.newCounter.updatePrice = (count) => {
            this._count = count;
            this.updateCount(this._count);
            template.querySelector(".basket__price").innerHTML = this._count * this._product.price;
        }
    }
}