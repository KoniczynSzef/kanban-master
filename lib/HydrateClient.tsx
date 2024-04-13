"use client";

import {
    Hydrate as ReactQueryHydrate,
    HydrateProps,
} from "@tanstack/react-query";

import React from "react";

function Hydrate(props: HydrateProps) {
    return <ReactQueryHydrate {...props} />;
}

export default Hydrate;
