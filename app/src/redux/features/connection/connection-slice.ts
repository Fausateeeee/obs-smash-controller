import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ConnectionState {
  obs: boolean
  youtube: boolean
  hotUpdate: boolean
}

const initialState: ConnectionState = {
  obs: false,
  youtube: false,
  hotUpdate: true,
}

const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setConnectedOBS(state, action: PayloadAction<boolean>) {
      state.obs = action.payload
    },
    setConnectedYoutube(state, action: PayloadAction<boolean>) {
      state.youtube = action.payload
    },
  },
})

export const { setConnectedOBS, setConnectedYoutube } = connectionSlice.actions
export default connectionSlice.reducer
