import React, { FC } from "react"
import { sectionBlockStyle, sectionStyle, sectionTitleStyle } from "./styles"

interface SectionProps {
  title?: string
}

const Root: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={sectionStyle}>
      {title && <h2 className={sectionTitleStyle}>{title}</h2>}
      <div className={sectionBlockStyle}>{children}</div>
    </section>
  )
}

export default Root
