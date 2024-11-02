import { useEffect, useState } from "react"
const Search = () => {
    const [page, setPage] = useState(1) // "page" should be a state variable
    const [content, setContent] = useState([])

    useEffect(()=> {
        fetch(`https://api.github.com/search/repositories?q=react&per_page=100&page=${page}`)
        .then(response => response.json())
        .then(result => setContent(result.items))
    }, [page]) // if one of the thing in the [] changes then it runs the function
    function clickHandler() {
        setPage(page + 1)
    }
    function reverseClickHandler() {
        setPage(page - 1)
    }
    
    if(content.length==0){
        return "loading"
    }
    return (
        <div>
            <ul>
                {content.map(item => <li key={item.id}>
                                        {item.full_name} {item.private}
                                     </li>)}
            </ul>
            
            <h4>You are now on page {page}</h4>
         
            {page!=1 && <button className="previous" onClick={reverseClickHandler}>Previous</button>}
            <button className="next" onClick={clickHandler}>Next</button>
        </div>
    )
}
export default Search
