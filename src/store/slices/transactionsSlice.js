import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    transactionsList: [
        {
          id: uuidv4(),
          description: 'Buy equipment',
          type: "dec",
          amount: 2850,
          date: '20/03/2019'
        },
        {
          id: uuidv4(),
          description: 'Advertise payments',
          type: "inc",
          amount: 12000,
          date: '01/04/2019'
        },
        {
          id: uuidv4(),
          description: 'Away game spending',
          type: "dec",
          amount: 1100,
          date: '03/04/2019'
        },
      ]
}

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
        console.log(action.payload)
        state.transactionsList = action.payload;
    },
    editTransactions: (state, action) => {
      console.log(action.payload);
        state.transactionsList[action.payload.index] = {
          ...state.transactionsList[action.payload.index],
          ...action.payload.transaction
        }
    },
  },
})

export const { setTransactions, editTransactions } = transactionsSlice.actions

export default transactionsSlice.reducer