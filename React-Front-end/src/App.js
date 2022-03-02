import { useState } from 'react'
import {  gql } from "@apollo/client";
import Header from './components/Header'
import MovieSearch from './components/MovieSearch'
import AddPerson from './components/AddPerson'
import AddMovie from './components/AddMovie'
import AddConnection from './components/AddConnection'
import { ApolloProvider } from '@apollo/client';
import { client } from "./ApolloClient/client";

function App() {
  const [showAddPerson, setShowAddPerson] = useState(false)
  const [showAddMovie, setShowAddMovie] = useState(false)
  const [showAddConnection, setShowAddConnection] = useState(false)

  const addPerson = async (Person) => {
    client.mutate({
      mutation: gql`mutation {
        create_person: createPerson(input: {name:"${Person.name}",born:${Person.born}}){
          person {
            id,
            name,uid
          }
        }
      }`
    })
      .then(result => console.log(result.data.create_person.person));
    console.log(Person)
  }
  const addMovie = async (Movie) => {
    client.mutate({
      mutation: gql`mutation {
        create_movie: createMovie(input: {title:"${Movie.title}",released:${Movie.released},tagline:"${Movie.tagline}"}){
          movie {
            title,
            uid,tagline,released
          }
        }
      }`
    })
      .then(result => console.log(result.data.create_movie.movie));
    //console.log(Movie)
  }
  const addConnection = async (Connection) => {
    console.log(Connection)
    client.mutate({

      mutation: gql`mutation {
        create_connection: createConnection(input: {name:"${Connection.person}",title:"${Connection.movie}",ctype:"${Connection.type}"}){
          connection {
            name,
            title
          }
        }
      }`
    })
      .then(result => console.log(result.data.create_connection.connection));
    
  }
  return (
    
    <ApolloProvider client={client}>
    <div className="container">
      <div>
      <Header
          onAddP={() => setShowAddPerson(!showAddPerson)}
          showAddP={showAddPerson} title="Movies Desk" onAddM={() => setShowAddMovie(!showAddMovie)}
          showAddM={showAddMovie} onAddC={() => setShowAddConnection(!showAddConnection)}
          showAddC={showAddConnection} 
        />
        {showAddPerson && <AddPerson onAddP={addPerson} />}
        {showAddMovie && <AddMovie onAddM={addMovie} />}
        {showAddConnection && <AddConnection onAddC={addConnection} />}
      </div>
     
     <MovieSearch title='hello'/>
  
    </div>
    </ApolloProvider>
  );
}


export default App;
