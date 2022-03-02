import { useState } from 'react'

const options = [
    {
      label: "Acted",
      value: "acted",
    },
    {
      label: "Directed",
      value: "directed",
    },
    {
      label: "Produced",
      value: "produced",
    },
    {
      label: "Wrote",
      value: "wrote",
    },
  ];

const AddConnection = ({ onAddC }) => {
  const [movie, setMovie] = useState('')
  const [person, setPerson] = useState('')
  const [type, setType] = useState('acted')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!movie || !person) {
      alert('Please add a Connection')
      return
    }
    console.log('Hi',e)
    console.log(e.target.value)
    onAddC({ movie, person ,type})

    // setPerson('')
    // setType('')
    // setMovie('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Person</label>
        <input
          type='text'
          placeholder='Name of Person'
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Movie</label>
        <input
          type='text'
          placeholder='Name of Movie'
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        </div>
      <div className='form-control'>
        <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
      </div>

      <input type='submit' value='Save Connection' className='btn btn-block' />
    </form>
  )
}


export default AddConnection;
