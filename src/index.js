import React, { Component } from 'react';

export class StyleDecorator extends Component {
    constructor(props) {
        super(props);

        this.story = this.props.story();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.story !== this.props.story) {
            this.story = nextProps.story();
        }
    }

    render() {
        return <div style={this.props.styles}>{this.story}</div>;
    }
}

export default styles => story => (
    <StyleDecorator story={story} styles={styles} />
);
