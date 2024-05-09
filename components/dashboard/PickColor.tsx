import { CreateTeamSchema } from "@/types/schemas/teams/create-team-schema";
import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

interface Props {
    form: UseFormReturn<CreateTeamSchema>;
}

type ColorCodeVariant = "rgb" | "hex";

function CopyColorCode(props: { variant: ColorCodeVariant }) {
    return (
        <Button>
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
                <FormItem className="space-y-2">
                    <Label htmlFor="teamColor">Team Color</Label>
                    <FormControl>
                        <Input
                            type="color"
                            {...field}
                            className="mx-auto w-48 h-36 color__input"
                        />
                    </FormControl>

                    <CopyColorCode variant="hex" />
                    <CopyColorCode variant="rgb" />
                </FormItem>
            )}
        />
    );
};

export default PickColor;
