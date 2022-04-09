import PropTypes from 'prop-types';

const ProgressBar = ({ percentage, className, style }) => {
    return (
        <div
            className={'rounded-full h-6 border border-vicm-green-600 p-1 flex relative ' + (className || '')}>
            <div className={'rounded-full bg-vicm-green-600'} style={{ width: percentage + '%' }}>
                <span className='absolute text-xs text-vicm-green-600' style={{ right: '0', bottom: '-1.2rem' }}>{percentage}%</span>
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    className: PropTypes.string
};


export default ProgressBar;
