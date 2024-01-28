import { Input } from "@/components/Input";
import { useFormik } from "formik";
import Image from "next/image";
import * as yup from "yup";
import flighIcon from "../../../../public/Home/bIcon3.png"
const validationSchema = yup.object({
    // email: yup.string().email("Invalid email address").required("Required"),
    // password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export const FlightTab = () => {
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
                    name='fromTo'
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    errors={formik.errors}
                    touched={formik.touched}
                    placeholder='Lahore - Karachi'
                    type="text"
                    id="fromTo"
                    text='From To'
                    className="mt-1"
                />
                <Input
                    name='email'
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    errors={formik.errors}
                    touched={formik.touched}
                    placeholder='Return'
                    type="text"
                    id="email"
                    text='Trip'
                    className="mt-1"
                />
                <Input
                    name='email'
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    errors={formik.errors}
                    touched={formik.touched}
                    placeholder='07 Nov 22 - 13 Nov 22'
                    type="email"
                    id="email"
                    text='Depart-Return'
                    className="mt-1"
                />
                <Input
                    name='email'
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    errors={formik.errors}
                    touched={formik.touched}
                    placeholder='1 Passenger, Economy'
                    type="email"
                    id="email"
                    text='Passenger - Class'
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
                <p>Show flights</p>
            </button>

        </form>
    )
}