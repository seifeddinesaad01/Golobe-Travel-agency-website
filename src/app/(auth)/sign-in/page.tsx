

import Image from "next/image"
import Logo from "../../../../public/Logo.png";
import SignInImage from "../../../../public/SignIn/sideImage.png"
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

export default function SignIn() {
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <Image alt="Golobe" className="h-12 w-auto" src={Logo} />
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login</h2>
                        <p className="mt-2 text-sm text-gray-600">Login to access your Golobe account</p>
                    </div>
                    <div className="mt-8">
                        <div className="mt-6">
                            <form action="#" className="space-y-6" method="POST">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            autoComplete="email"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id="email"
                                            name="email"
                                            placeholder="john.doe@gmail.com"
                                            required
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            autoComplete="current-password"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id="password"
                                            name="password"
                                            placeholder="******************"
                                            required
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            id="remember_me"
                                            name="remember_me"
                                            type="checkbox"
                                        />
                                        <label className="ml-2 block text-sm text-gray-900" htmlFor="remember_me">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                                            Forgot Password
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or login with</span>
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    <div>
                                        <a
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            href="#"
                                        >
                                            <span className="sr-only">Sign in with Facebook</span>
                                            <FaFacebook />
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            href="#"
                                        >
                                            <span className="sr-only">Sign in with Google</span>
                                            <FaGoogle />
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                            href="#"
                                        >
                                            <span className="sr-only">Sign in with Apple</span>
                                            <FaApple />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <Image
                    alt="Hotel resort"
                    height="600"
                    src={SignInImage}

                />
            </div>
        </div>
    )
}

