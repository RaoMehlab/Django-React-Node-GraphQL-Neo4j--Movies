import React, { useEffect } from 'react';
import { useState } from 'react'
import Actor from './Actor.js'
import { gql } from "@apollo/client";
import { client } from "../ApolloClient/client";

const Movies = ({ released, tagline, title }) => {
    const [data1, setData1] = useState()
    const [toggle, settoggle] = useState(false)

    const OnQuery = (e) => {
        console.log('Hello')
        client.query({
            query: gql`query{findMovied(id:"${title}"){
                title,tagline,released,uid
              actors{
                    name,born,role(temp:"${title}")
                }
            }}`
        })
            .then(result => setData1(result.data.findMovied));
        title = ''
        console.log('Hello')
        console.log(data1)
    }

    useEffect(() => {
        OnQuery()
    }, [])
    return (
        <div onClick={() => settoggle(!toggle)} className="task">
            <h2>{title}</h2>
            <h3>Tagline : {tagline}</h3>
            <h4>Released : {released}</h4>
            {toggle && <h4>Actors :</h4>}
            {toggle && <div>
                {
                    // onQuery();
                    data1?.actors.map((actor, i) => {
                        return <Actor key={i} name={actor.name} born={actor.born} role={actor.role} />
                    })
                }
            </div>}

            {/* <button onClick={} >Click</button> */}
        </div>
    )
}

export default Movies;