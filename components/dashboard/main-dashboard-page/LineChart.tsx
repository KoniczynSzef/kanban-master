import React from "react";
import {
    CartesianGrid,
    LineChart as Chart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface Props {}

const mockData = [
    {
        name: "Jan",
        projects: 4,
        teams: 2,
        productivity: 5.75,
    },

    {
        name: "Feb",
        projects: 3,
        teams: 3,
        productivity: 5.5,
    },

    {
        name: "Mar",
        projects: 5,
        teams: 4,
        productivity: 6.25,
    },

    {
        name: "Apr",
        projects: 6,
        teams: 5,
        productivity: 6.5,
    },

    {
        name: "May",
        projects: 8,
        teams: 7,
        productivity: 7.5,
    },

    {
        name: "Jun",
        projects: 7,
        teams: 6,
        productivity: 7,
    },

    {
        name: "Jul",
        projects: 9,
        teams: 8,
        productivity: 8,
    },

    {
        name: "Aug",
        projects: 10,
        teams: 9,
        productivity: 8.5,
    },

    {
        name: "Sep",
        projects: 11,
        teams: 10,
        productivity: 9,
    },

    {
        name: "Oct",
        projects: 12,
        teams: 11,
        productivity: 9.5,
    },

    {
        name: "Nov",
        projects: 13,
        teams: 12,
        productivity: 10,
    },

    {
        name: "Dec",
        projects: 14,
        teams: 13,
        productivity: 10.5,
    },
];

export const LineChart: React.FC<Props> = () => {
    return (
        <div className="border-2 border-muted rounded-2xl p-8">
            <h3 className="text-xl font-semibold">
                This year&apos;s statistics
            </h3>
            <ResponsiveContainer height={300} className={"my-8"}>
                <Chart width={600} height={300} data={mockData}>
                    <CartesianGrid stroke="#ddd" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type={"monotone"}
                        dataKey={"projects"}
                        stroke="#4f46e5"
                    />
                    <Line
                        type={"monotone"}
                        dataKey={"teams"}
                        stroke="#059669"
                    />
                    <Line
                        type={"monotone"}
                        dataKey={"productivity"}
                        stroke="#334155"
                    />
                </Chart>
            </ResponsiveContainer>
        </div>
    );
};
