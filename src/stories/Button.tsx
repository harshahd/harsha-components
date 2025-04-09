import React from "react";

export interface ButtonProps {
    label:string;
    buttonVariant: "primary" | "secondary" | "tertiary";
    onClick?:() => void;
}

export const Button=({label,buttonVariant,onClick,...props}:ButtonProps) => {
return (
    <button
    type="button"
    className={buttonVariant}
    onClick={onClick}>
        <span>{label}</span>
    </button>
);
};

