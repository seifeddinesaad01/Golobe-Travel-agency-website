'use client'
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/Logo.png";
import SignInImage from "../../../../public/SignIn/sideImage.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import GuestGuard from "@/components/GuestGuard/GuestGuard";
import { notification } from "antd"
import { sendPasswordResetEmail } from 'firebase/auth';

import { auth } from "../../../config/firebase";
import ImageSlider from "@/components/ImageSlider";
import { validUrls } from "@/constants/data";

const validationSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Required"),
});

export default function SignIn() {
    const [message, setMessage] = useState('');

    const [api, contextHolder] = notification.useNotification();
    const router = useRouter();
    const handleResetPassword = async (values: any) => {
        try {
            await sendPasswordResetEmail(auth, values.email);
            setMessage('Password reset email sent. Check your inbox.');
        } catch (error: any) {
            setMessage(`Error: ${error?.message}`);
        }
    };
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: handleResetPassword,
    });


    return (
        <GuestGuard>
            {contextHolder}
            <div className="min-h-screen flex flex-col sm:flex-row">
                <div className="flex-1 py-16 flex flex-col justify-center px-4 sm:px-6  lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg">
                        <div className="mx-auto form__header">
                            <Image alt="Golobe" className="h-12 w-32" src={Logo} width={100} />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Forget Password?</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Don’t worry, happens to all of us. Enter your email below to recover your password
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
                                            className={`${formik.touched.email && formik.errors.email
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
                                <div>
                                    <button
                                        type="submit"
                                        style={{
                                            backgroundColor: "#8cd4b9ff",
                                        }}
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center pt-28 p-16" style={{ height: "100vh" }}>
                    <ImageSlider urls={validUrls} />
                </div>
            </div>
        </GuestGuard>
    );
}
