"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { notification } from 'antd';
import GuestGuard from '@/components/GuestGuard/GuestGuard';
import { auth } from '../../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import ImageSlider from '@/components/ImageSlider';
import { validUrls } from '@/constants/data';
import { Button } from '@/components/ui/button';
import Logo from '../../../../public/Logo.png';
import Image from 'next/image';
import { Input } from '@/components/Input';
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function SignUpForm() {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();

  const handleSignup = async (values: any) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      api.success({
        message: "User registred succesfully",
        placement: 'topRight',
      })
      setTimeout(() => {
        router.push("/sign-in");
      }, 1000)

    } catch (error: any) {
      api.error({
        message: error.message,
        placement: 'topRight',
      })
    }
  };
  const formik: any = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSignup,
  },
  );

  return (
    <GuestGuard>
      {contextHolder}
      <div className="min-h-screen flex flex-col sm:flex-row">
        <div className="flex-1 flex justify-center py-16 image" style={{ height: "100vh" }}>

          <ImageSlider urls={validUrls} />
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="w-full">
            <div className="mb-6">
              <Image src={Logo} alt="logo" className="mb-4" />
              <h1 className="text-4xl font-bold mt-2 mb-6">Sign up</h1>
              <p className="text-gray-600">Let’s get you all set up so you can access your personal account.</p>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="flex gap-4">
                <Input
                  name='firstName'
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  errors={formik.errors}
                  touched={formik.touched}
                  placeholder='John'
                  type="text"
                  id="first-name"
                  text='First Name'
                  className="flex-1"
                />
                <Input
                  name='lastName'
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  errors={formik.errors}
                  touched={formik.touched}
                  placeholder='saad'
                  type="text"
                  id="last-name"
                  text='Last Name'
                  className="flex-1"
                />
              </div>

              <div className="flex gap-4">
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
                  className="flex-1"
                />
                <Input
                  name='phone'
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  errors={formik.errors}
                  touched={formik.touched}
                  placeholder='+216 12345678'
                  type="number"
                  id="phone"
                  text='Phone Number'
                  className="flex-1"
                />
              </div>
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
                className="flex-1"
              />
              <Input
                name='confirmPassword'
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                errors={formik.errors}
                touched={formik.touched}
                placeholder='••••••••'
                type="password"
                id="password"
                text='Confirm Password'
                className="flex-1"
              />
              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  id="terms"
                  type="checkbox"
                />
                <label className="ml-2 block text-sm text-gray-900" htmlFor="terms">
                  I agree to all the rules
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
                  }}
                  className=" text-base cursor-pointer pl-2 font-medium hover:text-pink-600"
                >
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

