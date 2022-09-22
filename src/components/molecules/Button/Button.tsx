import React, { FC, memo } from 'react'
import css from './Button.module.scss'

type TButtonProps = {}

const Button: FC<TButtonProps> = memo(({}: TButtonProps) => <></>)

Button.displayName = 'Button'

export default Button
