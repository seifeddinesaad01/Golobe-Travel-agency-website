import { Button } from "@/components/ui/button"
import "../style.css"

export default function Component() {
    return (
        <div className="bgimage3 rounded-lg h-full">
            <div className="p-6 bg-opacity-60 justify-end">
                <h2 className="text-lg font-semibold text-gray-800">Melbourne</h2>
                <p className="text-sm text-gray-600">An amazing journey</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-3xl font-bold text-gray-900">$700</span>
                    <Button className="text-xs bg-black text-white">Book Flight</Button>
                </div>
            </div>
        </div>
    )
}

