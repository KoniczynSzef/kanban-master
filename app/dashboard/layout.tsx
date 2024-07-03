import { Sidebar } from "@/components/dashboard/sidebar/Sidebar";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="my-24 container md:mr-8">{props.children}</div>
        </div>
    );
};

export default Layout;
