"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import toast from "react-hot-toast";

const SingInPage = () => {

    const handleSignin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        
        const signinData = Object.fromEntries(formData.entries());

        console.log(signinData);
        const { email, password } = signinData;


        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        console.log({ data, error });

        if (data) {

            toast.success('Login Successfully');

        }
        if (error) { 
            toast.error(error.message);
        }

    };

    // google signin
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="app-container min-h-[85vh] mt-24 flex justify-center items-center">

           
            <div className="card-primary flex flex-col md:flex-row items-stretch w-full md:max-w-4xl  overflow-hidden shadow-xl">

                
                <div className="hidden md:flex md:w-1/2 bg-zinc-100 dark:bg-zinc-900/50 p-10 flex-col justify-between border-r border-zinc-200 dark:border-zinc-700">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
                            <span className="text-red-500 border-2 border-red-500 px-1 rounded font-black">C</span>
                            <span className="text-primary">Carlist</span>
                        </div>
                        <h2 className="text-2xl font-black text-primary pt-6 leading-tight">
                            Welcome Back! <br />Ready to hit the road?
                        </h2>
                        <p className="text-secondary text-sm leading-relaxed">
                            Log in to access your customized dashboard, manage active bookings, and explore our newest premium vehicle additions.
                        </p>
                    </div>

                    
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                        <p className="text-primary text-xs font-bold mb-1">💡 Smart Rental Tip</p>
                        <p className="text-secondary text-[11px] leading-normal">
                            Always check your booking calendar for timely updates on vehicle pickup schedules and verification requirements.
                        </p>
                    </div>
                </div>

               
                <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">

                   
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-primary mb-1">Account Login</h3>
                        <p className="text-secondary text-xs">Enter your credentials to secure your session</p>
                    </div>

                    <Form
                        className="flex flex-col gap-4 w-full"
                        onSubmit={handleSignin}
                    >
                       
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            className="flex flex-col gap-1"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-xs font-semibold text-primary">Email</Label>
                            <Input placeholder="john@example.com" className="input-primary w-full text-sm" />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            className="flex flex-col gap-1"
                            validate={(value) => {
                                if (value.length < 8) return "Password must be at least 8 characters";
                                if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                                if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                                return null;
                            }}
                        >
                            <Label className="text-xs font-semibold text-primary">Password</Label>
                            <Input placeholder="Enter your password" className="input-primary w-full text-sm" />
                            <Description className="text-[11px] text-secondary leading-snug">
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        
                        <div className="flex gap-3 mt-2">
                            <button type="submit" className="button-primary flex-1 justify-center py-2.5 text-sm font-medium">
                                Log In
                            </button>
                            <button type="reset" className="button-outline py-2.5 text-sm font-medium">
                                Reset
                            </button>
                        </div>
                    </Form>

                    
                    <div className="relative flex py-4 items-center">
                        <div className="flex-grow border-t border-zinc-200 dark:border-zinc-700"></div>
                        <span className="flex-shrink mx-4 text-secondary text-xs">Or continue with</span>
                        <div className="flex-grow border-t border-zinc-200 dark:border-zinc-700"></div>
                    </div>

                    
                    <Button
                        onClick={signIn}
                        className="w-full dark:bg-black " variant="tertiary">
                        <Icon icon="devicon:google" />

                        Sign in with Google
                    </Button>

                    
                    <p className="text-secondary text-xs text-center mt-6">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-red-600 dark:text-red-500 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>

                </div>

            </div>
        </div>
    );
};

export default SingInPage;