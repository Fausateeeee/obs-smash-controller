import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/player/player-slice'
import connectionReducer from './features/connection/connection-slice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    connection: connectionReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
