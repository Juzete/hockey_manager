import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import matchesReducer from './slices/matchesSlice'
import playersReducer from './slices/playersSlice'
import transactionsReducer from './slices/transactionsSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    matches: matchesReducer,
    players: playersReducer,
    transactions: transactionsReducer,
  },
})