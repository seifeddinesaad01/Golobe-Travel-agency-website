'use client'
import React from "react";
import Image from "next/image";
import Logo from "../../../../public/Logo.png";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { auth, googleProvider, githubProvider } from "../../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useFormik } from "formik";
import * as yup from "yup";
import "./signIn.css"
import Link from "next/link";
import { useRouter } from "next/navigation";
import GuestGuard from "@/components/GuestGuard/GuestGuard";
import { notification } from "antd"
import ImageSlider from "@/components/ImageSlider";
import { validUrls } from "@/constants/data";
import { Input } from "@/components/Input";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export default function SignIn() {
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential: any = await signInWithEmailAndPassword(auth, values.email, values.password);
        // Access the user information from the UserCredential object
        const user = userCredential.user;
        localStorage.setItem('userToken', JSON.stringify(user?.accessToken));
        api.success({
          message: "user logged in succesfully",
          placement: 'topRight',
        })
        setTimeout(() => {
          router.push("/")
        }, 1000)

      } catch (err: any) {
        api.error({
          message: err.message,
          placement: 'topRight',
        })
      }
    },
  });
  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user: any = userCredential.user;
      localStorage.setItem('userToken', JSON.stringify(user?.accessToken));
      api.success({
        message: "user logged in succesfully",
        placement: 'topRight',
      })
      setTimeout(() => {
        router.push("/")
      }, 1000)
    } catch (err:any) {
      api.error({
        message:err.message,
        placement: 'topRight',
      })
    }
  };
  const signInWithGitHub = async () => {
    try {
      const userCredential = await signInWithPopup(auth, githubProvider);
      const user: any = userCredential.user;
      localStorage.setItem('userToken', JSON.stringify(user?.accessToken));
      api.success({
        message: "user logged in succesfully",
        placement: 'topRight',
      })
      setTimeout(() => {
        router.push("/");
      }, 1000)
    } catch (err:any) {
      api.error({
        message: err.message,
        placement: 'topRight',
      })
    }
  };
  return (
    <GuestGuard>
      {contextHolder}
      <div className="min-h-screen flex flex-col sm:flex-row">
        <div className="flex-1 py-16 flex flex-col justify-center px-4 sm:px-6  lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg">
            <div className="mx-auto form__header">
              <Image alt="Golobe" className="h-12 w-32" src={Logo} width={100} />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login</h2>
              <p className="mt-2 text-sm text-gray-600">
                Login to access your Golobe account
              </p>
            </div>
            <div className="mt-8">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <Input
                  name='email'
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  errors={formik.errors}
                  touched={formik.touched}
                  placeholder='John@gmail.com'
                  type="email"
                  id="email"
                  text='Email'
                  className="mt-1"
                />
                <Input
                  name='password'
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  errors={formik.errors}
                  touched={formik.touched}
                  placeholder='••••••••'
                  type="password"
                  id="password"
                  text='Password'
                  className="mt-1"
                />
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
                    className="relative flex justify-between text-sm pb-4"
                  >
                    <p>
                      Don’t have an account?
                      <Link
                        href="/sign-up"
                        className="link__style"
                      >
                        Sign up
                      </Link>
                    </p>
                    <p className="link__style">
                    <Link
                        href="/forget-password"
                        className="link__style"
                      >
                        Forget password ?
                      </Link>
                      </p>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or Sign up with</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap  justify-center gap-3 w-full">
                  <button onClick={signInWithGitHub} className="w-1/4">
                    <div
                      className="w-full inline-flex justify-center py-2 px-4 border border-green-300 rounded-md shadow-sm bg-white text-sm font-medium  hover:bg-gray-50"
                      style={{
                        padding: "1rem",
                      }}
                    >
                      <span className="sr-only">Sign in with Github</span>
                      <FaGithub fontSize="1.2rem" />
                    </div>
                  </button>
                  <button type="submit" className="w-1/4" onClick={signInWithGoogle}>
                    <div
                      className="w-full inline-flex justify-center py-2 px-4 border border-green-300 rounded-md shadow-sm bg-white text-sm font-medium  hover:bg-gray-50"
                      style={{
                        padding: "1rem",
                      }}
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <FaGoogle fontSize="1.2rem" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center py-16 image h-fit" style={{height:"100vh"}}>
        <ImageSlider urls={validUrls}/>

        </div>
      </div>
    </GuestGuard>
  );
}
