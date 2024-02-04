import * as z from "zod"
export const SignupValidation = z.object({
    name: z.string().min(3, {message: 'Cmon man who has such a short name'}).max(20),
    username: z.string().min(2, {message: 'Nice, but make it longer'}).max(50),
    email: z.string().email(), 
    password: z.string().min(8, { message: 'Really??!! Short passwords can be cracked significantly faster'}),   
})

export const SigninValidation = z.object({
    email: z.string().email(), 
    password: z.string().min(8, { message: 'Really??!! Did u actually forget your password??'}),   
})

export const PostValidation = z.object({
    caption: z.string().min(5).max(40),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100), 
    tags: z.string(),  
})