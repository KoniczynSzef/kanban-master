"use client";

import * as NavigationMenu from "@/components/ui/navigation-menu";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

const NavigationMenuWrapper: FC<Props> = () => {
    return (
        <NavigationMenu.NavigationMenu>
            <NavigationMenu.NavigationMenuList>
                <NavigationMenu.NavigationMenuItem>
                    <NavigationMenu.NavigationMenuTrigger>
                        Learn
                    </NavigationMenu.NavigationMenuTrigger>
                    <NavigationMenu.NavigationMenuContent className="p-4 py-6 grid grid-cols-2 md:w-[600px] gap-8">
                        <div className="flex flex-col items-start gap-1">
                            <Link href="/features">
                                <NavigationMenu.NavigationMenuLink
                                    className={NavigationMenu.navigationMenuTriggerStyle()}
                                >
                                    Features
                                </NavigationMenu.NavigationMenuLink>
                            </Link>
                            <p className="text-sm text-muted-foreground ml-4">
                                Explore all the features that KanMaster offers.
                                Learn how to manage your projects effortlessly
                                📊
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <Link href="/pricing">
                                <NavigationMenu.NavigationMenuLink
                                    className={NavigationMenu.navigationMenuTriggerStyle()}
                                >
                                    Pricing
                                </NavigationMenu.NavigationMenuLink>
                            </Link>
                            <p className="text-sm text-muted-foreground ml-4">
                                Check out our pricing plans and choose the one
                                that fits your needs. Start for free 🎁
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <Link href="/integrations">
                                <NavigationMenu.NavigationMenuLink
                                    className={NavigationMenu.navigationMenuTriggerStyle()}
                                >
                                    Integrations
                                </NavigationMenu.NavigationMenuLink>
                            </Link>
                            <p className="text-sm text-muted-foreground ml-4">
                                Connect your favorite tools with KanMaster. Get
                                more done with less effort 🛠️
                            </p>
                        </div>
                    </NavigationMenu.NavigationMenuContent>
                </NavigationMenu.NavigationMenuItem>

                <NavigationMenu.NavigationMenuItem>
                    <NavigationMenu.NavigationMenuTrigger>
                        Manage
                    </NavigationMenu.NavigationMenuTrigger>
                    <NavigationMenu.NavigationMenuContent className="p-4 py-6 grid grid-cols-2 md:w-[600px] gap-8">
                        <div className="flex flex-col items-start gap-1">
                            <Link href="/getting-started">
                                <NavigationMenu.NavigationMenuLink
                                    className={NavigationMenu.navigationMenuTriggerStyle()}
                                >
                                    Getting Started
                                </NavigationMenu.NavigationMenuLink>
                            </Link>
                            <p className="text-sm text-muted-foreground ml-4">
                                Learn how to get started with KanMaster. Create
                                your first team and project 🧑‍💻
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <Link href="/projects">
                                <NavigationMenu.NavigationMenuLink
                                    className={`${NavigationMenu.navigationMenuTriggerStyle()}`}
                                >
                                    Dashboard
                                </NavigationMenu.NavigationMenuLink>
                            </Link>
                            <p className="text-sm text-muted-foreground ml-4">
                                View all projects, tasks, and members in one
                                place. Full power of Kanban is here 🚀
                            </p>
                        </div>
                        <div>
                            <Link href="/projects/new">
                                <NavigationMenu.NavigationMenuLink
                                    className={NavigationMenu.navigationMenuTriggerStyle()}
                                >
                                    New Project
                                </NavigationMenu.NavigationMenuLink>
                            </Link>

                            <p className="text-sm text-muted-foreground ml-4">
                                Create a new project and invite your team
                                members. Start working together and get things
                                done 🎉
                            </p>
                        </div>
                    </NavigationMenu.NavigationMenuContent>
                </NavigationMenu.NavigationMenuItem>
            </NavigationMenu.NavigationMenuList>
        </NavigationMenu.NavigationMenu>
    );
};

export default NavigationMenuWrapper;
