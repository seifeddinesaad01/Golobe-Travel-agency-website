"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from "@/components/ui/button";
import SignInImage from "../../../../public/SignIn/sideImage.png";
import Logo from "../../../../public/Logo.png";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import GuestGuard from '@/components/GuestGuard/GuestGuard';
import { auth } from "../../../config/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth"

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export default function SignUpForm() {
  // const handleSignup = async (e:any, values:any) => {
  //   e.preventDefault();

  //   try {
  //     // Create user account
  //     const userCredential = await createUserWithEmailAndPassword(auth,values.email, values.password);

  //     // Get the user ID from the authentication result
  //     const userId = userCredential.user.uid;

  //     // Store additional user data in Firestore
  //     // await firebase.firestore().collection('users').doc(userId).set({
  //     //   firstName: firstName,
  //     //   lastName: lastName,
  //     //   email: email,
  //     //   phone: phone,
  //     // });

  //     console.log('User signed up successfully!');
  //   } catch (error:any) {
  //     console.error('Error signing up:', error.message);
  //   }
  // };
  const handleSubmit = (values: any) => {
    console.log(values,'saad')
    // try {
    //   // Create user account
    //   const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
    //   // Get the user ID from the authentication result
    //   const userId = userCredential.user.uid;
    //   console.log('User signed up successfully!');
    // } catch (error: any) {
    //   console.error('Error signing up:', error.message);
    // }
  }
  const formik: any = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit:handleSubmit,
  },
  );

  return (
    <GuestGuard>
      <div className="min-h-screen bg-white flex justify-center flex-col-reverse sm:flex-row">
        <div
          className="flex justify-center items-center lg:w-1/2"
        >
          <Image src={SignInImage} alt="image" className="h-3/4 " height={200} width={500} />
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="w-full">
            <div className="mb-6">
              <Image src={Logo} alt="logo" className="mb-4" />
              <h1 className="text-4xl font-bold mt-2 mb-6">Sign up</h1>
              <p className="text-gray-600">Let’s get you all set up so you can access your personal account.</p>
            </div>
            <form onSubmit={formik.onSubmit} className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="John"
                    className={`${formik.touched.firstName && formik.errors.firstName
                      ? "border-red-300"
                      : "border-gray-300"
                      } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Doe"
                    className={`${formik.touched.lastName && formik.errors.lastName
                      ? "border-red-300"
                      : "border-gray-300"
                      } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="john.doe@gmail.com"
                    className={`${formik.touched.email && formik.errors.email
                      ? "border-red-300"
                      : "border-gray-300"
                      } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    placeholder="123-456-7890"
                    className={`${formik.touched.email && formik.errors.email
                      ? "border-red-300"
                      : "border-gray-300"
                      } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  className={`${formik.touched.password && formik.errors.password
                    ? "border-red-300"
                    : "border-gray-300"
                    } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  placeholder="••••••••"
                  type="password"
                  className={`${formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? "border-red-300"
                    : "border-gray-300"
                    } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{formik.errors.confirmPassword}</p>
                )}
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
              <Button type="submit" className="w-full text-black" style={{
                backgroundColor: "#8cd4b9ff",
              }}>Create account</Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  style={{
                    color: "#ff8682ff",
                    fontSize: "1rem",
                    cursor: "pointer",
                    paddingLeft: "0.5rem",
                    fontWeight: '500'
                  }}
                  className="text-indigo-600 hover:text-indigo-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </GuestGuard>

  )
}

