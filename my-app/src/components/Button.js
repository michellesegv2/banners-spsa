// Read whole spreadsheet
import React from 'react';
export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="button">
                {this.props.title}
            </div>
        );
    }
}
