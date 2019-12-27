import React from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';

import BaseLayout from '../components/layouts/BaseLayout';

class Portfolio extends React.Component {
    static async getInitialProps({ query }) {
        const postId = query.id;
        let portfolio = {};
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
            portfolio = (await res).data;
        } catch (err) {
            console.error(err);
        }
        return {
            portfolio
        }
    }

    render() {
        const { portfolio } = this.props;
        return (
            <BaseLayout>
                <h1>Portfolio</h1>
                <p>{this.props.router.query.id}</p>
                <p>{portfolio.title}</p>
                <p>{portfolio.body}</p>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);