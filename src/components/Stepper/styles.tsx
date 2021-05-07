import { hideMobile } from "helpers/style.helper";
import { classnames } from "classnames/tailwind";

export const tabStyle = classnames(
  "w-8",
  "h-8",
  "text-white",
  "rounded-full",
  "transition",
  "flex",
  "items-center",
  "justify-center"
);
export const activeTabStyle = classnames(tabStyle, "bg-base-blue");
export const inactiveTabStyle = classnames(tabStyle, "bg-gray-300");
export const passedTabStyle = classnames(tabStyle, "bg-blue-200");
export const activeTextStyle = classnames(
  hideMobile,
  "text-base-blue",
  "transition"
);
export const inactiveTextStyle = classnames(
  hideMobile,
  "text-gray-300",
  "transition"
);
export const passedTextStyle = classnames(
  hideMobile,
  "text-blue-200",
  "transition"
);
export const inactiveLineStyle = classnames(
  "border-b-2",
  "border-dashed",
  "w-10",
  "md:w-40"
);
export const passedLineStyle = classnames(
  "border-b-2",
  "border-blue-200",
  "w-10",
  "md:w-40"
);
