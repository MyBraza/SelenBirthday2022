import React, { FC, memo } from 'react'
import css from './DgCategorySelect.module.scss'
import Image from 'next/future/image'
import { hat6 } from '@images'
import { DRAGOON_STRUCTURE } from '@config'

type TDgCategorySelectProps = {}

const DgCategorySelect: FC<TDgCategorySelectProps> = memo(
  ({}: TDgCategorySelectProps) => {
    const items = DRAGOON_STRUCTURE.map((value) => {
      return (
        <div className={css.item}>
          <Image
            className={css.icon}
            width={200}
            height={200}
            src={hat6}
            alt={value.label}
          />
          <h4 className={css.itemLabel}>{value.label}</h4>
        </div>
      )
    })
    return <div className={css.container}>{items}</div>
  }
)

DgCategorySelect.displayName = 'DgCategorySelect'

export default DgCategorySelect
