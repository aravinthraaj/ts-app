import React from "react"
import { Text as UnstyledText } from "@willeder/component-library"
import styles from "./Text.module.scss"

interface TextProps {
  variants?: "primary" | "secondary"
  children: string
}

const Text = ({ variants = "primary", children }: TextProps) => {
  return <UnstyledText className={styles[variants]}>{children}</UnstyledText>
}

export default Text
