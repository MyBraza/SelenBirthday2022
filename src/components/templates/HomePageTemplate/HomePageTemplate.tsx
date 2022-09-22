import React, { FC, memo } from 'react'
import css from './HomePageTemplate.module.scss'
import { useSelector } from 'react-redux'
import { getHelloWorldCommonSelector } from '@store/commonStore/selectors'
import { DragoonGenerator } from '@components/organisms'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(
  ({}: THomePageTemplateProps) => {
    const hello = useSelector(getHelloWorldCommonSelector)
    console.log(hello)
    return (
      <main className={css.wrapper}>
        <DragoonGenerator />
      </main>
    )
  }
)

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
