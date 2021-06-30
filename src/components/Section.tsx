import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { SectionTitleText } from 'components/Text'
import { FormattedMessage } from 'react-intl'
import { classnames } from 'classnames/tailwind'

export const sectionStyle = classnames('mt-4')
export const sectionBlockStyle = classnames('bg-base-gray', 'rounded-base')
interface SectionProps {
  title?: string
}

const Section: FC<SectionProps> = ({ children, title }) => {
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

export default observer(Section)
