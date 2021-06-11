import React from 'react'
import Main from './Main';
import Account from './forum/Account';

const data = window.location.href.split('/')[4];

export default function Forum() {
    return (
        <div>
            {data == "profil" ? <Main/> : <Account/>}
        </div>
    )
}
