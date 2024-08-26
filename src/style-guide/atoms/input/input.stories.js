import { Input } from "./input.tsx";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export const InputStories = {
  args: {
    placeholder: "Placeholder text",
    type: "text",
    value: "input value",
  },
};
