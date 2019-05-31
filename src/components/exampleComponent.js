import React from 'react';

const messageWindowStyle = {
    // Height is '70vh' here because headerBar component is 20, textBox is 10, and so messageWindow should fill the remaining 'percentage' of viewport height/
    flex: '80%',
    height: '70vh',
    backgroundColor: 'white',
    padding: '5px',
    paddingLeft: '15px',
    overflowY: 'scroll',   
}

class ExampleComponent extends React.Component {

    render() {
        return(
            <div style = {messageWindowStyle}>
            </div>
        )
    }
}

export default ExampleComponent;