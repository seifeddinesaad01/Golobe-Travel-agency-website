
import Image from "next/image"
import tripImg from "../../../../public/Home/tripImg.png"
export default function TripCard() {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex">
        <Image
          alt="Tokyo"
          className="w-24 h-24 object-cover"
          height="96"
          src={tripImg}
          style={{
            aspectRatio: "96/96",
            objectFit: "cover",
          }}
          width="96"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Tokyo, Japan</div>
          <p className="text-gray-700 text-base">Flights · Hotels · Resorts</p>
        </div>
      </div>
    )
  }
  
  