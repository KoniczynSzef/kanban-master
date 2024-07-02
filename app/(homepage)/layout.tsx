import Navbar from "@/components/navbar/Navbar";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const layout: React.FC<Props> = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
};

export default layout;
