import Image from "next/image"

export const HotelReview = ({avatar, name, review, rate}:any) => {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center  text-black p-4 border-b-2">
      <div className="flex items-center mb-4 md:mb-0">
        <Image
          alt="Avatar"
          className="h-12 w-12 rounded-full mr-4"
          src={avatar}
          style={{
             objectFit: "cover",
          }}
        />
        <div className="w-40">
          <div className="text-md font-semibold">{rate} Amazing</div>
          <div className="text-sm">{name}</div>
        </div>
      </div>
      <p className="md:ml-4">
        {review}
      </p>
    </div>
  )
}

export default HotelReview