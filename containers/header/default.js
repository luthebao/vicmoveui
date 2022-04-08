import PropTypes from 'prop-types';

const HeaderContainer = ({ children, classes }) => {
    return (
        <div className={'p-4 flex justify-between items-center relative ' + (classes || '')} style={{ minHeight: '80px' }}>
            {children}
        </div>
    );
}

HeaderContainer.propTypes = {
    size: PropTypes.string.isRequired,
    classes: PropTypes.string,
};

export default HeaderContainer
