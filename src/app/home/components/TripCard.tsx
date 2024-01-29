
import Image from "next/image"
export default function TripCard({
  tripImg, title, description
}: any) {
  return (
    <div style={{boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"}} className="max-w-sm rounded-xl overflow-hidden flex p-4 bg-white">
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
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  )
}

