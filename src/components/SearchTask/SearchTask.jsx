import React from 'react'

function SearchTask( {handleSearch, search} ) {
  return (
    <section>
        <input type="text" placeholder='Please, search tasks  you want.' value={search} onChange={handleSearch} />
    </section>
  )
}

export default SearchTask;