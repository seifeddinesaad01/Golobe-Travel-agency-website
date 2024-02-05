import { Button } from "@/components/ui/button"
import "../style.css"
export default function Card({ title, description, price, imageUrl }: any) {
    const backgroundImageUrl = 'url(' + imageUrl + ')';


    return (
        <div style={{
            backgroundImage: backgroundImageUrl
        }}
            className="bgimage3 rounded-lg h-full"
        >
            <div className="p-6 bg-opacity-60 justify-end flex flex-col gap-2">
                <div className="flex justify-center items-center gap-2">
                    <div>
                        <h2 className="text-lg font-semibold text-white">{title}</h2>
                        <p className="text-sm text-white">{description}</p>
                    </div>
                    <div className="self-end">
                        <span className="text-3xl font-bold text-white">${price}</span>
                    </div>
                </div>
                <Button className="text-4xs bg-green-300 text-black w-full">Book Flight</Button>
            </div>
        </div>
    )
}

