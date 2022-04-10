import Link from 'next/link';
import PropTypes from 'prop-types';
import ButtonDefault from '../button/default';

const ItemCardBag = ({ id, type, level, pic, style }) => {

    return (
        <div className="p-1 w-1/2 lg:w-1/3 xl:w-1/4" key={`bag-${type}-${id}`}>
            <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                {type === "shoes" && <div className="flex flex-wrap justify-between">
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <img className="mr-1 my-auto h-full" src="/images/icons/tag.png" />
                        <p className="my-auto text-xs md:text-base">#{id}</p>
                    </div>
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <p className="my-auto text-xs">Level {level}</p>
                    </div>
                </div>}
                <Link href={`/user/bag/item/${id}/detail`}>
                    <div className="mx-auto mt-4 relative">
                        <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                        <img className="absolute top-0 w-full h-auto" src={type === "shoes" ? `/images/s/${pic}.png` : type === "box" ? `/images/box/${pic}.png` : `/images/gem/${pic}.svg`} />
                    </div>
                </Link>
                <div className="mx-auto my-4">
                    {type === "shoes" && <div className="bg-vicm-green-90 rounded-4xl">
                        <p className="text-vicm-violet-100 text-xs px-4 py-1 capitalize">{style}</p>
                    </div>}
                    {type === "gem" && <div className="rounded-4xl">
                        <p className="text-vicm-gray-100 text-xs px-4 py-1 capitalize">{style} +{level}</p>
                    </div>}
                </div>
                {
                    type === "shoes" ?
                        <div className="flex flex-wrap justify-between sm:justify-around">
                            <button className='bg-vicm-yellow-100 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base'>Sell</button>
                            <button className='bg-vicm-red-100 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base'>Repair</button>
                        </div>
                        : type === "box" ?
                            <div className="flex justify-center">
                                <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base'>Open</button>
                            </div>
                            : type === "gem" ?
                                <div className="flex flex-wrap justify-between sm:justify-around">
                                    <button className='bg-vicm-yellow-100 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base'>Use</button>
                                    <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base'>Sell</button>
                                </div>
                                : <div className="flex justify-between sm:justify-around">

                                </div>
                }
            </div>
        </div>
    );
}

ItemCardBag.propTypes = {
    type: PropTypes.string,
};

ItemCardBag.defaultProps = {
    type: "shoes",
}


export default ItemCardBag;
