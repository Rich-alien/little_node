export class CountProduct {
    _count: number;
    template: HTMLElement;
    inner: string;
    countElement: Element;

    getInnerHTML(count: number) {
        return `
        <div class="counter__increment">+</div>
        <p class="product__count">${count}</p>
        <div class="counter__decrement">-</div>
        `;
    }

    constructor(count, template: HTMLElement) {
        this.template = template;
        this.inner = this.getInnerHTML(count);
        this._count = count;
        console.log(this._count);
        let counterDiv : HTMLElement = document.createElement("div");
        counterDiv.className = "container-count";
        counterDiv.innerHTML = this.inner;
        this.template.appendChild(counterDiv);
        counterDiv.querySelector(".counter__increment").addEventListener("click", this.increment);
        counterDiv.querySelector(".counter__decrement").addEventListener("click", this.decrement);
        this.countElement = counterDiv.querySelector(".product__count");
    }

    increment(): void {
        if (this._count < 20) {
            this._count++;
            this.countElement.innerHTML = String(this._count);
            this.updatePrice(this._count);
        }
    }

    decrement(): void {
        if (this._count > 0) {
            this._count--;
            this.countElement.innerHTML = String(this._count);
            this.updatePrice(this._count);
        }
    }

    public updatePrice(_count: number) {
    }
}
