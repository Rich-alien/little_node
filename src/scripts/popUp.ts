class Popup {
    _productData;


    mapProductData(productData) {
        let popupContainer = document.querySelector(".popup-container__product");
        basketCount.append(
            productData.forEach((item, index) => {
                item.counter = new Product(item, popupContainer, index);
                item.counter.updateCount = (count) => {
                    item.count = count;
                };
            })
        )

    }

    constructor(productData) {
        this._productData = productData;
        const template = document.getElementById("popup");
        const content = document.importNode(template.content, true);
        document.querySelector(".basket").addEventListener("click", () => $(".b-popup").show());
        content.querySelector(".button__popup").addEventListener("click", this.hideCart);
        document.querySelector(".header").appendChild(content);
        this.mapProductData(this._productData);
    }

    hideCart = () => {
        $(".b-popup").hide();
        $(".popup-container__product").empty();
        basketCount.empty();
    }
}