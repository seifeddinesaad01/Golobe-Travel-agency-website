import Link from "next/link"
import Review1Img from "../../../../public/Home/review1Img.png"
import Image from "next/image"
export default function ReviewCard({ title, description, image}:any) {
    return (
        <div className="w-[400px] bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col">
            <div className="flex flex-col gap-3 pb-6">
                <h3 className="text-2xl font-semibold leading-tight text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                   {description}
                </p>
                <Link className="text-sm text-blue-600 hover:underline mt-4 block" href="#">
                    View more
                </Link>
                <div className="flex mt-4">
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-gray-300 w-5 h-5" />
                </div>
            </div>
            <Image
                alt="Mountain landscape"
                className="w-full h-48  rounded-sm"
                height="200"
                src={image}
                style={{
                     borderRadius: "0.6rem",
                    aspectRatio: "350/200",
                    objectFit: "cover",
                }}
                width="350"
            />
        </div>
    )
}

function ChromeIcon(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
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
