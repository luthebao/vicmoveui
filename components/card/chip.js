import PropTypes from 'prop-types';

const Chip = ({ children, style, className }) => {
    return (
        <div
            className={'rounded-full px-4 py-1 text-center flex items-center ' + (className || '')}
            style={{ ...style }}>
            {children}
        </div>
    );
}

Chip.propTypes = {
    className: PropTypes.string
};


export default Chip;
