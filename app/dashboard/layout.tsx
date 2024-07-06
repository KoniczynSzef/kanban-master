import { AnimatedWrapper } from "@/components/dashboard/AnimatedWrapper";
import { SidebarContextWrapper } from "@/components/dashboard/helpers/SidebarContextWrapper";
import { Sidebar } from "@/components/dashboard/sidebar/Sidebar";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <div className="flex w-full">
            <SidebarContextWrapper>
                <Sidebar />
                <AnimatedWrapper>{props.children}</AnimatedWrapper>
            </SidebarContextWrapper>
        </div>
    );
};

export default Layout;
