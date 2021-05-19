import { classnames } from "classnames/tailwind"

const buttonStyle = classnames(
  "py-3",
  "px-4",
  "border-2",
  "rounded-base",
  "text-sm",
  "font-medium",
  "focus:outline-none",
  "hover:opacity-80",
  "transition"
)
export const buttonStyleTest = classnames(
  buttonStyle,
  "border-blue-400",
  "text-base-blue"
)
export const buttonStyleReal = classnames(
  buttonStyle,
  "border-red-400",
  "text-red-400"
)
