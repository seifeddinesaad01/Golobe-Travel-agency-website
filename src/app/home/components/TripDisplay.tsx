import Image from "next/image"
import flighIcon from "../../../../public/Home/bIcon3.png"

export default function TripDisplay({ image, title, description }: any) {
  return (
    <div className="relative bg-black text-white w-full"
      style={{
        borderRadius: "1rem"
      }}>
      <Image
        alt="Airport view"
        className="w-full h-auto"
        height="591"
        src={image}
        style={{
          aspectRatio: "636/591",
          objectFit: "cover",
          borderRadius: "1rem"
        }}
        width="636"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center pb-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{description}</p>
        <button
          type="submit"
          className="mt-4"
          style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "#8ed4bbff",
            padding: "1rem",
            borderRadius: '4px',
            color:"black", 
            fontWeight:"500"
          }}>
          <Image src={flighIcon} alt="icon" />
          <p>Show {title}</p>
        </button>
      </div>
    </div>
  )
}

