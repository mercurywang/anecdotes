import { useSelector, useDispatch } from 'react-redux'
import { voteById } from '../reducers/anecdoteReducer'
import {
  addNotification,
  clearNotification
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filters, anecdotes }) => {
    if (!filters) {
      return anecdotes
    }
    return anecdotes.filter((anecdote) => anecdote.content.includes(filters))
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteById(id))
    const content = anecdotes.find((anecdote) => anecdote.id === id).content
    dispatch(addNotification(`You voted '${content}'`))
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  const sorted = () => {
    const copy = [...anecdotes]
    return copy.sort((a, b) => b.votes - a.votes)
  }

  return (
    <div>
      {sorted().map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
