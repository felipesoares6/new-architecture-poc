import { TextField } from "./text-field.tsx";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export const TextFieldStories = {
  args: {
    placeholder: "Placeholder text",
    type: "text",
    value: "TextField value",
  },
};

export const TextFieldStoriesWithError = {
  args: {
    placeholder: "Placeholder text",
    type: "text",
    value: "TextField value",
    errorMessage: "Error!",
  },
};
