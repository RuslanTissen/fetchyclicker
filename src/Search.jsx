import { useState,useEffect } from "react"

const Search = ()=>{
const [page, setPage]= useState(1)
const[content, setContent]= useState([])

useEffect(()=>{
    fetch(`https://api.github.com/search/repositories?q=react&per_page=100&page=${page}`)
        .then(response => response.json())
        .then(result=> setContent(result.item))
}, [page])
function clickHandler(){
    setPage(page + 1)
}
function reverseClickHandler(){
    setPage(page - 1)
}
if(content.length==0){
    return <img src={require('./loading-waiting.gif')}/>
}
return(
    <div>
        <ul>
            {content.map(item=><li key={item.id}>
                {item.full_name}{item.private}
            </li>)}
        </ul>

        <h4>You are now on page{page}</h4>
        {page!=1 && <button className="previous" onClick={{reverseClickHandler}}>Previous</button>}
        <button className="next" onClick={clickHandler}>Next</button>
    </div>
)
}
export default Search