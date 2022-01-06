import React, { useState, useEffect } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import Title from './Title/Title'

const App = () => {

    const [productState, setProductState] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(productsArray => {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductState(newProductsState)
            })
    }, [])

    const hasProducts = productState.length > 0

    return (
        <div>
            {/* <CountButton incrementBy={5} /> */}
            {/* <SearchBar products={[
                'paste',
                'tooth brush',
                'mouth wash',
                'dentl floss',
                'mouth guard',
            ]} /> */}
            <Title>API from store</Title>
            {hasProducts ? <SearchBar products={productState} /> : "Loading...."}
        </div>
    )
}

export default App

