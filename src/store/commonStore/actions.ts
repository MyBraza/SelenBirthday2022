import {IHelloWorldPayload, THelloWorld} from "@store/commonStore/types";
import {HELLO_WORLD} from "@store/commonStore/actionTypes";

export const helloWorld = (
  payload: IHelloWorldPayload
): THelloWorld => ({
  type: HELLO_WORLD,
  payload
})
