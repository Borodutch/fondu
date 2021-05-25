import { classnames } from "classnames/tailwind"
import { darkMode } from "../Theme/darkTheme"

export const rootStyle = classnames("container", "mx-auto", "px-5", "pb-10")
export const rootDarkStyle = classnames(rootStyle, darkMode)
