import Image from "next/image";
interface ItripCard {
  tripImg: any,
  title: string,
  description: string
}
export default function TripCard({ tripImg, title, description }: ItripCard) {
  return (
    <div className=" max-w-sm rounded-xl overflow-hidden flex p-2 bg-white shadow-md md:shadow-lg">
      <div className="flex-shrink-0">
        <Image
          alt="Trip Image"
          className="w-24 h-24 object-cover md:w-32 md:h-32"
          height="96"
          src={tripImg}
          style={{
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          width="96"
        />
      </div>
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
