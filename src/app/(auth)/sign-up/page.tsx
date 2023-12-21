
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SignInImage from "../../../../public/SignIn/sideImage.png";
import Logo from "../../../../public/Logo.png";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import Image from "next/image";
export default function Component() {
  return (
    <div className="min-h-screen bg-white flex">
      <div
        className="flex justify-center items-center  lg:w-1/2 py-16 px-8"
      >
        <Image src={SignInImage} alt="image"  className=" h-full"/>
      </div>
      <div className="w-full lg:w-1/2 p-8">
        <div className="w-full">
          <div className="mb-6">
            <Image src={Logo} alt="logo" className="mb-4"/>
            <h1 className="text-4xl font-bold mt-2 mb-6">Sign up</h1>
            <p className="text-gray-600">Let’s get you all set up so you can access your personal account.</p>
          </div>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">
                  First Name
                </label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="last-name">
                  Last Name
                </label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <Input id="email" placeholder="john.doe@gmail.com" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                  Phone Number
                </label>
                <Input id="phone" placeholder="123-456-7890" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <Input id="password" placeholder="••••••••" type="password" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">
                Confirm Password
              </label>
              <Input id="confirm-password" placeholder="••••••••" type="password" />
            </div>
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                id="terms"
                type="checkbox"
              />
              <label className="ml-2 block text-sm text-gray-900" htmlFor="terms">
                I agree to all the
              </label>
            </div>
            <Button className="w-full text-black"  style={{
                    backgroundColor: "#8cd4b9ff",
                  }}>Create account</Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a className="text-indigo-600 hover:text-indigo-500" href="#">
                Login
              </a>
            </p>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or Sign up with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Button className="col-span-1 text-black border-black">
                <FaFacebook className="h-5 w-5" />
              </Button>
              <Button className="">
                <FaGoogle className="h-5 w-5" />
              </Button>
              <Button className="">
                <FaApple className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

