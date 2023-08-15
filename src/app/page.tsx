"use client"
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";

const Home = () => {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <>
      {session?.user ? <p>{session.user.name}</p> : <p>pas connecté</p>}
      <Button onClick={() => signIn()}>Sign in </Button>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
  )
}

export default Home;

// MqfSbxlEdK0MIMMR pw
// jwt secret YoxG4RlnN8Czbi+75JjN1nUZGzWml9KOBkj7DrRMGGhP/ZfBxWh2zrGSo62vKLlAifB1vnybDekTIw/1T++m8w==
// url db YoxG4RlnN8Czbi+75JjN1nUZGzWml9KOBkj7DrRMGGhP/ZfBxWh2zrGSo62vKLlAifB1vnybDekTIw/1T++m8w==
