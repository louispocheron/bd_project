"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginPage = () => {

    const email = useRef("");
    const password = useRef("");

    const submitSignIn = async () => {
        const res = await signIn("credentials", {
            email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: "/"
        })
    }
    

    return (
        <>
            <p>login page</p>
            <div>
                <input type="text" placeholder="email" onChange={(e) => (email.current = e.target.value)} />
                <input type="text" placeholder="mot de passe" onChange={(e) => (password.current = e.target.value)} />
            </div>
            <Button onClick={submitSignIn}>Se connecter</Button>
        </>
    )
}

export default LoginPage;