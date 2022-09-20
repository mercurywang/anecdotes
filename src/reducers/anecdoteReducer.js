import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    voteById(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find((ad) => ad.id === id)

      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }

      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : votedAnecdote
      )
    },
    setAnecdotes(_state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, voteById, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer
