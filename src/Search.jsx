import React, { useState } from 'react'

export default function Search() {
    const [searchResults, setSearchResults] = useState(null)
    
    const url = "https://api.github.com/search/repositories?q=react&per_page=100&page=1"

    fetch(url)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(results => {
            setSearchResults(results.items)
        })


  return (
    <div>
      <h1>Hallo</h1>
    </div>
  )
}
