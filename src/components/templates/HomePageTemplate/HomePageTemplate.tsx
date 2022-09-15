import React, { FC, memo } from 'react'
import css from './HomePageTemplate.module.scss'
import { useSelector } from 'react-redux'
import { getHelloWorldCommonSelector } from '@store/commonStore/selectors'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(
  ({}: THomePageTemplateProps) => {
    const Hello = useSelector(getHelloWorldCommonSelector)
    return <div className={css.wrapper}>Hello {Hello}</div>
  }
)

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
