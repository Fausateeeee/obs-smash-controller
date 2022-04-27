import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
  nameP1: string
  scoreP1: number
  nameP2: string
  scoreP2: number
}

const initialState: PlayerState = {
  nameP1: '',
  scoreP1: 0,
  nameP2: '',
  scoreP2: 0,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setNameP1(state, action: PayloadAction<string>) {
      state.nameP1 = action.payload
    },
    setScore(state) {},
  },
})

export const { setNameP1, setScore } = playerSlice.actions
export default playerSlice.reducer
