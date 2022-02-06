import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import number from './modules/number'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['number'],
}

const rootReducer = combineReducers({
  number,
})

export type RootState = ReturnType<typeof rootReducer>

export default persistReducer(persistConfig, rootReducer)
