import { Component, h, State } from "@stencil/core";
import { DropdownAlignConfig } from "../health-dropdown/health-dropdown.types";

@Component({
    tag: 'health-toggle-menu',
    styleUrl: 'health-toggle-menu.css',
    shadow: true,
})
export class HealthToogleMenu {
    private static offsetConfig: DropdownAlignConfig = { top: 7 };
    private containerRef!: HTMLElement;

    @State() dopdownIsOpen: boolean = false;

    handleToggle = () => {
        this.dopdownIsOpen = !this.dopdownIsOpen;
    }

    setContainerRef = (el: HTMLElement) => {
        this.containerRef = el;
    }

    render() {
        const { dopdownIsOpen, setContainerRef, handleToggle, containerRef } = this;
        const togglerClassName = `toggler-container ${dopdownIsOpen ? 'open' : 'close'}`;

        return (
            <div class="container" ref={setContainerRef}>
                <div class={togglerClassName} onClick={handleToggle}>
                    <slot name="toggler" />
                </div>
                <div class="dropdown-container">
                    <health-dropdown
                        open={dopdownIsOpen}
                        class={dopdownIsOpen ? 'open' : 'close'}
                        alignConfig={HealthToogleMenu.offsetConfig}
                        container={containerRef}
                    >
                        <slot name="item-template" />
                    </health-dropdown>
                </div>
            </div>
        );
    }
}