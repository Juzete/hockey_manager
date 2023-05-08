import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import matchesReducer from './slices/matchesSlice'
import playersReducer from './slices/playersSlice'
import transactionsReducer from './slices/transactionsSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key:  'root',
  storage,
}

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     matches: matchesReducer,
//     players: playersReducer,
//     transactions: transactionsReducer,
//   },
// })

const rootReducer = combineReducers({
  auth: authReducer,
  matches: matchesReducer,
  players: playersReducer,
  transactions: transactionsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)