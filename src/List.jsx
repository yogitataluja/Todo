import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
const List = (props) => {
    const [line, setline]=useState(false )
    const cutit=()=>{
        setline(true)
    }
    return (<>
        <div className="todo_style">
            <span onClick={cutit}><DeleteIcon className="deltbtn"/></span>
            <li style={{textDecoration: line? 'line-through': 'none'}}>{props.text}</li>
        </div>
    </>
    )


}
export default List