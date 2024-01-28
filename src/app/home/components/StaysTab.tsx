import { Input } from "@/components/Input";
import { useFormik } from "formik";
import Image from "next/image";
import * as yup from "yup";
import flighIcon from "../../../../public/Home/bIcon3.png"
const validationSchema = yup.object({
    // email: yup.string().email("Invalid email address").required("Required"),
    // password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export const StaysTab = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => { },
    })
    return (
        <form
            onSubmit={formik.handleSubmit}
            // className="space-y-6"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                flexDirection: "column"
            }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem"
                }}>
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
                    className="mt-1"
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
                    className="mt-1"
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
                    className="mt-1"
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
                    className="mt-1"
                />
            </div>
            <button type="submit"
                style={{
                    alignSelf: "flex-end",
                    marginRight: '6rem',
                    display:'flex',
                    justifyContent:"center",
                    alignItems:"center",
                    gap:"0.5rem",
                    backgroundColor:"#8ed4bbff",
                    padding:"1rem",
                    borderRadius:'4px'
                }}>
                <Image src={flighIcon} alt="icon" />
                <p>Show stays</p>
            </button>

        </form>
    )
}