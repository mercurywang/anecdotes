import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(_state, action) {
      const content = action.payload
      return content
    },
    clearNotification() {
      return initialState
    }
  }
})

export const { addNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
