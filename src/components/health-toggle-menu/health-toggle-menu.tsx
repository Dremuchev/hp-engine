import { Component, h, State, EventEmitter, Event, Prop, Listen } from "@stencil/core";
import { DropdownAlignConfig } from "../health-dropdown/health-dropdown.types";
import { CustomMouseEvent } from "../../custom.types";

@Component({
    tag: 'health-toggle-menu',
    styleUrl: 'health-toggle-menu.css',
    shadow: true,
})
export class HealthToogleMenu {
    private offsetConfig: DropdownAlignConfig = { top: 7 };
    private containerRef!: HTMLElement;

    @Prop({ reflectToAttr: true }) test: () => void;

    @Prop() options: string = '';
    @State() dopdownIsOpen: boolean = false;
    @Event({ eventName: 'toggleMenuItemSelect' }) toggleMenuItemSelect: EventEmitter<CustomMouseEvent>

    @Listen('click') clickListenner() {
        this.handleToggle();
    }

    private handleToggle = () => {
        this.dopdownIsOpen = !this.dopdownIsOpen;
    }

    private handleItemSelect = (name: string) => (event: MouseEvent) => {
        this.test();
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
        const { dopdownIsOpen, setContainerRef, options } = this;
        const dropdownShown = dopdownIsOpen && Boolean(options.length);

        return (
            <div class="container" ref={setContainerRef}>
                <div class="toggler-container">
                    <slot name="toggler"/>
                </div>
                {dropdownShown && (
                    <div class="dropdown-container">
                        {this.renderItemsList()}
                    </div>
                )}
            </div>
        );
    }
}