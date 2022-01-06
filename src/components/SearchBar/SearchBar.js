import React, { useState } from 'react'
import "./SearchBar.css"


const SearchBar = (props) => {
    const [searchValue, setsearchValue] = useState("")

    const handleInputChange = (event) => {
        setsearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setsearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProduct = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange}></input>
            {shouldDisplayButton && <button onClick={handleClearClick} >clear</button>}
            {filteredProduct.map((products, index) => {
                return <div key={index}>
                    <ul>
                        <li>{products.toLocaleLowerCase()}</li>
                    </ul>
                </div>
            })}
        </div>
    )
}

export default SearchBar
