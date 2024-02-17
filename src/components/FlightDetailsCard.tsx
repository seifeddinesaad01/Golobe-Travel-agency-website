
import Image from "next/image"
import flyEmirates from "../../public/FindFlights/flyEmirates.png"
export default function FlighDetailsCard({departureTime, arrivalTime, image, returnDate, lastingTime}:any) {
    return (
        <div className="bg-white rounded-md p-4 shadow-md  mb-10 w-[95%] self-center flex flex-col pb-10">
            <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col items-center space-x-2 gap-2">
                    <p className="font-bold text-xl">Return {returnDate}</p>
                    <div className="flex items-center justify-center self-start border border-gray-300 p-2 rounded-md gap-2">
                        <img
                            alt="Emirates logo"
                            className="h-14 w-16"
                            src={image || flyEmirates}
                        />
                        <div className="flex flex-col justify-center items-center gap-1">
                            <span className="font-semibold">Emirates</span>
                            <span className="text-sm text-gray-500">Airbus A320</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold self-end">{lastingTime}</span>
                    <div className="flex justify-end space-x-4 mt-4">
                        <WifiIcon className="h-5 w-5 text-gray-700" />
                        <BatteryChargingIcon className="h-5 w-5 text-gray-700" />
                        <UtensilsIcon className="h-5 w-5 text-gray-700" />
                        <TableIcon className="h-5 w-5 text-gray-700" />
                    </div>

                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center md:w-[90%] lg:w-[60%] w-[90%] self-center">
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-xl">{departureTime} pm</span>
                    <span className="text-gray-500">Newark(EWR)</span>
                </div>
                <PlaneTakeoffIcon className="h-5 w-5 text-gray-700" />
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-xl">{arrivalTime} pm</span>
                    <span className="text-gray-500">Newark(EWR)</span>
                </div>
            </div>

        </div>
    )
}

function BatteryChargingIcon(props: any) {
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
            <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
            <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
            <path d="m11 7-3 5h4l-3 5" />
            <line x1="22" x2="22" y1="11" y2="13" />
        </svg>
    )
}


function PlaneTakeoffIcon(props: any) {
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
            <path d="M2 22h20" />
            <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
        </svg>
    )
}


function PlusIcon(props: any) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function TableIcon(props: any) {
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
            <path d="M12 3v18" />
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
        </svg>
    )
}


function UtensilsIcon(props: any) {
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
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
    )
}


function WifiIcon(props: any) {
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
            <path d="M5 13a10 10 0 0 1 14 0" />
            <path d="M8.5 16.5a5 5 0 0 1 7 0" />
            <path d="M2 8.82a15 15 0 0 1 20 0" />
            <line x1="12" x2="12.01" y1="20" y2="20" />
        </svg>
    )
}
