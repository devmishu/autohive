"use client"

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";




const SingupPage = () => {
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        
        const signupData = Object.fromEntries(formData.entries());

        console.log(signupData);

        const { name, userImage, email, password } = signupData


        const { data, error } = await authClient.signUp.email({
            name,
            userImage,
            email,
            password
        });

        console.log({ data, error });

        if (data) {
            toast.success('Account created successfully');
            router.push('/login');

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
                            Start your journey <br />with us today.
                        </h2>
                        <p className="text-secondary text-sm leading-relaxed">
                            Create an account to unlock premium car rentals, track your bookings effortlessly, and manage your custom fleet.
                        </p>
                    </div>
                    <div>
                        hello
                    </div>
                    
                    <div className="space-y-3 text-sm text-secondary">
                        <div className="flex items-center space-x-2">
                            <span className="text-emerald-500">✓</span>
                            <span>Easy & Fast Booking System</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-emerald-500">✓</span>
                            <span>Premium & Verified Car List</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-emerald-500">✓</span>
                            <span>24/7 Professional Driver Support</span>
                        </div>
                    </div>
                </div>

                
                <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">

                    
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-primary mb-1">Create Account</h3>
                        <p className="text-secondary text-xs">Please fill in the details to sign up</p>
                    </div>

                    <Form
                        className="flex flex-col gap-4 w-full"
                        onSubmit={handleSignup}
                    >
                       
                        <TextField isRequired name="name" type="text" className="flex flex-col gap-1">
                            <Label className="text-xs font-semibold text-primary">Name</Label>
                            <Input placeholder="Mishu Debnath" className="input-primary w-full text-sm" />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                       
                        <TextField isRequired name="userImage" type="url" className="flex flex-col gap-1">
                            <Label className="text-xs font-semibold text-primary">Image URL</Label>
                            <Input placeholder="https://example.com/profile.jpg" className="input-primary w-full text-sm" />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        
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
                                Sign Up
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

                    
                    <p className="text-secondary text-xs text-center mt-6 ">
                        Already have an account?{" "}
                        <Link href="/login" className="text-red-600 dark:text-red-500 font-semibold hover:underline">
                            Log In
                        </Link>
                    </p>

                </div>

            </div>
        </div>
    );
};

export default SingupPage;


