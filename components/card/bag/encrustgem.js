import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const EncrustGemCard = ({ id, type, level, pic }) => {


    return (
        <div className="p-[2px] w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" key={`bag-${type}-${id}`}>
            <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">

                <div className="mx-auto mt-4 relative">
                    <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                    <img className="absolute top-0 w-full h-auto" src={`/images/gem/${pic}.png`} />
                </div>
                <div className="mx-auto my-4">
                    <div className="rounded-4xl">
                        <p className="text-vicm-gray-100 text-xs px-4 py-1 capitalize">lucky +{level}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base capitalize'
                        onClick={() => toast("Comming soon...")}
                    >Use</button>
                </div>
            </div>
        </div>
    );
}

EncrustGemCard.propTypes = {
    type: PropTypes.string,
};

EncrustGemCard.defaultProps = {
    type: "gem",
}


export default EncrustGemCard;
