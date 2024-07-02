import { Sidebar } from "@/components/dashboard/sidebar/Sidebar";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <div className="flex items-stretch justify-between w-full">
            <Sidebar />
            <div className="w-full container relative my-24">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
