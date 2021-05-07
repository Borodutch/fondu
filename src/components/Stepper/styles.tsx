import { hideMobile } from "helpers/style.helper";
import { classnames } from "classnames/tailwind";

// Common styles
export const stepperWrapper = classnames(
  "w-auto",
  "md:w-4/6",
  "mx-auto",
  "flex",
  "justify-between",
  "items-center",
  "pt-3",
  "pb-8",
  "space-x-3"
);
export const singleStepStyle = classnames(
  "flex",
  "flex-row",
  "items-center",
  "space-x-2"
);

// Tab styles
const tabStyle = classnames(
  "w-8",
  "h-8",
  "text-white",
  "rounded-full",
  "transition",
  "flex",
  "items-center",
  "justify-center"
);
export const activeTabStyleTest = classnames(tabStyle, "bg-base-blue");
export const inactiveTabStyleTest = classnames(tabStyle, "bg-gray-300");
export const passedTabStyleTest = classnames(tabStyle, "bg-blue-200");
export const activeTabStyleReal = classnames(tabStyle, "bg-red-400");
export const inactiveTabStyleReal = classnames(tabStyle, "bg-gray-300");
export const passedTabStyleReal = classnames(tabStyle, "bg-red-200");

// Text styles
export const inactiveTextStyle = classnames(
  hideMobile,
  "text-gray-300",
  "transition"
);
export const activeTextStyleTest = classnames(
  hideMobile,
  "text-base-blue",
  "transition"
);
export const passedTextStyleTest = classnames(
  hideMobile,
  "text-blue-200",
  "transition"
);
export const activeTextStyleReal = classnames(
  hideMobile,
  "text-red-400",
  "transition"
);
export const passedTextStyleReal = classnames(
  hideMobile,
  "text-red-200",
  "transition"
);

// Line styles
export const inactiveLineStyle = classnames(
  "border-b-2",
  "border-dashed",
  "w-10",
  "md:w-40"
);
const passedLineStyle = classnames("border-b-2", "w-10", "md:w-40");
export const passedLineStyleReal = classnames(
  passedLineStyle,
  "border-red-200"
);
export const passedLineStyleTest = classnames(
  passedLineStyle,
  "border-blue-200"
);
