import PropTypes from 'prop-types';

const TextHeader = ({ children, size, textColor, className, onClick }) => {
    let classes = textColor ? textColor : 'text-black'
    switch (size) {
        case 'lg':
            classes += ' text-5xl text-center py-6 leading-14 ';
            break;
        case 'md':
            classes += ' text-4xl text-center py-4 leading-12 ';
            break;
        case 'md-left':
            classes += ' text-4xl py-4 leading-12 ';
            break;
        case 'xs':
            classes += ' text-xl py-2 ';
            break;
        default:
            classes += ' text-3xl py-2 ';
            break;
    }

    return (
        <div className={classes + (className || '')} onClick={onClick}>
            {children}
        </div>
    );
}

TextHeader.propTypes = {
    size: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default TextHeader;
