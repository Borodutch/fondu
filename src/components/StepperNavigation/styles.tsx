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
export const activeButtonStyle = classnames(
  "flex-1",
  "p-3",
  "border-2",
  "border-blue-400",
  "text-base-blue",
  "rounded-base",
  "hover:opacity-80",
  "focus:outline-none"
);
