import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3, "votre nom doit au moins avoir 3 charactere"),
    email: z.string().email("veuillez rentrer un adresse email valide"),
    password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères."),
}); 

// exctract zod types into a ts type
export type UserType = z.infer<typeof userSchema>;

