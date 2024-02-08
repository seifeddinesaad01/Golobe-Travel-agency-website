import { Input } from "@/components/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import GenericButton from "@/components/GenericButton";
const validationSchema = yup.object({
    // email: yup.string().email("Invalid email address").required("Required"),
    // password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

export const FlightTab = ({ title, showButton, href, icon, buttonText }: any) => {
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
            {title && <h1 className="self-center sm:self-start text-xl font-bold">Where are you flying? </h1>}
            <form
                onSubmit={formik.handleSubmit}
                className="flex items-center justify-center flex-col gap-4 w-full"
            >
                <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-8 w-full">
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
                        className="mt-1 w-full"
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
                        className="mt-1 w-full"
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
                        className="mt-1 w-full"
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
                        className="mt-1 w-full"
                    />
                    {showButton && <GenericButton href={href} icon={icon} text={buttonText} className="flex justify-end items-center gap-8 lg:self-end w-64" />}
                </div>
                {!showButton && <GenericButton href={href} icon={icon} text={buttonText} className="flex justify-end items-center gap-8 lg:self-end" />}
            </form>
        </div>
    )
}