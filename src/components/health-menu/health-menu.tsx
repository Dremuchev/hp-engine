import { Component, h, Prop, Listen, Element, Method } from "@stencil/core";
import { DropdownAlignConfig } from "../health-dropdown/health-dropdown.types";

@Component({
    tag: 'health-menu',
    styleUrl: 'health-menu.css',
    shadow: true,
})
export class HealthMenu {
    @Element() healthMenu: HTMLElement;

    @Prop() open: boolean = false;
    
    private offsetConfig: DropdownAlignConfig = { top: 7 };
    private containerRef: HTMLElement;

    @Listen('click') clickListenner() {
        this.setOpenMenu();
    }

    @Method() setOpenMenu() {
        const isOpen = this.healthMenu.getAttribute('open');
        
        if (!isOpen) {
            this.healthMenu.setAttribute('open', 'true');
        } else {
            this.healthMenu.removeAttribute('open');
        }
    };

    private setContainerRef = (el: HTMLElement) => {
        this.containerRef = el;
    }
    
    public hostData() {
        const { offsetConfig, containerRef } = this;
        const config = {};
        if (containerRef) {
            const { height } = containerRef.getBoundingClientRect();

            for (let [key, value] of Object.entries(offsetConfig)) {
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

    public render() {
        const { setContainerRef, open } = this;

        return (
            <div class={{"container": true, "open": open}} ref={setContainerRef}>
                <div class="toggler-container">
                    <slot name="toggler"/>
                </div>
                <div class="dropdown-container">
                    <slot name="items"/>
                </div>
            </div>
        );
    }
}