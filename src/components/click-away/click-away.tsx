import { Component, Host, h, Element, Prop } from "@stencil/core";

@Component({ tag: 'click-away', styleUrl: 'click-away.css' })
export class ClickAway {
    @Element() clickAwayRef: HTMLElement;
    @Prop() onClickAway: () => void;

    connectedCallback() {
        window.addEventListener('click', this.handleClickAway);
    }

    disconnectedCallback() {
        window.removeEventListener('click', this.handleClickAway);
    }

    ownerDocument(node) {
        return (node && node.ownerDocument) || document;
    }

    isDescendant = (el, target) => {
        if (target !== null && target.parentNode) {
            return el === target || this.isDescendant(el, target.parentNode);
        }
        return false;
    };

    handleClickAway = event => {
        if (event.defaultPrevented) {
            return;
        }
    
        const el = this.clickAwayRef;
        const doc = this.ownerDocument(el);
    
        if (
            doc.documentElement &&
            doc.documentElement.contains(event.target) &&
            this.isDescendant(el, event.target)
        ) {
            this.onClickAway();
        }
    };

    public render() {
        return (
            <Host>
                <slot />
            </Host>
        )
    }
}
