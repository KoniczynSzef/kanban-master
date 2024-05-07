import React, { FC } from "react";

interface Props {
    desc: string;
    required: boolean;
}

const FormHeader: FC<Props> = (props) => {
    return (
        <h4 className="text-xl font-semibold">
            {props.desc}
            <span className="text-red-500">{props.required ? " *" : ""}</span>
        </h4>
    );
};

export default FormHeader;
