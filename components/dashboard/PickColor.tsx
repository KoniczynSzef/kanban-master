import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { hexToRgb } from "@/utils/dashboard/hex-to-rgb";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
}

type ColorCodeVariant = "rgb" | "hex";

function CopyColorCode(props: { variant: ColorCodeVariant; value: string }) {
    console.log(props.variant, props.value);

    // if (props.variant === "rgb") {
    //     // props.value = hexToRgb(props.value);
    //     const val = hexToRgb(props.value);
    //     console.log(val);
    // }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.variant);
        toast.success(
            `Copied ${props.variant.toLocaleUpperCase()} to clipboard`
        );
    };

    return (
        <Button
            className="uppercase flex gap-2"
            variant={"outline"}
            onClick={copyToClipboard}
        >
            {props.variant}
            <Copy />
        </Button>
    );
}

const PickColor: FC<Props> = (props) => {
    return (
        <FormField
            control={props.form.control}
            name="teamColor"
            render={({ field }) => (
                <FormItem className="flex flex-col gap-4">
                    <Label htmlFor="teamColor">Team Color</Label>
                    <FormControl>
                        <Input
                            type="color"
                            {...field}
                            className="mx-auto w-48 h-36 color__input"
                        />
                    </FormControl>

                    <div className="flex justify-center gap-8">
                        <CopyColorCode variant="hex" value={field.value} />
                        <CopyColorCode variant="rgb" value={field.value} />
                    </div>
                    {field.value}
                </FormItem>
            )}
        />
    );
};

export default PickColor;
