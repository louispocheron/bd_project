"use client"
import axios from "@/lib/axios";
import prisma from "@/lib/prisma";
import { UserType, userSchema } from "@/lib/types/userSchema";
import addUser from "@/serverActions/userActions";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SignUp = () => {

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState<UserType[]>([]);
    const router = useRouter();

    useEffect(() => {

        if (error) {
            const timeOut = setTimeout(() => {
                setError(false);
            }, 4000)

            return () => clearTimeout(timeOut);
        }
        return;
    }, [error])

    const submitForm = async (event: any) => {
        event.preventDefault();

        const data: UserType = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }

        let responseData: UserType[] = [];
        axios.post('/api/user', {
            data
        }).then((response) => {
            console.log(response.data)
            setUserData(response.data);
        }).catch((error) => {
            setError(true)
            console.log(error.response);
            setErrorMessage(error.response?.data?.error);
        })
    }

    useEffect(() => {
        console.log(userData);
        if (userData) {
            const res = async () => {
                await signIn('credentials', {
                    email: userData[0].email,
                    password: userData[0].password,
                    redirect: true,
                    callbackUrl: '/'
                });
            }
        }
    }, [userData]);


    return (
        <form onSubmit={submitForm}>
            {error && <p>{errorMessage}</p>}
            <input name="name" />
            <input name="password" />
            <input name="email" />

            {/* <input name="email" ref={emailRef} />
            <input name="password" type="password" ref={passwordRef} /> */}

            {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} */}

            <button type="submit">Créer l'utilisateur</button>
        </form>
    );

}

export default SignUp;