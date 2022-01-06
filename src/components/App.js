import React from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'


const dentalProducts = [
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dentl floss',
    'mouth guard',
]

const bikeProducts = [
    'paste',
    'tooth brush',
    'mouth wash',
    'dentl floss',
    'mouth guard',
]

const App = () => {
    return (
        <div>
            {/* <CountButton incrementBy={5} /> */}
            <SearchBar products={dentalProducts} />
            {/* <SearchBar products={bikeProducts} /> */}
        </div>
    )
}

export default App

