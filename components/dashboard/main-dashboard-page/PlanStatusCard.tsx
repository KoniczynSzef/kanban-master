import { Button } from "@/components/ui/button";
import * as Card from "@/components/ui/card";
import { users } from "@/database/schema";
import { InferSelectModel } from "drizzle-orm";
import React from "react";

interface Props {
    plan: NonNullable<InferSelectModel<typeof users>["plan"]>;
}

export const PlanStatusCard: React.FC<Props> = (props) => {
    return (
        <Card.Card
            className={`bg-gradient-to-br w-full md:w-[15rem] ${
                props.plan === "pro"
                    ? "from-indigo-700 to-blue-800 text-white"
                    : "text-black"
            }`}
        >
            <Card.CardHeader>
                <Card.CardTitle>
                    {props.plan.slice(0, 1).toUpperCase() + props.plan.slice(1)}{" "}
                    Plan
                </Card.CardTitle>
            </Card.CardHeader>

            <Card.CardContent>
                {props.plan === "free" ? (
                    <Button>Upgrade</Button>
                ) : (
                    <span>Expires: 17 march 2025</span>
                )}
            </Card.CardContent>
        </Card.Card>
    );
};
