import { Component, h, State, EventEmitter, Event, Prop } from "@stencil/core";
import { DropdownAlignConfig } from "../health-dropdown/health-dropdown.types";

@Component({
    tag: 'health-toggle-menu',
    styleUrl: 'health-toggle-menu.css',
})
export class HealthToogleMenu {
    private offsetConfig: DropdownAlignConfig = { top: 7 };
    private containerRef!: HTMLElement;

    @Prop() options: string = '';
    @State() dopdownIsOpen: boolean = false;
    @Event({ eventName: 'toggleMenuItemSelect' }) toggleMenuItemSelect: EventEmitter<{ event: MouseEvent, name: string}>

    private handleToggle = () => {
        this.dopdownIsOpen = !this.dopdownIsOpen;
    }

    private handleItemSelect = (name: string) => (event: MouseEvent) => {
        this.handleToggle();
        this.toggleMenuItemSelect.emit({ event, name });
    }

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

    private renderItemsList = () => (
        JSON.parse(this.options).map(item => (
            <div class="menu-item" onClick={this.handleItemSelect(item)}>{item}</div>
        ))
    )

    public render() {
        const { dopdownIsOpen, setContainerRef, handleToggle, options } = this;

        return (
            <div class="container" ref={setContainerRef}>
                <div class="toggler-container" onClick={handleToggle}>
                    <slot name="toggler" />
                </div>
                {dopdownIsOpen && Boolean(options.length) && <div class="dropdown-container">
                    {this.renderItemsList()}
                </div>}
            </div>
        );
    }
}