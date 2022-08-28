import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { postData } from "../utils/fetchData";
import Button from "./Button";
import TextInput from "./TextInput";

export default function FormSignin() {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const res = await postData("/auth/signup", form);
            if (res.data) {
                toast.success("berhasil signup", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                router.push("/signin");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className="form-login d-flex flex-column mt-4 mt-md-0">
            <TextInput
                label={"First Name"}
                type={"text"}
                value={form.firstName}
                name="firstName"
                placeholder="First name here"
                onChange={handleChange}
            />
            <TextInput
                label={"Last Name"}
                type={"text"}
                name="lastName"
                value={form.lastName}
                placeholder="First name here"
                onChange={handleChange}
            />

            <TextInput
                label={"Email"}
                type={"email"}
                name="email"
                value={form.email}
                placeholder={"semina@bwa.com"}
                onChange={handleChange}
            />

            <TextInput
                label={"Password (6 characters)"}
                type={"password"}
                value={form.password}
                name="password"
                placeholder="Type your password"
                onChange={handleChange}
            />

            <TextInput
                label={"Role"}
                type={"text"}
                value={form.role}
                name="role"
                placeholder="ex: Product Designer"
                onChange={handleChange}
            />

            <div className="d-grid mt-2 gap-4">
                <Button variant={"btn-green"} action={() => handleSubmit()}>
                    Sign Up
                </Button>
                <Button
                    action={() => router.push("/signin")}
                    variant="btn-navy">
                    Already have account? Sign In here!
                </Button>
            </div>
        </form>
    );
}
