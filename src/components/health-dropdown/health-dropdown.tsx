import { Component, Prop, h, Element } from "@stencil/core";

@Component({
    tag: 'health-dropdown',
    shadow: true,
    styleUrl: 'health-dropdown.css'
})
export class HealtDropdown {
    @Element() healthDropdown: HTMLElement;

    private children: HTMLCollection = this.healthDropdown.children;

    @Prop() open: boolean = false;

    render() {
        return Boolean(this.children.length) && this.open && (
            <div class="dropdown-container">
                <div class="dropdown-paper">
                    <slot name="template-item-slot" />
                </div>
            </div>
        )
    }
}