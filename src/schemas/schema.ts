import React from "react";

export type Column = {
    name: string;
    displayName: string;
    style?: React.CSSProperties
};

export type Schema = {
    columns: (Column | string)[];
    endpoint: string
}
