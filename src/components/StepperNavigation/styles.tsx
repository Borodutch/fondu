import { classnames } from "classnames/tailwind";

export const inactiveButtonStyle = classnames(
  "flex-1",
  "p-3",
  "border-2",
  "border-gray-300",
  "text-gray-300",
  "rounded-base",
  "hover:opacity-80",
  "focus:outline-none",
  "cursor-default"
);
const activeButtonStyle = classnames(
  "flex-1",
  "p-3",
  "border-2",
  "transition",
  "rounded-base",
  "hover:opacity-80",
  "focus:outline-none"
);
export const activeButtonStyleTest = classnames(
  activeButtonStyle,
  "border-blue-400",
  "text-base-blue"
);
export const activeButtonStyleReal = classnames(
  activeButtonStyle,
  "border-red-400",
  "text-red-400"
);
export const stepperWrapper = classnames(
  "flex",
  "flex-row",
  "pt-4",
  "space-x-4"
);
