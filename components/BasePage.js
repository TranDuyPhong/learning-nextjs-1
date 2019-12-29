import { PropTypes } from 'react';
import { Container } from 'reactstrap';

const BasePage = (props) => {
    // const { className } = props;
    // const className = props.className || '';
    return (
        <div className={`base-page ${props.className}`}>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}

BasePage.defaultProps = {
    className: ''
}

BasePage.propTypes = {
    className: PropTypes.string.isRequired
}

export default BasePage;