import PropTypes from 'prop-types';

const CircleImage = ({ src, width, height, className }) => {
  
  return (
    <img 
      src={src}
      width={width}
      height={height}
      className={'rounded-full shadow-xl' + (className || '')} />
  );
}

CircleImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string
};


export default CircleImage;
