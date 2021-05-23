import { classnames } from "classnames/tailwind"

export const wrapperStyle = classnames("flex", "md:flex-row", "flex-col", "p-4")
export const leftBlockStyle = classnames(
  "flex-1",
  "pb-5",
  "md:pb-0",
  "md:pr-10",
  "md:border-r-2",
  "border-b-2",
  "md:border-b-0",
  "border-gray-100",
  "space-y-1"
)
export const rightBlockStyle = classnames(
  "flex-1",
  "md:pl-10",
  "pt-5",
  "md:pt-0"
)
export const leftBlockInnerStyle = classnames("flex", "flex-row", "space-x-3")

export const balanceWrapperStyle = classnames(
  "flex",
  "md:flex-row",
  "flex-col",
  "space-y-2",
  "md:space-y-0"
)
export const balanceFlexStyle = classnames(
  "flex",
  "flex-col",
  "flex-grow",
  "pt-1"
)
