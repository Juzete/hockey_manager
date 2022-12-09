import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  matchesList: [
    {
      id: uuidv4(),
      oponent: 'Walkers',
      ourScore: 6,
      oponentScore: 5,
      matchDate: '10/03/2022'
    },
    {
      id: uuidv4(),
      oponent: 'New Jersey',
      ourScore: 3,
      oponentScore: 2,
      matchDate: '16/03/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Bravliki',
      ourScore: 1,
      oponentScore: 3,
      matchDate: '25/03/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Ailenders',
      ourScore: 1,
      oponentScore: 2,
      matchDate: '29/03/2022'
    },
    {
      id: uuidv4(),
      oponent: 'NY Rangers',
      ourScore: 4,
      oponentScore: 2,
      matchDate: '05/04/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Flares',
      ourScore: 3,
      oponentScore: 1,
      matchDate: '08/04/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Pinguins',
      ourScore: 0,
      oponentScore: 3,
      matchDate: '11/04/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Boston Bruins',
      ourScore: 4,
      oponentScore: 0,
      matchDate: '15/04/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Red Wings',
      ourScore: 4,
      oponentScore: 2,
      matchDate: '20/04/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Panteras',
      ourScore: 5,
      oponentScore: 1,
      matchDate: '23/04/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Ottawa Senators',
      ourScore: 3,
      oponentScore: 4,
      matchDate: '28/04/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Monreal Canadiens',
      ourScore: 1,
      oponentScore: 2,
      matchDate: '01/05/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Pinguins',
      ourScore: 0,
      oponentScore: 2,
      matchDate: '03/05/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Boston Bruins',
      ourScore: 4,
      oponentScore: 0,
      matchDate: '06/05/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Ailenders',
      ourScore: 1,
      oponentScore: 2,
      matchDate: '09/05/2022'
    },
    {
      id: uuidv4(),
      oponent: 'NY Rangers',
      ourScore: 3,
      oponentScore: 2,
      matchDate: '11/04/2022'
    },
    {
      id: uuidv4(),
      oponent: 'Flares',
      ourScore: 1,
      oponentScore: 0,
      matchDate: '14/04/2022'
    },
  ]
}

export const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatches: (state, action) => {
        state.matchesList = action.payload;
    },
  },
})

export const { setMatches } = matchesSlice.actions

export default matchesSlice.reducer