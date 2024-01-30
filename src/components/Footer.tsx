import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import footerImg from "../../public/Home/footerImg.png"
import Image from "next/image"
export default function Footer() {
  return (
    <div className="w-full flex flex-col">
      <section style={{marginBottom:"-8rem",zIndex:"999" }} className="max-w-7xl mx-auto  w-full bg-[#ceebe2ff] rounded-lg shadow-lg">
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
              <Button>Subscribe</Button>
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
                paddingBottom:"-2rem"
              }}
            //   width="200"
            />
          </div>
        </div>
      </section>
      <footer className="bg-[#8ed4bbff] text-black py-8 pt-44">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          <div>
            <h4 className="font-bold text-lg mb-4">golobe</h4>
            <div className="flex space-x-2">
              <FacebookIcon className="text-black" />
              <TwitterIcon className="text-black" />
              <YoutubeIcon className="text-black" />
              <InstagramIcon className="text-black" />
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Our Destinations</h5>
            <ul>
              <li className="mb-1">Canada</li>
              <li className="mb-1">Alaska</li>
              <li className="mb-1">France</li>
              <li className="mb-1">Iceland</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Our Activities</h5>
            <ul>
              <li className="mb-1">Northern Lights</li>
              <li className="mb-1">Cruising & sailing</li>
              <li className="mb-1">Multi-activities</li>
              <li className="mb-1">Kayaking</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold mb-2">Travel Blogs</h5>
              <ul>
                <li className="mb-1">Bali Travel Guide</li>
                <li className="mb-1">Sri Lanks Travel Guide</li>
                <li className="mb-1">Peru Travel Guide</li>
                <li className="mb-1">Bali Travel Guide</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">About Us</h5>
              <ul>
                <li className="mb-1">Our Story</li>
                <li className="mb-1">Work with us</li>
              </ul>
              <h5 className="font-semibold mb-2 mt-4">Contact Us</h5>
              <ul>
                <li className="mb-1">Our Story</li>
                <li className="mb-1">Work with us</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props:any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props:any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props:any) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
