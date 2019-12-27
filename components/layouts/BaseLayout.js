import React from 'react';

import Header from '../shared/Header';

const BaseLayout = (props) => {
    return (
        <React.Fragment>
            <Header title='Hello'>
                <h1>NextJS</h1>
            </Header>
            {props.children}
        </React.Fragment>
    )
}

export default BaseLayout;