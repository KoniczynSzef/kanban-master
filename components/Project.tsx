"use client";

import {
    CreateProjectSchema,
    CreateProjectSchemaType,
} from "@/types/schemas/create-project-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";

interface Props {}

const Project: FC<Props> = () => {
    const form = useForm<CreateProjectSchemaType>({
        mode: "onChange",
        defaultValues: {
            name: "",
            description: "",
        },
        resolver: zodResolver(CreateProjectSchema),
    });

    return (
        <Form {...form}>
            <form action=""></form>
        </Form>
    );
};

export default Project;
