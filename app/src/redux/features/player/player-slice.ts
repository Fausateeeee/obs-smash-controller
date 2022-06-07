import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
  nameP1: string
  scoreP1: string
  nameP2: string
  scoreP2: string
  characterP1: Array<string>
  characterP2: Array<string>
  matchRound: string
}

const initialState: PlayerState = {
  nameP1: '',
  scoreP1: '0',
  nameP2: '',
  scoreP2: '0',
  characterP1: [],
  characterP2: [],
  matchRound: '',
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setNameP1(state, action: PayloadAction<string>) {
      state.nameP1 = action.payload
    },
    setNameP2(state, action: PayloadAction<string>) {
      state.nameP2 = action.payload
    },
    setScoreP1(state, action: PayloadAction<string>) {
      state.scoreP1 = action.payload
    },
    setScoreP2(state, action: PayloadAction<string>) {
      state.scoreP2 = action.payload
    },
    setCharacterP1(state, action: PayloadAction<Array<string>>) {
      state.characterP1 = action.payload
    },
    setCharacterP2(state, action: PayloadAction<Array<string>>) {
      state.characterP2 = action.payload
    },
    setMatchRound(state, action: PayloadAction<string>) {
      state.matchRound = action.payload
    },
    clearP1(state) {
      state.nameP1 = ''
      state.scoreP1 = '0'
      state.characterP1 = []
    },
    clearP2(state) {
      state.nameP2 = ''
      state.scoreP2 = '0'
      state.characterP2 = []
    },
  },
})

export const {
  setNameP1,
  setNameP2,
  setScoreP1,
  setScoreP2,
  setCharacterP1,
  setCharacterP2,
  setMatchRound,
} = playerSlice.actions
export default playerSlice.reducer
