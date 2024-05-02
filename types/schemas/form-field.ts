import React from "react";
import { CreateUserSchemaType } from "./create-user.schema";

export type InputFormFieldProps = {
    prop: keyof CreateUserSchemaType;
    inputType: React.InputHTMLAttributes<HTMLInputElement>["type"];
    label: string;
    description: string;
};

export const inputFormFields: InputFormFieldProps[] = [
    {
        prop: "name",
        inputType: "text",
        label: "Name",
        description: "Your name",
    },
    {
        prop: "surname",
        inputType: "text",
        label: "Surname",
        description: "Your surname",
    },
    {
        prop: "email",
        inputType: "email",
        label: "Email",
        description: "Your email",
    },
    {
        prop: "nickname",
        inputType: "text",
        label: "Nickname",
        description: "Nickname to be displayed on the platform",
    },
    {
        prop: "bio",
        inputType: "text",
        label: "Bio",
        description: "Tell us more about yourself",
    },
    {
        prop: "businessEmail",
        inputType: "email",
        label: "Business Email",
        description: "Your business email",
    },
    {
        prop: "picture",
        inputType: "url",
        label: "Picture",
        description: "URL to your profile picture",
    },
];
