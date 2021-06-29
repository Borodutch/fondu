import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { sectionBlockStyle, sectionStyle } from './styles'
import { SectionTitleText } from 'components/Text'
import { FormattedMessage } from 'react-intl'
import { AppNetworks, appStore } from 'store/app.store'

interface SectionProps {
  title?: string
}

const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={sectionStyle}>
      {title && (
        <SectionTitleText real={appStore.currentNetwork === AppNetworks.Real}>
          <FormattedMessage id="title" />
        </SectionTitleText>
      )}
      <div className={sectionBlockStyle}>{children}</div>
    </section>
  )
}

export default observer(Section)
