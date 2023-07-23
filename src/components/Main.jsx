import { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const[search,setSearch]=useState("");
    const[bookData,setBookData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key=="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAqTq8SxXDaiwk3hjlPIrtwhepJ80z26L0'+'&maxResults=40')
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return ( 
        <>
            <div className="header">
            <div className="row1">
                <h1>A word after a word <br /> after a word is power</h1>
            </div>
            <div className="row2">
                <h2><i>Find Your Books</i></h2>
                <div className="search">
                <input type="text" placeholder="Book to search"
                value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                <button><i className='bx bxs-search-alt-2'></i></button>
                </div>
                {/* <img src="https://media.istockphoto.com/id/1413840933/photo/old-books-on-wooden-shelf-tiled-bookshelf-background-concept-on-the-theme-of-history.webp?b=1&s=170667a&w=0&k=20&c=1Npv4ypDzrRYfcKmz1FpolYgeLWC5ndy9VGcgC7Odvs=" alt="" /> */}
            </div>
            </div>
            <div className="container">
                    <Card book={bookData}/>
            </div>
        </>
     );
}
 
export default Main;