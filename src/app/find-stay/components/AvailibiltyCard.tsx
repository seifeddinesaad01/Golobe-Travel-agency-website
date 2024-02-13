import Image from "next/image";
export const AvailibilityCard = ({ image, title, price }: any) => {
    return (
        <div className=" p-4 md:flex md:items-center md:justify-between">
            <div className="flex items-center text-black">
                <Image
                    alt="Room"
                    className="h-12 w-12 rounded-lg"
                    height="50"
                    src={image}
                    style={{
                        aspectRatio: "50/50",
                        objectFit: "cover",
                    }}
                    width="50"
                />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between md:mt-0">
                <span className="text-xl font-bold text-black">${price}/night</span>
                <button className="ml-4 rounded bg-[#8ed4bbff] py-2 px-4 text-sm font-medium text-black ">
                    Book now
                </button>
            </div>
        </div>
    )
}

export default AvailibilityCard;