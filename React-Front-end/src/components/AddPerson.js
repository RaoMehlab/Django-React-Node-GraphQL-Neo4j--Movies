import { useState } from 'react'

const AddPerson = ({ onAddP }) => {
  const [name, setText] = useState('')
  const [born, setDay] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a Person')
      return
    }

    onAddP({ name, born })

    setText('')
    setDay('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Person</label>
        <input
          type='text'
          placeholder='Name of Person'
          value={name}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Born</label>
        <input
          type='number'
          placeholder='Add Birth Year'
          value={born}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Person' className='btn btn-block' />
    </form>
  )
}


export default AddPerson;
