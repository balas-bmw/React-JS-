import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     timeNow: new Date().toLocaleTimeString()
        // }
        console.log('Message :: constructor()');
    }
    componentWillMount() {
        console.log('Message :: componentWillMount()');
    }
    render() {
        console.log('Message :: render()');
        let { message } = this.props;
        //let { timeNow } = this.state;
        //throw new Error('i hate react');
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                <button onClick={() => { this.forceUpdate() }} className="btn btn-warning">
                    <i className="glyphicon glyphicon-refresh"></i>
                </button>
            </div>
        );
    }
    componentDidMount() {
        console.log('Message :: componentDidMount()');
        // this.iteraval = setInterval(() => {
        //     this.setState({
        //         timeNow: new Date().toLocaleTimeString()
        //     });
        // }, 100);
    }

    componentWillReceiveProps(nextProps) {
        console.log('Message :: componentWillReceiveProps()');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Message :: shouldComponentUpdate()');

        //console.dir(this.props);
        //console.dir(nextProps);
        //console.log(this.state);
        //console.log(nextState);

        if (this.props.message !== nextProps.message)
            return true;
        else
            return false;

        // return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Message :: componentWillUpdate()');
    }

    // this.props  ==> prevProps
    // nextProps   ==> this.props 
    componentDidUpdate(prevProps, prevState) {
        console.log('Message :: componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('Message :: componentWillUnmount()');
        //clearInterval(this.iteraval);
    }


}


Message.defaultProps = {
    message: 'Nil'
}

Message.displayName = 'Greet';

export default Message;