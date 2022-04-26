import PropTypes from 'prop-types';

const ProgressBar = ({ percentage, className, style, min, max, upgrade }) => {


    return (
        <div
            className={'rounded-full h-6 border border-vicm-green-600 p-1 flex relative ' + (className || '')}>
            <div className={'rounded-full bg-vicm-green-600'} style={{ width: ((min * 100 / max)) + '%' }}>
                {
                    min >= max ?
                    <button className='absolute text-xs text-white -bottom-[1.2rem] right-0 bg-red-500 px-2 rounded-full pt-[1px]' onClick={upgrade}>
                        UP
                    </button>
                    :
                    <span className='absolute text-xs text-vicm-green-600' style={{ right: '0', bottom: '-1.2rem' }}>{max}</span>
                }
                <span className='absolute text-xs text-vicm-green-600' style={{ left: '0', bottom: '-1.2rem' }}>{min}</span>
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    upgrade: PropTypes.func,
};

ProgressBar.defaultProps = {
    min: 0,
    max: 1,
    upgrade: console.log
}

export default ProgressBar;
