import React from 'react';
import axios from 'axios';

import { Link } from '../routes';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Portfolios extends React.Component {
    static async getInitialProps() {
        let posts = [];
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = (await res).data;
        } catch (err) {
            console.error(err);
        }
        return {
            posts: posts.splice(0, 10)
        }
    }

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <li key={post.id}>
                    <Link route={`/portfolio/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            )
        });
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <BasePage>
                    <h1>Portfolios</h1>
                    <ul>{this.renderPosts(posts)}</ul>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios;