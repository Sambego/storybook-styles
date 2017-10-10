import React, { Component } from 'react';
import addons from '@storybook/addons';

export class StyleDecorator extends Component {
    constructor(props) {
        super(props);

        this.props.styles;
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

export default styles => {
    console.log('---', styles);
    return story => {
        return <StyleDecorator story={story} />;
    };
};
