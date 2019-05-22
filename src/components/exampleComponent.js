import React from 'react';

class exampleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <div>Hello</div>
        )
    }
}

export default exampleComponent;