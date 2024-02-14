import { Input } from "@/components/Input";
import { useFormik } from "formik";
import Image from "next/image";
import * as yup from "yup";
import flighIcon from "../../../../public/Home/bIcon3.png"
import Link from "next/link";
const validationSchema = yup.object({
    // email: yup.string().email("Invalid email address").required("Required"),
    // password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export const StaysTab = ({ title }: { title?: string }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => { },
    })
    return (
        <div className="flex flex-col justify-start items-center gap-2 w-full">
            {title && <h1 className="self-center sm:self-start text-xl font-bold">Where are you staying? </h1>}
            <form
                onSubmit={formik.handleSubmit}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    flexDirection: "column"
                }}>
                <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-8 w-full">
                    <Input
                        name='email'
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        errors={formik.errors}
                        touched={formik.touched}
                        placeholder='Al Amir Palace'
                        type="text"
                        id="email"
                        text='Hotel'
                        className="mt-1 w-full"
                    />
                    <Input
                        name='email'
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        errors={formik.errors}
                        touched={formik.touched}
                        placeholder='Deluxe Room'
                        type="email"
                        id="email"
                        text='Room Type'
                        className="mt-1 w-full"
                    />
                    <Input
                        name='fromTo'
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        errors={formik.errors}
                        touched={formik.touched}
                        placeholder='0'
                        type="number"
                        id="fromTo"
                        text='Days'
                        className="mt-1 w-full"
                    />
                    <Input
                        name='email'
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        errors={formik.errors}
                        touched={formik.touched}
                        placeholder='0'
                        type="number"
                        id="email"
                        text='Visitors number'
                        className="mt-1 w-full"
                    />
                </div>
                <div className="flex justify-end items-center gap-8 lg:self-end">
                    <Link href="/find-flight" >
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#8ed4bbff",
                                padding: "1rem",
                                borderRadius: '4px',
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}>
                            <Image src={flighIcon} alt="icon" />
                            <p>Show flights</p>
                        </button>
                    </Link>
                </div>

            </form>
        </div>
    )
}