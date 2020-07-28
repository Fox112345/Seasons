import React from "react";
import ReactDOM from 'react-dom'



class App extends React.Component {

    render() {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
            },
            error => {
                console.log(error)
            });

        return(
            <>
                Hi!
            </>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))