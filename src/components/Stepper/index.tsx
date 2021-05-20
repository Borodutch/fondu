import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { AppNetworks, appStore } from "store/app.store"
import {
  activeTextStyleReal,
  activeTextStyleTest,
  inactiveLineStyle,
  inactiveTextStyle,
  passedTextStyleTest,
  passedTextStyleReal,
  passedLineStyleReal,
  passedLineStyleTest,
  activeTabStyleReal,
  activeTabStyleTest,
  passedTabStyleReal,
  passedTabStyleTest,
  inactiveTabStyleTest,
  inactiveTabStyleReal,
  stepperWrapper,
  singleStepStyle,
} from "./styles"
import {
  tokenTypeTabText,
  tokenSettingsTabText,
  deploymentTabText,
} from "components/Text"

const Stepper: FC = () => {
  const currentActiveTextStyle =
    appStore.currentNetwork === AppNetworks.Real
      ? activeTextStyleReal
      : activeTextStyleTest
  const currentPassedTextStyle =
    appStore.currentNetwork === AppNetworks.Real
      ? passedTextStyleReal
      : passedTextStyleTest
  const currentPassedLineStyle =
    appStore.currentNetwork === AppNetworks.Real
      ? passedLineStyleReal
      : passedLineStyleTest
  const currentActiveTabStyle =
    appStore.currentNetwork === AppNetworks.Real
      ? activeTabStyleReal
      : activeTabStyleTest
  const currentInactiveTabStyle =
    appStore.currentNetwork === AppNetworks.Real
      ? inactiveTabStyleReal
      : inactiveTabStyleTest
  const currentPassedTabStyle =
    appStore.currentNetwork === AppNetworks.Real
      ? passedTabStyleReal
      : passedTabStyleTest

  return (
    <div className={stepperWrapper}>
      <div className={singleStepStyle}>
        <div
          className={
            appStore.currentTab === 1
              ? currentActiveTabStyle
              : currentPassedTabStyle
          }
        >
          1
        </div>
        <span
          className={
            appStore.currentTab === 1
              ? currentActiveTextStyle
              : currentPassedTextStyle
          }
        >
          {tokenTypeTabText}
        </span>
      </div>
      <div
        className={
          appStore.currentTab > 1 ? currentPassedLineStyle : inactiveLineStyle
        }
      ></div>
      <div className={singleStepStyle}>
        <div
          className={
            appStore.currentTab === 2
              ? currentActiveTabStyle
              : appStore.currentTab > 2
              ? currentPassedTabStyle
              : currentInactiveTabStyle
          }
        >
          2
        </div>
        <span
          className={
            appStore.currentTab === 2
              ? currentActiveTextStyle
              : appStore.currentTab > 2
              ? currentPassedTextStyle
              : inactiveTextStyle
          }
        >
          {tokenSettingsTabText}
        </span>
      </div>
      <div
        className={
          appStore.currentTab > 2 ? currentPassedLineStyle : inactiveLineStyle
        }
      ></div>
      <div className={singleStepStyle}>
        <div
          className={
            appStore.currentTab === 3
              ? currentActiveTabStyle
              : currentInactiveTabStyle
          }
        >
          3
        </div>
        <span
          className={
            appStore.currentTab === 3
              ? currentActiveTextStyle
              : inactiveTextStyle
          }
        >
          {deploymentTabText}
        </span>
      </div>
    </div>
  )
}

export default observer(Stepper)
