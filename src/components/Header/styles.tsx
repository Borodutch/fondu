import { classnames } from "classnames/tailwind";

export const headerStyle = classnames(
  "mt-5",
  "mb-10",
  "flex",
  "flex-row",
  "justify-between",
  "items-center"
);
export const logoWrapperStyle = classnames("text-3xl", "font-bold");
export const logoStyle = classnames(
  "bg-clip-text",
  "text-transparent",
  "bg-gradient-to-r",
  "from-base-blue",
  "to-light-purple",
  "uppercase"
);
