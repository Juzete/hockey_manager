import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    playersList: [
        {
          id: uuidv4(),
          name: 'Clarke Gillebert',
          number: 56,
          role: 'Defender',
          salary: 2000,
          inviteDate: '20/04/2019'
        },
        {
          id: uuidv4(),
          name: 'Cao Yu',
          role: 'Goalkeeper',
          number: 32,
          salary: 2300,
          inviteDate: '22/02/2019'
        },
        {
          id: uuidv4(),
          name: 'Anje Keizer',
          number: 43,
          role: 'Capitan',
          salary: 3200,
          inviteDate: '20/05/2019'
        },
    ]
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
        state.playersList = action.payload;
    },
    editPlayers: (state, action) => {
      console.log(action.payload);
        state.playersList[action.payload.index] = {
          ...state.playersList[action.payload.index],
          ...action.payload.player
        }
    },
  },
})

export const { setPlayers, editPlayers } = playersSlice.actions

export default playersSlice.reducer