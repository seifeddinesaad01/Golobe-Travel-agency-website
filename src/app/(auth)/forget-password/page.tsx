'use client'
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/Logo.png";
import { useFormik } from "formik";
import * as yup from "yup";
import GuestGuard from "@/components/GuestGuard/GuestGuard";
import { sendPasswordResetEmail } from 'firebase/auth';
import sendedImg from "../../../../public/sended.png"
import { auth } from "../../../config/firebase";
import ImageSlider from "@/components/ImageSlider";
import { validUrls } from "@/constants/data";
import PopUp from "@/components/Modal";
import { Input } from "@/components/Input";
import { FormikHelpers } from "formik";

const validationSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Required"),
});

interface SignInProps { }

interface FormValues {
    email: string;
}


const SignIn: React.FC<SignInProps> = () => {
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleResetPassword = async (values: FormValues, { resetForm }: any
    ) => {
        try {
            await sendPasswordResetEmail(auth, values.email);
            setMessage('Password reset email sent. Check your inbox.');
            setIsModalOpen(true);
            resetForm();
        } catch (error: any) {
            setMessage(`Error: ${error?.message}`);
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => handleResetPassword(values, { resetForm}),
    });

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <GuestGuard>
            <PopUp
                isModalOpen={isModalOpen}
                text={message}
                handleOk={handleOk}
                handleCancel={handleCancel}
                image={sendedImg}
            />
            <div className="min-h-screen flex flex-col sm:flex-row">
                <div className="flex-1 py-16 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
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
                                <Input
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    errors={formik.errors}
                                    touched={formik.touched}
                                    placeholder="John@gmail.com"
                                    type="email"
                                    id="email"
                                    text="Email"
                                    className="mt-1"
                                />
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        style={{
                                            backgroundColor: "#8cd4b9ff",
                                        }}
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
};

export default SignIn;
