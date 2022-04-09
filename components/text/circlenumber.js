import PropTypes from 'prop-types';

const CircleNumber = ({ children, size, style, border, className }) => {
    let classes = '';
    switch (size) {
        case 'sm':
            classes = 'h-10 w-10' + (border === 'thin' ? ' border-2' : ' border-4');
            break;
        case 'md':
            classes = 'h-12 w-12' + (border === 'thin' ? ' border-2' : ' border-4');
            break;
        case 'lg':
            classes = 'h-16 w-16' + (border === 'thin' ? ' border-2' : ' border-6');
            break;
        case 'xl':
            classes = 'h-24 w-24 text-2xl' + (border === 'thin' ? ' border-2' : ' border-8');
            break;
    }
    return (
        <div
            className={classes + ' rounded-full text-center text-black flex justify-center items-center ' + (className || '')}
            style={{ ...style }}>
            {children}
        </div>
    );
}

CircleNumber.propTypes = {
    className: PropTypes.string
};


export default CircleNumber;
