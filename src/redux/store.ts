import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/player/player-slice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
