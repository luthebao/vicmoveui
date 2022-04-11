import PropTypes from 'prop-types';

const ButtonDefault = ({ children, buttonStyle, shapes, type, size, className, style, callback }) => {
    let classes = buttonStyle === 'flat' ? '' : 'shadow-2xl border-2 ';
    switch (size) {
        case 'sm':
            classes += shapes === 'circle' ? 'rounded-full p-2 ' : ' rounded-full text-xs px-6 py-1 ';
            break;
        case 'md':
            classes += shapes === 'circle' ? 'rounded-full p-3 ' : ' rounded-xl px-2 py-2 ';
            break;
        case 'xl':
            classes += shapes === 'circle' ? 'rounded-full p-4 ' : ' rounded-xl px-6 py-6 ';
            break;
        default:
            classes += shapes === 'circle' ? 'rounded-full p-4 ' : ' rounded-xl px-8 py-4 ';
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
