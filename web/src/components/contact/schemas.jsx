import * as Yup from "yup";

export const sendMessageSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    project: Yup.string().required("Please enter project details"),
    
});