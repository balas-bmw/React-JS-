import React, { Component } from 'react';

class Box extends Component {

    renderChildren(children) {
        return children.map((child, idx) => {
            return (
                <div className="list-group-item" key={idx}>
                    {child}
                </div>
            );
        })
    }

    render() {
        return (
            <div className="well">
                <div className="list-group">
                    {this.renderChildren(this.props.children)}
                </div>
            </div>
        );
    }
}

export default Box;