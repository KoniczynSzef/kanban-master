import { Button } from "@/components/ui/button";
import { Team } from "@/types/models/team-model";
import React from "react";

interface Props {
    teams: Team[];
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
}

export const Searchbar: React.FC<Props> = (props) => {
    const resetTeams = () => {
        props.setTeams([]);
    };

    return (
        <div>
            <Button onClick={resetTeams}>Reset teams</Button>
        </div>
    );
};
