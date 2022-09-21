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

export const setNotification = (notification, second) => {
  return async (dispatch) => {
    await dispatch(addNotification(notification))
    setTimeout(() => dispatch(clearNotification()), second * 1000)
  }
}

export default notificationSlice.reducer
