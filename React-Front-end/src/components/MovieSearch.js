import { useState } from 'react'
import { useQuery, gql } from "@apollo/client";
import { client } from "../ApolloClient/client";
import Movies from './Movies.js'

const MovieSearch = ({ title }) => {
  const EXCHANGE_RATES = gql`query{findPerson(id:text){id,name,born}}`;
  const [text, setText] = useState('')
  const [data, setData] = useState([])
  // const {data} = useQuery(`gqlquery{findPerson(id:${data}){id,name,born}}`)


  const OnSubmit = (e) => {
    e.preventDefault()
    // const EXCHANGE_RATES = gql`query{findPerson(id:text){id,name,born}}`;
    // const { data, loading, error } = useQuery(EXCHANGE_RATES);
    // console.log(data, loading, error)
    if (!text) {
      alert('Please enter title of Movie')
      return
    }

    // title({ text })
    //console.log(text)
    title += '"'
    title += text
    title += '"'

    let str = "Jim"
    console.log('Query')
    const string4 = new String("Jim");
    console.log(client)
    client.query({
      query: gql`query{findLikeMovied(id:"${text}"){
      title,tagline,released,uid
    actors{
          name,born,role
      }
  }}`
    })
      .then(result => setData(result.data.findLikeMovied));
    title = ''
    console.log(data)
    setText('')
  }

  return (
    <div>


      <form className='add-form' onSubmit={OnSubmit}>
        <div className='form-control'>
          <label>Movie Search</label>
          <input
            type='text'
            placeholder='Movie title'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>


        <input type='submit' value='Search Movie' className='btn btn-block' />
      </form>
      {
        data.map((movie, i) => {
          return <Movies key={i} released={movie.released} tagline={movie.tagline} title={movie.title} />
        })
      }
    </div>

  )

}

export default MovieSearch