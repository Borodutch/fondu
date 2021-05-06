import React, { FC } from "react";
import { classnames } from "classnames/tailwind";

interface SectionProps {
  title?: string;
}

const sectionStyle = classnames("mt-4");
const sectionTitleStyle = classnames(
  "text-2xl",
  "uppercase",
  "font-medium",
  "text-base-black",
  "mb-2"
);
const sectionBlockStyle = classnames(
  "bg-base-gray",
  "py-3",
  "px-4",
  "rounded-base"
);

const Root: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={sectionStyle}>
      {title && <h2 className={sectionTitleStyle}>{title}</h2>}
      <div className={sectionBlockStyle}>{children}</div>
    </section>
  );
};

export default Root;
