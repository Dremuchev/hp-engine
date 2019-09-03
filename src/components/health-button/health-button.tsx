import {
    Component,
    Element,
    Event,
    EventEmitter,
    Prop,
    h,
} from "@stencil/core";
import { ButtonType, ControlSize, ButtonEvent } from "./health-button.types";
import { ButtonsColor, ButtonsDimensions } from "./health-button.theme";
  
@Component({
    tag: "health-button",
    styleUrl: "health-button.css",
    shadow: true,
})
export class HealthButton {
    @Element() healthButtonEl: HTMLElement;

    @Event({ eventName: 'healthButton' }) healthButton: EventEmitter<ButtonEvent>;

    @Prop() disabled: boolean = false;
    @Prop() name: string = "Simple button";
    @Prop() type: ButtonType = 'primary';
    @Prop() size: ControlSize = 'medium';

    public hostData() {
        const { type, size } = this;
        return {
            style: {
                '--health-btn-rested-color': ButtonsColor[type].Rested,
                '--health-btn-hover-color': ButtonsColor[type].Hover,
                '--health-btn-pressed-color': ButtonsColor[type].Pressed,
                '--health-btn-text-color': ButtonsColor[type].Text,
                '--health-btn-inverted-text-color': ButtonsColor[type].InvertedText,
                '--health-btn-border-color': ButtonsColor[type].Border,
                '--health-btn-size': ButtonsDimensions[size].height,
                '--health-btn-padding': ButtonsDimensions[size].padding,
                '--health-btn-font-size': ButtonsDimensions[size].fontSize,
                '--health-btn-disable-text-color': ButtonsColor[type].DisableText,
                '--health-btn-disable-color': ButtonsColor[type].DisableBackgroundColor,
                '--health-btn-disable-border-color': ButtonsColor[type].DisableBorder,
            }
        };
    }


    public render() {
        const { disabled, handleClick } = this;
        return (
            <button id='health-button' onClick={handleClick} disabled={disabled}>
                <label class="label">{this.name}</label>
            </button>
        )
    };

    private handleClick = (event: MouseEvent) => {
        if (this.disabled) {
            return false;
        }
        this.healthButton.emit({
            event,
            name: 'health-button-click',
        });
    };
}