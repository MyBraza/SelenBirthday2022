import { ICommonState, TCommonActions } from '@store/commonStore/types'
import { HELLO_WORLD } from '@store/commonStore/actionTypes'

const initialState: ICommonState = {
  hello: ''
}

const commonReducer = (state = initialState, action: TCommonActions) => {
  switch (action.type) {
    case HELLO_WORLD:
      return {
        ...state,
        hello: action.payload.hello
      }
    default:
      return state
  }
}

export default commonReducer
