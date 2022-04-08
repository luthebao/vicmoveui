import PropTypes from 'prop-types';

const BoxCard = ({ children, className, style }) => {

    return (
        <div
            style={style}
            className={'relative rounded-3xl px-8 py-4 shadow-xl bg-white ' + (className || '')}>
            {children}
        </div>
    );
}

BoxCard.propTypes = {
    style: PropTypes.string,
    className: PropTypes.string
};


export default BoxCard;
