import PropTypes from 'prop-types';

const PageNavigateBtn = ({ children, className, callback }) => {

    return (
        <div className={'text-gray-400 text-4xl ' + (className || '')}>
            {children}
        </div>
    );
}

PageNavigateBtn.propTypes = {
    className: PropTypes.string,
    callback: PropTypes.func,
};


export default PageNavigateBtn;
