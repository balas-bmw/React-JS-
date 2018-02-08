import React, { Component } from 'react';

class HitButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        //this.handleBtnClick = this.handleBtnClick.bind(this);
        console.log('HitButton instance created');
    }

    handleBtnClick() {
        let { label } = this.props;
        this.setState({
            count: this.state.count + Number.parseInt(label)
        })
        let { onHit } = this.props;
        onHit(Number.parseInt(label));
    }

    render() {
        console.log('HitButton render()');
        let { label } = this.props;
        let { count } = this.state;
        return (
            <div style={{ float: 'left' }}>
                <div class="well">
                    <button onClick={() => { this.handleBtnClick() }} className="btn btn-primary">
                        {label} => <span className="badge">{count}</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default HitButton;