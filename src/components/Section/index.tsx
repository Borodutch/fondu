import React, { FC } from "react"
import { sectionBlockStyle, sectionStyle } from "./styles"
import { SectionTitleText } from "components/Text"
import { FormattedMessage } from "react-intl"

interface SectionProps {
  title?: string
}

const Root: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={sectionStyle}>
      {title && (
        <SectionTitleText>
          <FormattedMessage id="title" />
        </SectionTitleText>
      )}
      <div className={sectionBlockStyle}>{children}</div>
    </section>
  )
}

export default Root
