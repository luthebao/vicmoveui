import Link from 'next/link';

const BoxCardBag = ({ id, buyboxid, type }) => {

    return (
        <div className="p-[2px] w-1/2 lg:w-1/3 xl:w-1/4" key={`bag-${buyboxid}-${id}`}>
            <div className="min-h-[150px] border-[2px] border-vicm-green-600 rounded-4xl flex flex-col p-2">
                <Link href={`/user/bag/box/${id}/detail`}>
                    <div className="mx-auto mt-4 relative">
                        <img className="relative w-full m-auto" src="/images/bg/bg-item.svg" />
                        <img className="absolute top-0 w-full h-auto" src={`/images/box/${type === 0 ? "walking" : type === 1 ? "running" : type === 2 ? "cycling" : "versatile"}.png`} />
                    </div>
                </Link>
                <div className="mx-auto my-4">

                </div>
                <div className="flex justify-center">
                    <Link href={`/user/bag/box/${id}/detail`}>
                        <button className='bg-vicm-green-600 text-white rounded-full py-[5px] px-[19px] text-xs sm:text-base'>Open</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default BoxCardBag;
