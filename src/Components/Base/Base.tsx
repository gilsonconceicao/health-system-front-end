import React from 'react'
import { Header } from '../Header/Header'
import "./Base.style.css"; 

type Base = {
    children: React.ReactNode
}

export default function Base({ children }: Base) {
    return (
        <React.Fragment>
            <Header />
            <div id='container'>
                {children}
            </div>
        </React.Fragment>
    )
}
