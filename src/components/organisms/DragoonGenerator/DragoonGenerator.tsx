import React, { FC, memo } from 'react'
import css from './DragoonGenerator.module.scss'
import {Button, DgCategorySelect} from '@components/molecules'

type TDragoonGeneratorProps = {}

const DragoonGenerator: FC<TDragoonGeneratorProps> = memo(
  ({}: TDragoonGeneratorProps) => (
    <div className={css.container}>
      <div className={css.menu}><DgCategorySelect/></div>
      <div className={css.menu}><DgCategorySelect/></div>
    </div>
  )
)

DragoonGenerator.displayName = 'DragoonGenerator'

export default DragoonGenerator
