import { Button } from "@/components/ui/button"
import Image from "next/image"
import trip1Bg from "../../../../public/Home/trip1bg.png";
import trip2Bg from "../../../../public/Home/trip2bg.png"

export default function TripDisplay() {
  return (
    <div className="relative bg-black text-white"
    style={{
        borderRadius:"1rem"
    }}>
      <Image
        alt="Airport view"
        className="w-full h-auto"
        height="591"
        src={trip1Bg}
        style={{
          aspectRatio: "636/591",
          objectFit: "cover",
          borderRadius:"1rem"
        }}
        width="636"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold">Flights</h1>
        <p className="mt-2 text-lg">Search Flights & Places Hire to our most popular destinations</p>
        <Button className="mt-4 bg-green-500 hover:bg-green-600">Show Flights</Button>
      </div>
    </div>
  )
}

