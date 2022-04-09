import PropTypes from 'prop-types';

const HeaderContainer = ({ children, classes, style }) => {
    return (
        <div className={'p-4 flex justify-between items-center relative ' + (classes || '')} style={{ minHeight: '80px', ...style }}>
            {children}
        </div>
    );
}

HeaderContainer.propTypes = {
    classes: PropTypes.string,
};

export default HeaderContainer
