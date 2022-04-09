import PropTypes from 'prop-types';

const ChangeShoseCard = ({ type }) => {

    return (
        <div className="p-1 w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                <div className="flex justify-between">
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <img className="mr-1 my-auto h-full" src="/images/icons/tag.png" />
                        <p className="my-auto text-xs md:text-base">#12345678</p>
                    </div>
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <p className="my-auto text-xs">Level 10</p>
                    </div>
                </div>
                <div className="mx-auto mt-4 relative">
                    <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                    <img className="absolute top-0 w-full h-auto" src={type === "shoes" ? "/images/s/NFT1.png" : type === "box" ? "/images/box/walking.png" : "/images/gem/stamina.svg"} />

                </div>
                <div className="mx-auto my-4">
                    <div className="bg-vicm-green-90 rounded-4xl">
                        <p className="text-vicm-violet-100 text-xs px-4 py-1">Walking</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base'>Apply</button>
                </div>
            </div>
        </div>
    );
}

ChangeShoseCard.propTypes = {
    type: PropTypes.string,
};

ChangeShoseCard.defaultProps = {
    type: "shoes",
}


export default ChangeShoseCard;
