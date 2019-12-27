import React from 'react';

class SuperComponent extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'SuperComponent';
    }

    sayHi = () => {
        console.log('sayHi');
    }

    render() {
        return null;
    }
}

export default SuperComponent;