import { combineReducers } from 'redux'
import { IAppState } from '@store/types'
import commonReducer from '@store/commonStore/reducer'

const createRootReducer = () =>
  combineReducers<IAppState>({ common: commonReducer })

export default createRootReducer
