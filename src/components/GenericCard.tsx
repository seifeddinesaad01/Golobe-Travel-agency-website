import { Checkbox } from "antd"
import { Button } from "@/components/ui/button"
import FlyEmirates from "../../public/FindFlights/flyEmirates.png";
import Image from "next/image";

export default function Component() {
    return (
        <div className="flex justify-center items-center gap-2 bg-white rounded-lg shadow-md p-8 ">
            <Image
                alt="Emirates Logo"
                className="h-1/2 w-1/5"
                src={FlyEmirates}
                style={{
                    aspectRatio: "100/50",
                    alignSelf:"flex-start"
                }}
                width="100"
            />
            <div className="w-full ">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            {/* <StarIcon className="text-yellow-400 w-5 h-5" /> */}
                            <span className="text-lg font-semibold">4.2</span>
                            <span className="text-sm text-gray-500">Very Good 54 reviews</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 pt-4 md:pt-0">
                        <span className="text-sm text-gray-500">starting from</span>
                        <span className="text-2xl font-bold text-[#ff8682ff]">$104</span>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="flex items-center justify-between mb-2 w-3/4">
                        <div className="flex items-center space-x-2">
                            {/* <ClockIcon className="text-gray-500 w-6 h-6" /> */}
                            <span className="text-lg font-medium">12:00 pm - 01:28 pm</span>
                            <span className="text-sm text-gray-500">non stop</span>
                        </div>
                        <span className="text-lg font-medium">2h 28m <span className="text-sm text-gray-500">EWR-BNA</span></span>
                        
                    </div>
                    <div className="flex items-center justify-between w-3/4">
                        <div className="flex items-center space-x-2">
                            {/* <ClockIcon className="text-gray-500 w-6 h-6" /> */}
                            <span className="text-lg font-medium">12:00 pm - 01:28 pm</span>
                            <span className="text-sm text-gray-500">non stop</span>
                        </div>
                        <span className="text-lg font-medium">2h 28m <span className="text-sm text-gray-500">EWR-BNA</span></span>
                        
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    {/* <Checkbox id="favorite" className="w-1/5 self-center" /> */}
                    <Button className="bg-[#8ed4bbff] hover:bg-green-200 text-black py-2 px-4 rounded-lg w-full">View Deals</Button>
                </div>
            </div>
        </div>
    )
}

