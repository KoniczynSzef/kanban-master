import { Sidebar } from "@/components/dashboard/sidebar/Sidebar";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="ml-[24rem] mr-[8rem] w-full">{props.children}</div>
        </div>
    );
};

export default Layout;
