import Link from 'next/link';
import PropTypes from 'prop-types';

const BreadSneakerCard = ({ id, nftid, img, countchild, type, nextclone }) => {

    return (
        <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4" key={`change-${nftid}-${id}`}>
            <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                <div className="flex justify-between">
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <img className="mr-1 my-auto h-full" src="/images/icons/tag.png" />
                        <p className="my-auto text-xs md:text-base">#{id}</p>
                    </div>
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <p className="my-auto text-xs">Breed {countchild}/7</p>
                    </div>
                </div>
                <div className="mx-auto mt-4 relative">
                    <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                    <img className="absolute top-0 w-full h-auto" src={`/images/s/${img}.png`} />
                </div>
                <div className="mx-auto my-4">
                    <div className="bg-vicm-green-90 rounded-4xl">
                        <p className="text-vicm-violet-100 text-xs px-4 py-1 capitalize">{type === 0 ? "walking" : type === 1 ? "running" : type === 2 ? "cycling" : "versatile"}</p>
                    </div>
                </div>
                <div className="mx-auto my-4">
                    <div className="bg-vicm-green-90 rounded-4xl">
                        <p className="text-vicm-violet-100 text-xs px-4 py-1 capitalize">
                            Next breed: {(new Date(nextclone)).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href={`/user/breed/${id}`}>
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base'>
                            Breed
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

BreadSneakerCard.propTypes = {
    type: PropTypes.string,
};

BreadSneakerCard.defaultProps = {
    type: "shoes",
}


export default BreadSneakerCard;
