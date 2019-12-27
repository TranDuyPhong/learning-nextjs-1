import React from 'react';
import axios from 'axios';

import SuperComponent from '../components/SuperComponent';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends SuperComponent {
    static async getInitialProps() {
        let todo = {};
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            todo = await res.data;
        } catch (err) {
            console.error(err);
        }
        return {
            todo
        }
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.sayHi();
        console.log(this.title);
    }
    
    render() {
        const { todo } = this.props;
        return (
            <BaseLayout>
                <h1>Index</h1>
                {todo.title}
            </BaseLayout>
        )
    }
}

export default Index;