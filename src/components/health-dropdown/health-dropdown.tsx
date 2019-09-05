import { Component, Prop, h, Element } from "@stencil/core";
import { INIT_ALIGN_CONFIG } from "./health-dropdown.constants";
import { DropdownAlignConfig } from "./health-dropdown.types";

@Component({
    tag: 'health-dropdown',
    shadow: true,
    styleUrl: 'health-dropdown.css'
})
export class HealtDropdown {
    @Element() healthDropdown: HTMLElement;

    private children: HTMLCollection = this.healthDropdown.children;

    @Prop() open: boolean = false;
    @Prop() alignConfig: DropdownAlignConfig = INIT_ALIGN_CONFIG;
    @Prop() container: HTMLElement = null;

    public hostData() {
        const { alignConfig, container } = this;
        const config = {};
        if (container) {
            const { height } = container.getBoundingClientRect();

            for (let [key, value] of Object.entries(alignConfig)) {
                switch (key) {
                    case 'top':
                        config[`--offset-${key}`] = `${value + height}px`;
                        break;
                    default:
                        config[`--offset-${key}`] = `${value}px`;
                }
            }
        }
        return { style: config };
    }

    render() {
        const { children, container, open } = this;
        return Boolean(children.length) && open && container && (
            <div class="dropdown-container">
                <div class="dropdown-paper">
                    <slot />
                </div>
            </div>
        )
    }
}