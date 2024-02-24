import React from 'react'
import { Header } from '../Header/Header'
import "./Base.style.css"; 
import { Toaster } from '../ui/toaster';

type Base = {
    children: React.ReactNode
}

export default function Base({ children }: Base) {
    return (
        <React.Fragment>
            <Header />
            <Toaster />
            <div id='container'>
                {children}
            </div>
        </React.Fragment>
    )
}
