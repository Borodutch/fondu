import { classnames } from "classnames/tailwind"

const buttonStyle = classnames(
  "font-medium",
  "p-2",
  "border-2",
  "rounded-base",
  "focus:outline-none"
)
export const buttonStyleActiveTest = classnames(
  buttonStyle,
  "text-base-blue",
  "border-blue-400"
)
export const buttonStyleActiveReal = classnames(
  buttonStyle,
  "text-red-400",
  "border-red-400"
)
export const buttonStyleInactive = classnames(
  buttonStyle,
  "text-gray-600",
  "border-dashed"
)
