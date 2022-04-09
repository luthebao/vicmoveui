import PropTypes from 'prop-types';

const ButtonDefault = ({ children, buttonStyle, shapes, type, size, className, style, callback }) => {
    let classes = buttonStyle === 'flat' ? '' : 'shadow-2xl border-2 ';
    classes += shapes === 'circle' ? 'rounded-full p-2 ' : '';
    switch (size) {
        case 'sm':
            classes += ' rounded-full text-xs px-6 py-1';
            break;
        case 'md':
            classes += ' rounded-xl px-6 py-3';
            break;
        default:
            classes += shapes === 'circle' ? 'rounded-full p-2 ' : ' px-8 py-4 rounded-xl';
            break;
    }

    return (
        <button
            type={type}
            className={classes + ' uppercase btn text-white hover:opacity-90 ' + (className || '')}
            style={{ ...style }} onClick={callback}>
            {children}
        </button>
    );
}

ButtonDefault.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    callback: PropTypes.func,
};



export default ButtonDefault;
