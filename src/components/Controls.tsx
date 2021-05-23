import React, { FC } from "react"
import { classnames } from "classnames/tailwind"

const stylizedTextColor = classnames("text-base-blue")
const stylizedBorderColor = classnames("border-blue-400")
const stylizedBackgroundColor = classnames("bg-base-blue")
const inactiveTextColor = classnames("text-gray-300")
const inactiveBorderColor = classnames("border-gray-300")
const inactiveBackgroundColor = classnames("bg-gray-300")

const baseButtonStyle = classnames(
  "flex-1",
  "p-3",
  "border-2",
  "hover:opacity-80",
  "focus:outline-none",
  "rounded-base",
  "transition",
  "min-w-max"
)
const inactiveButtonStyle = classnames(
  baseButtonStyle,
  inactiveBorderColor,
  inactiveTextColor,
  "cursor-default"
)
const inactiveFilledButtonStyle = classnames(
  baseButtonStyle,
  inactiveBackgroundColor,
  "text-white",
  "cursor-default"
)
const activeButtonStyle = classnames(
  baseButtonStyle,
  stylizedBorderColor,
  stylizedTextColor
)
const activeFilledButtonStyle = classnames(
  baseButtonStyle,
  stylizedBackgroundColor,
  "text-white"
)

interface buttonTextProps {
  active?: Boolean
  filled?: Boolean
}
export const Button: FC<
  buttonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, active = true, filled = false, ...props }) => {
  return (
    <button
      {...props}
      className={
        !active
          ? !filled
            ? inactiveButtonStyle
            : inactiveFilledButtonStyle
          : !filled
          ? activeButtonStyle
          : activeFilledButtonStyle
      }
    >
      {children}
    </button>
  )
}

const contractButtonStyle = classnames(
  "font-medium",
  "p-2",
  "border-2",
  "rounded-base",
  "focus:outline-none"
)
export const contractButtonStyleActive = classnames(
  contractButtonStyle,
  stylizedBorderColor,
  stylizedTextColor
)
export const contractButtonStyleInactive = classnames(
  contractButtonStyle,
  "text-gray-600",
  "border-dashed"
)
interface contractButtonTextProps {
  active: Boolean
}
export const ContractButton: FC<
  contractButtonTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, active, ...props }) => {
  return (
    <button
      {...props}
      className={
        active ? contractButtonStyleActive : contractButtonStyleInactive
      }
    >
      {children}
    </button>
  )
}
