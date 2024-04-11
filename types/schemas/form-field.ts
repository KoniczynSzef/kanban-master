import React from "react";
import { CreateUserSchemaType } from "./create-user.schema";

export type InputFormFieldProps = {
    prop: keyof CreateUserSchemaType;
    inputType: React.InputHTMLAttributes<HTMLInputElement>["type"];
    label: string;
};

export const inputFormFields: InputFormFieldProps[] = [
    {
        prop: "name",
        inputType: "text",
        label: "Name",
    },
    {
        prop: "surname",
        inputType: "text",
        label: "Surname",
    },
    {
        prop: "email",
        inputType: "email",
        label: "Email",
    },
    {
        prop: "nickname",
        inputType: "text",
        label: "Nickname",
    },
    {
        prop: "bio",
        inputType: "text",
        label: "Bio",
    },
    {
        prop: "businessEmail",
        inputType: "email",
        label: "Business Email",
    },
    {
        prop: "picture",
        inputType: "url",
        label: "Picture",
    },
];
