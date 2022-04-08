import PropTypes from 'prop-types';

const SectionContainer = ({ children, className }) => {

    return (
        <div
            className={'rounded-4xl p-4 bg-vicm-light-green-100 ' + (className || '')}>
            {children}
        </div>
    );
}

SectionContainer.propTypes = {
    className: PropTypes.string
};


export default SectionContainer;
