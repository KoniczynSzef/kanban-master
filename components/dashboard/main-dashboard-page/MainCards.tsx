import * as Card from "@/components/ui/card";
import { CheckCircle2, FolderOpen, Users2 } from "lucide-react";
import React from "react";

interface Props {
    teamsLength: number;
    projectsLength: number;
    activeTasksLength: number;
}

interface MainCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
}

function MainCard(props: MainCardProps) {
    return (
        <Card.Card className="w-[15rem]">
            <Card.CardHeader>
                <Card.CardTitle>{props.title}</Card.CardTitle>
            </Card.CardHeader>

            <Card.CardContent>
                <div className="flex items-center gap-4 text-muted-foreground">
                    <span>{props.icon}</span>

                    <span className="font-semibold">{props.value}</span>
                </div>
            </Card.CardContent>
        </Card.Card>
    );
}

export const MainCards: React.FC<Props> = (props) => {
    return (
        <div className="flex gap-16">
            <MainCard
                title="Teams"
                value={props.teamsLength}
                icon={<Users2 />}
            />
            <MainCard
                title="Projects"
                value={props.projectsLength}
                icon={<FolderOpen />}
            />
            <MainCard
                title="Active tasks"
                value={props.activeTasksLength}
                icon={<CheckCircle2 />}
            />
        </div>
    );
};
