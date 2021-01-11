export class CountProduct {
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

    constructor(count, template: HTMLElement) {
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

    private increment():void {
        if (this._count < 20) {
            this._count++;
            this.countElement.innerHTML = this._count;
            this.updatePrice(this._count);
        }
    }
   private decrement():void {
        if (this._count > 0) {
            this._count--;
            this.countElement.innerHTML = this._count;
            this.updatePrice(this._count);
        }
    }
    public updatePrice(value: number): void {}
}