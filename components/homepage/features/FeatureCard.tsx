import * as Card from "@/components/ui/card";
import { type Feature } from "@/types/homepage/Feature";
import React from "react";

interface Props {
    feature: Feature;
}

export const FeatureCard: React.FC<Props> = (props) => {
    return (
        <Card.Card className="w-72">
            <Card.CardHeader>
                {props.feature.icon}
                <Card.CardTitle className="pt-1">
                    {props.feature.title}
                </Card.CardTitle>
            </Card.CardHeader>

            <Card.CardContent>
                <Card.CardDescription>
                    {props.feature.description}
                </Card.CardDescription>
            </Card.CardContent>
        </Card.Card>
    );
};
