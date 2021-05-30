import { classnames } from "classnames/tailwind"

export const headerStyle = classnames(
  "mt-5",
  "mb-10",
  "flex",
  "flex-row",
  "justify-between",
  "items-center"
)

// Logo text style
export const logoWrapperStyle = classnames(
  "text-3xl",
  "font-bold",
  "text-text-black"
)
const logoStyle = classnames("bg-clip-text", "text-transparent", "uppercase")
export const logoStyleTest = classnames(
  logoStyle,
  "bg-gradient-to-r",
  "from-base-blue",
  "to-light-purple"
)
export const logoStyleReal = classnames(
  logoStyle,
  "bg-gradient-to-r",
  "from-red-400",
  "to-light-purple"
)
