


//-------------------------------------------
// step-1 : create component-class

// class HelloWorld extends React.Component {
//     render() {
//         let ele = React.createElement(
//             'div',
//             { className: 'jumbotron' },
//             React.createElement(
//                 'div',
//                 { className: 'alert alert-info' },
//                 'Hello All !, welcome to React')
//         );
//         return ele;
//     }
// }

//--------------------------------------------------------------

// with JSX
class HelloWorld extends React.Component {
    render() {
        let ele = (
            <div className="jumbotron">
                <div className="alert alert-info">Welcome again</div>
            </div>
        );
        return ele;
    }
}
//--------------------------------------------------------------

// step-2 : create component-instance
let helloWorld = React.createElement(HelloWorld, null, null);
ReactDOM.render(helloWorld, document.getElementById('root'));
//-------------------------------------------