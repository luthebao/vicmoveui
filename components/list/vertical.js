import PropTypes from 'prop-types';

const VerticalListContainer = (props) => {
    const { children, className, style } = props;
    return (
        <div
            className={'no-scrollbar overflow-x-auto px-8 pb-16 whitespace-nowrap ' + (className || '')}
            style={{ marginLeft: '-2rem', marginRight: '-1rem', ...style }}>
            {children}
        </div>
    );
}


export default VerticalListContainer;
