import { ThunkAction } from 'redux-thunk'
import { HELLO_WORLD } from '@store/commonStore/actionTypes'

export interface ICommonState {
  hello: string
}

export interface IHelloWorldPayload {
  hello: string
}

export type THelloWorld = {
  type: typeof HELLO_WORLD
  payload: IHelloWorldPayload
}

export type TCommonActions = THelloWorld

export type IMainPageThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ICommonState,
  unknown,
  TCommonActions
>
