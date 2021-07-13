import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import List from './List'


const App = () => {
    const [cinput, finput] = useState(" ")
    const [cin, upcin] = useState([])
    const additem = (event) => {
        finput(event.target.value)
    }

    const listitem = () => {
        upcin((prevalue)=>{
         return([ ...prevalue, cinput])
        })
        finput(" ")
    }
    return (
        <>
            <div className="main_div">
                <div className="cntr_div">
                    <h1>TO DO LIST</h1>
                    <input type="text" placeholder="Add a Item" onChange={additem} value={cinput } />
                    <Button  onClick={listitem} className="btn">
                        <AddIcon />
                    </Button>
                    <ol>
                        {cin.map((val, index)=>{
                            return(<List key={index} text={val}/>)
                                
                            })}
                    </ol>
                </div>
            </div>

        </>
    )
}
export default App