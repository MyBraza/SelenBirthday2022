import { createSelector } from 'reselect'
import { IAppState } from '@store/types'

const getHelloWorldCommon = (state: IAppState) => state.common.hello

export const getHelloWorldCommonSelector = createSelector(
  getHelloWorldCommon,
  (value) => value
)
