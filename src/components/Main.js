import React, { useState } from "react";
import Card from "./Card"


const Main=()=>{

    const [search, setSearch]=useState("")
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            console.log('hello')
        }
    }

    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>Search for books</h1>

            </div>
            <div className="row2">
                <div className="search">
                    <input type="text" placeholder="enter book name"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyDown={searchBook}/>
                    <button>Search</button>
                </div>

            </div>
        </div>

        <div className="container">
            <Card/>
        </div>
        </>
    )
}
export default Main;