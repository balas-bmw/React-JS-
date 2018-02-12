import React, { Component } from 'react';

class ViewCart extends Component {

    renderCartItem() {
        let { items } = this.props;
        return items.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <table className="table table-bordered table-condensed">
                    <tbody>
                        {this.renderCartItem()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewCart;