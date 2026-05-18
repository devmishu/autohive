"use client"
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";


const SingupPage = () => {

    const handleSignin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        // Convert FormData to a readable object
        const signinData = Object.fromEntries(formData.entries());

        console.log(signinData);
        const { email, password } = signinData;


        const { data, error } = await authClient.signIn.email({
            email,
            password
        });

        console.log({ data, error });

        if (data) {
            alert('Login Sessufully');
            redirect('/')
        }
        if (error) {
            alert(error.message);
        }

    };

    return (
        <div className="app-container min-h-[70vh] mt-20 flex justify-center items-center">
            <Form
                className="flex w-100  flex-col gap-4 "
                render={(props) => <form {...props} data-custom="foo" />}
                onSubmit={handleSignin}
            >
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <button type="submit" className="button-primary">
                        Log In
                    </button>



                    <button type="reset" className="button-outline">
                        Reset
                    </button>

                </div>
            </Form>
        </div>
    );
};

export default SingupPage;