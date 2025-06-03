"use client";

import z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { registerSchema } from "../../schemas";

import { 
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
 } from "@/components/ui/form";

export const SignUpView = () => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            username: "",
        },
    });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto">
                Form column
            </div>
            <div 
                className="h-screen w-full lg:col-span-2 hidden lg:block"
                style={{
                    backgroundImage: "url('/auth-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
        </div>
    );
};