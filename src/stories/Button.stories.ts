import {Meta, StoryObj} from "@storybook/react";
import { fn } from "@storybook/test";
import {action } from "@storybook/addon-actions";
import {Button} from "./Button";

const buttonMeta:Meta<typeof Button> = {
    title: "Button",
    component:Button,
    args: {
        onClick:fn(),
    }
};

export default buttonMeta;

type ButtonStory=StoryObj<typeof buttonMeta>;

export const primaryButton:ButtonStory = {
    args: {
        label:"Primary button",
        buttonVariant:"primary",
        onClick:action('activate-primary-button'),
    }
};

export const secondaryButton:ButtonStory = {
    args: {
        label:"Secondary button",
        buttonVariant:"secondary",
    }
};

export const tertiaryButton:ButtonStory = {
    args: {
        label: "Tertiary button",
        buttonVariant: "tertiary",
    }
};


