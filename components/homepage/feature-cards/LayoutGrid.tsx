import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

const LayoutGrid: FC<Props> = () => {
    return (
        <div className="flex flex-col">
            <div>
                <h2 className="text-3xl font-medium text-primary">
                    Explore power of Kanban
                </h2>
                <Link href="/signup">
                    <Button>Learn more</Button>
                </Link>
            </div>
        </div>
    );
};

export default LayoutGrid;
