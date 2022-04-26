import PropTypes from 'prop-types';

const BoxCard = ({ children, className, type, style, callback }) => {
    let classes = '';
    switch (type) {
        case 'flat':
            classes = '';
            break;
        case 'flat-border':
            classes = 'border-2 border-vicm-green-500 ';
            break;
        default:
            classes = 'shadow-xl ';
            break;
    }
    return (
        <div onClick={callback}
            style={style}
            className={classes + 'rounded-3xl relative px-4 py-4 bg-white ' + (className || '')}>
            {children}
        </div>
    );
}

BoxCard.propTypes = {
    style: PropTypes.instanceOf(Object),
    className: PropTypes.string,
    callback: PropTypes.func,
};


export default BoxCard;
