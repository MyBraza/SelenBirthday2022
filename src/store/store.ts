import { configureAppStore } from '@store/index'
import { createWrapper } from 'next-redux-wrapper'

export type TAppStore = ReturnType<typeof configureAppStore>

const storeWrapper = createWrapper<TAppStore>(configureAppStore)

export default storeWrapper
