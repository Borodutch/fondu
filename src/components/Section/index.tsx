import React, { FC } from "react"
import { sectionBlockStyle, sectionStyle } from "./styles"
import { SectionTitleText } from "components/Text"

interface SectionProps {
  title?: string
}

const Root: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={sectionStyle}>
      {title && <SectionTitleText>{title}</SectionTitleText>}
      <div className={sectionBlockStyle}>{children}</div>
    </section>
  )
}

export default Root
