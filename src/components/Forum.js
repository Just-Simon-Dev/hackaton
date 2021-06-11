import React, {lazy} from 'react'

const Login = lazy(()=> import('./forum/Login'))

const data = window.location.href.split('/')[4];

export default function Forum() {
    return (
        <div>
            <Login/>
        </div>
    )
}
