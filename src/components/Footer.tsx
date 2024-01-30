import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import footerImg from "../../public/Home/footerImg.png"
import logo from "../../public/Logo1.png"
import Image from "next/image"
export default function Footer() {
    return (
        <div className="w-full flex flex-col">
            <section style={{ marginBottom: "-8rem", zIndex: "999" }} className="max-w-7xl mx-auto  w-full bg-[#ceebe2ff] rounded-lg shadow-lg">
                <div className="  flex items-center justify-between">
                    <div className="flex-1 p-8">
                        <h2 className="text-6xl font-bold mb-2">Subscribe <br /> Newsletter</h2>
                        {/* <h3 className="text-xl font-semibold text-gray-700 mb-4">Newsletter</h3> */}
                        <p className="text-gray-600 mb-4 text-2xl font-bold">The Travel</p>
                        <p className="text-gray-500 mb-6">
                            Get inspired! Receive travel discounts, tips and behind the scenes stories.
                        </p>
                        <div className="flex w-2/3">
                            <Input className="mr-4" placeholder="Your email address" />
                            <Button className="bg-black text-white">Subscribe</Button>
                        </div>
                    </div>
                    <div className="hidden lg:flex mt-20">
                        <Image
                            alt="Mailbox illustration"
                            className="h-[250px] w-[300px]"
                            height="200"
                            src={footerImg}
                            style={{
                                aspectRatio: "200/200",
                                paddingBottom: "-2rem"
                            }}
                        />
                    </div>
                </div>
            </section>
            <footer className="bg-[#8ed4bbff] text-black py-8 pt-44">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-6 p-9">
                    <div className="flex flex-col gap-6">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2 text-xl">Our Destinations</h5>
                        <ul className="text-[#385945ff]">
                            <li className="mb-1">Canada</li>
                            <li className="mb-1">Alaska</li>
                            <li className="mb-1">France</li>
                            <li className="mb-1">Iceland</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2 text-xl">Our Activities</h5>
                        <ul className="text-[#385945ff]">
                            <li className="mb-1">Northern Lights</li>
                            <li className="mb-1">Cruising & sailing</li>
                            <li className="mb-1">Multi-activities</li>
                            <li className="mb-1">Kayaking</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2 text-xl">Travel Blogs</h5>
                        <ul className="text-[#385945ff]">
                            <li className="mb-1">Bali Travel Guide</li>
                            <li className="mb-1">Sri Lanks Travel Guide</li>
                            <li className="mb-1">Peru Travel Guide</li>
                            <li className="mb-1">Bali Travel Guide</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2 text-xl">About Us</h5>
                        <ul className="text-[#385945ff]">
                            <li className="mb-1">Our Story</li>
                            <li className="mb-1">Work with us</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2  text-xl">Contact Us</h5>
                        <ul className="text-[#385945ff] ">
                            <li className="mb-1">Our Story</li>
                            <li className="mb-1">Work with us</li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    )
}