'use client'
import React from "react";
import Image from "next/image";
import Logo from "../../../../public/Logo.png";
import SignInImage from "../../../../public/SignIn/sideImage.png";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { auth } from "../../../config/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { useFormik } from "formik";
import * as yup from "yup";
import "./signIn.css"

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);

      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex-1 py-16 flex flex-col justify-center px-4 sm:px-6  lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="mx-auto form__header">
            <Image alt="Golobe" className="h-12 w-44" src={Logo} width={100} />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login</h2>
            <p className="mt-2 text-sm text-gray-600">
              Login to access your Golobe account
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="email"
                    className={`${
                      formik.touched.email && formik.errors.email
                        ? "border-red-300"
                        : "border-gray-300"
                    } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    id="email"
                    name="email"
                    placeholder="john.doe@gmail.com"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="current-password"
                    className={`${
                      formik.touched.password && formik.errors.password
                        ? "border-red-300"
                        : "border-gray-300"
                    } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    id="password"
                    name="password"
                    placeholder="******************"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#8cd4b9ff",
                  }}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                <div
                  className="relative flex justify-center text-sm pb-4"
                >
                  <p>
                    Don’t have an account?{" "}
                    <span

                      style={{
                        color: "#ff8682ff",
                        fontSize: "1.1rem",
                        cursor: "pointer",
                      }}
                    >
                      Sign up
                    </span>
                  </p>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or login with
                  </span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap  justify-center gap-3 w-full">
                <div className="w-1/4">
                  <a
                    className="w-full inline-flex justify-center py-2 px-4 border border-green-300 rounded-md shadow-sm bg-white text-sm font-medium  hover:bg-gray-50"
                    href="#"
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <FaFacebook color="#1877f2ff" />
                  </a>
                </div>
                <div className="w-1/4">
                  <a
                    className="w-full inline-flex justify-center py-2 px-4 border border-green-300 rounded-md shadow-sm bg-white text-sm font-medium  hover:bg-gray-50"
                    href="#"
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <FaGoogle />
                  </a>
                </div>
                <div className="w-1/4">
                  <a
                    className="w-full inline-flex justify-center py-2 px-4 border border-green-300 rounded-md shadow-sm bg-white text-sm font-medium  hover:bg-gray-50"
                    href="#"
                    style={{
                      padding: "1rem",
                    }}
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
      <div className="flex-1 flex justify-center py-16 ">
        <Image
          alt="Hotel resort"
          className="object-cover object-center rounded-lg"
          height="600"
          src={SignInImage}
        />
      </div>
    </div>
  );
}
