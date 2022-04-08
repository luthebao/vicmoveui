import PropTypes from 'prop-types';

const BackgroundContainer = ({ children, type, padding, hasMenu, className }) => {
    let classes = 'h-screen overflow-y-auto flex flex-col';
    classes += (!padding || padding !== 'none') ? ' p-6 pb-12' : '';
    classes += hasMenu  ? ' pb-12' : '';
    switch (type) {
        case 'gradient':
            classes += ' bg-gradient-to-b from-vicm-green-400 to-vicm-green-700 text-white text-white ';
            break;
        case 'light':
            classes += ' bg-vicm-light-green-100 ';
            break;
        case 'light-2':
            classes += ' bg-vicm-light-green-200 ';
            break;
        default:
            classes += ' bg-white ';
            break;
    }

    return (
        <div className={classes + (className || '')}>
            {children}
        </div>
    );
}

BackgroundContainer.propTypes = {
    type: PropTypes.string.isRequired,
    padding: PropTypes.string,
};


export default BackgroundContainer;