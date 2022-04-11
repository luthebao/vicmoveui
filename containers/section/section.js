import PropTypes from 'prop-types';

const SectionContainer = ({ children, type, bgColor, className }) => {
    let classes = type === 'full' ? 'rounded-4xl' : 'rounded-t-4xl';
    let color = bgColor || ' bg-vicm-light-green-100 ';
    return (
        <div
            className={classes + ' p-4 ' + color + ' ' + (className || '')}>
            {children}
        </div>
    );
}

SectionContainer.propTypes = {
    className: PropTypes.string
};


export default SectionContainer;
