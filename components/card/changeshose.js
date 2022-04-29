import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const ChangeShoseCard = ({ id, nftid, img, level, type }) => {
    const router = useRouter()

    const handleChangeCurrentShoes = () => {
        new Promise(async (resolve, reject) => {
            localStorage.setItem("currentShoes", id)
            resolve(true);
        }).then(() => {
            router.push("/")
        }).catch(() => {
            router.push("/")
        })
    }

    return (
        <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4" key={`change-${nftid}-${id}`}>
            <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                <div className="flex justify-between">
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <img className="mr-1 my-auto h-full" src="/images/icons/tag.png" />
                        <p className="my-auto text-xs md:text-base">#{id}</p>
                    </div>
                    <div className="bg-vicm-green-600 text-white rounded-xl p-1 flex h-[24px] md:h-[34px]">
                        <p className="my-auto text-xs">Level {level}</p>
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
                <div className="flex justify-center">
                    <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base' onClick={handleChangeCurrentShoes}>
                        Equip
                    </button>
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
