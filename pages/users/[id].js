import { useRouter } from 'next/router'
import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((post) => ({
        params: { id: post.id.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()


    return {
        props: { user: data }
    }
}

export default function DetailUser({ user }) {
    const idUser = useRouter()

    return (
        <div>
            <h1>Thông tin</h1>
            <h4>Ten: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Username: {user.username}</h4>
            <h4>Address: {user.address.city}</h4>
        </div>
    )
}
