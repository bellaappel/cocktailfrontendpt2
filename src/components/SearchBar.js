import React from 'react'

function SearchBar(propsObj){

  function handleSubmit(e){
    e.preventDefault()
    let value = e.target["cocktail-input"].value
    propsObj.changeStateValue(value)
  }

  return (
    <div id="search-bar">
        <form onSubmit={handleSubmit} id="search">
          <input name="cocktail-input" type="text" />
          <input type="submit" value="Search!" />
        </form>
    </div>
  )
}

export default SearchBar