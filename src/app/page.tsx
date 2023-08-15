"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

import React from "react";

const Home = () => {
  return <Button onClick={() => signIn("github")}>Sign in with github</Button>
}

export default Home;

// MqfSbxlEdK0MIMMR pw
// jwt secret YoxG4RlnN8Czbi+75JjN1nUZGzWml9KOBkj7DrRMGGhP/ZfBxWh2zrGSo62vKLlAifB1vnybDekTIw/1T++m8w==
// url db YoxG4RlnN8Czbi+75JjN1nUZGzWml9KOBkj7DrRMGGhP/ZfBxWh2zrGSo62vKLlAifB1vnybDekTIw/1T++m8w==
