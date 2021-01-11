class Count {
    _count = 0;
    template;
    inner;
    countElement;

    getInnerHTML(count) {
        return `
        <div class="increment">+</div>
        <p class="product__count">${count}</p>
        <div class="decrement">-</div>
        `;
    }

    constructor(count, template) {
        this.template = template;
        this.inner = this.getInnerHTML(count);
        this._count = count;
        let counterDiv = document.createElement("div");
        counterDiv.className = "container-count";
        counterDiv.innerHTML = this.inner;
        this.template.appendChild(counterDiv);
        counterDiv.querySelector(".increment").addEventListener("click", this.increment);
        counterDiv.querySelector(".decrement").addEventListener("click", this.decrement);
        this.countElement = counterDiv.querySelector(".product__count");
    }

    increment = () => {
        if (this._count < 20) {
            this._count++;
            this.countElement.innerHTML = this._count;
            this.updatePrice(this._count);
        }
    }
    decrement = () => {
        if (this._count > 0) {
            this._count--;
            this.countElement.innerHTML = this._count;
            this.updatePrice(this._count);
        }
    }
}