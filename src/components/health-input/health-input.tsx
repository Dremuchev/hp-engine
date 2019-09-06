import { Component, h } from "@stencil/core";

@Component({ tag: 'health-input' })
export class HealthInput {

    private handleInput = () => {}

    render() {
        return(
            <input type="text" value="" onInput={this.handleInput} />
        )
    }
}