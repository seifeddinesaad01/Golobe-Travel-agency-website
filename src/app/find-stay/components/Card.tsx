import Image from "next/image"
import Hotel from "../../../../public/FindStays/hotel1.png"
import { Divider } from "antd"
export default function Card({ image, id, price, rate, reviewsNumber, location, hotelName }: any) {
    // id: "4",
    // image: EtihadAirways,
    // price: "108",
    // rate: "4,4",
    // reviewsNumber: "54",
    // location: "K
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[90%] ">
            <div className="md:flex w-full">
                <div className="md:flex-shrink-0">
                    <Image
                        alt="Hotel"
                        className="h-48 object-cover md:h-full w-full"
                        height="192"
                        src={image}
                        style={{
                            aspectRatio: "192/192",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="py-2 px-6 w-full">
                    <div className="flex justify-between w-full">
                        <div className="block">
                            <p className="mt-2 text-2xl font-semibold text-gray-800">{hotelName}</p>
                            <p className="mt-2 text-sm text-gray-600">{location}</p>
                            <div className="mt-3 flex items-center">
                                <div className="flex text-lg text-yellow-500">
                                    <StarIcon className="w-5 h-5" />
                                    <StarIcon className="w-5 h-5" />
                                    <StarIcon className="w-5 h-5" />
                                    <StarIcon className="w-5 h-5" />
                                    <StarIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="mt-4 ml-2 text-sm text-gray-600">{rate} Very Good {reviewsNumber} reviews</div>

                        </div>
                        <div className="flex justify-between items-center">
                            <span className="px-3 py-1  rounded-full"></span>
                            <div className="text-right">
                                <span className="text-sm text-gray-600">starting from</span>
                                <div className="text-xl font-semibold text-[#ff8682ff]">${price}/night</div>
                                <span className="text-sm text-gray-500">excl. tax</span>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className="mt-6 flex items-center justify-between gap-4">
                        <button className="px-4 py-2 text-sm text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                            <HeartIcon className="w-6 h-6" />
                        </button>
                        <button className="w-full px-8 py-2 text-sm text-black bg-[#8ed4bbff] rounded focus:outline-none focus:bg-green-600">
                            View Place
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}


function StarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
