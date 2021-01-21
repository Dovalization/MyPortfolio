import React from 'react'
import Link from 'next/link'
import { ButtonLink } from './styles'

interface ButtonProps {
  href: string
  newTab?: boolean
}

const Button: React.FC<ButtonProps> = ({ href, newTab = false, children }) => {
  if (newTab) {
    return (
      <Link href={href} passHref>
        <ButtonLink target="_blank">{children}</ButtonLink>
      </Link>
    )
  } else {
    return (
      <Link href={href} passHref>
        <ButtonLink>{children}</ButtonLink>
      </Link>
    )
  }
}

export default Button
