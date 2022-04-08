import PropTypes from 'prop-types';

const Header = ({ children, size, classes }) => {
    let className = 'text-black';
    switch (size) {
        case 'lg':
            className += ' text-5xl text-center py-8 ';
            break;
        case 'md':
            className += ' text-4xl text-center py-4 ';
            break;
        case 'md-left':
            className += ' text-4xl py-4 ';
            break;
        default:
            className += ' text-3xl ';
            break;
    }

    return (
        <div className={className + (classes || '')}>
            {children}
        </div>
    );
}

Header.propTypes = {
    size: PropTypes.string.isRequired,
    classes: PropTypes.string,
};

export default Header;
