import axios from 'axios'
import React, {lazy, useEffect, useState} from 'react'
import { database } from '../other/links'

const Post = lazy(() => import('./Post'))

export default function Main() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(database+"/posty")
            .then(res => {
                setPosts(res.data)
            })
        
    }, [])

    return (
        <div id='posts' >
            <section>
            {posts.map((element, index) => {
                return <Post key={index} element={element} index={index} />
            })}
            </section>
        </div>
    )
}
