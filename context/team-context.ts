"use client";

import { Team } from "@/types/models/team-model";
import React from "react";

export const TeamContext = React.createContext<Team[]>([]);
