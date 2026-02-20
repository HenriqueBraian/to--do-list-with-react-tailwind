import { useState } from "react";

function TesteState(){
    const [message, SetMessage] = useState("ola brow")
    return(
        <div>
            <h1>{message}</h1>
            

            <button 
            onClick={()=>{
                SetMessage("trocou")
            }}
            >
                trocar
            </button>
        </div>
    )
}
export default TesteState;