/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ButtonEvent,
  ButtonType,
  ControlSize,
} from './components/health-button/health-button.types';

export namespace Components {
  interface HealthButton {
    'disabled': boolean;
    'name': string;
    'size': ControlSize;
    'type': ButtonType;
  }
}

declare global {


  interface HTMLHealthButtonElement extends Components.HealthButton, HTMLStencilElement {}
  var HTMLHealthButtonElement: {
    prototype: HTMLHealthButtonElement;
    new (): HTMLHealthButtonElement;
  };
  interface HTMLElementTagNameMap {
    'health-button': HTMLHealthButtonElement;
  }
}

declare namespace LocalJSX {
  interface HealthButton extends JSXBase.HTMLAttributes<HTMLHealthButtonElement> {
    'disabled'?: boolean;
    'name'?: string;
    'onHealthButton'?: (event: CustomEvent<ButtonEvent>) => void;
    'size'?: ControlSize;
    'type'?: ButtonType;
  }

  interface IntrinsicElements {
    'health-button': HealthButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


