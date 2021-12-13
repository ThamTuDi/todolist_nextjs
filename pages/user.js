import React from 'react'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { user: data }
    }
}

const user = ({ user }) => {
    return (
        <div style={{ margin: '0 350px' }}>
            <h1>Danh sach nhan vien</h1>
            {user.map(elm => <p key={elm.id}>{elm.name}</p>)}
        </div>
    )
}

export default user
