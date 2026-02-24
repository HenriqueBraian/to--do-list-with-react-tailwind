import React, { useState } from "react";

function AddTodo({onAdd}){
    const [input, setInput] = useState("");
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(input.trim()){
        onAdd(input);
        setInput("")
      }
    }

   return(
      <div className="w-full">
        <div className="flex items-center justify-center p-4">

            <h1 className="text-3xl mb-6 text-center">
              <i className="ri-list-check-3 text-blue-500"></i> 
              Minhas Tarefas
            </h1>

        </div>
        
         <form onSubmit={handleSubmit} className="w-full">
          <div className="flex w-full gap-2 mb-6">

            <input type="text" 
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="Digita uma tarefa..."
              className="bg-[f3f3f6] flex-1 px-3 py-2 text-black font-semibold border-none rounded-2xl ring-1 ring-gray-300"
            />
            <button type="submit" 
            className="bg-gray-950 
            hover:bg-gray-800 
            text-white 
            rounded-2xl 
            px-4 py2 ">
            Adicionar
           </button>

          </div>
         </form>

      </div>
    )
}
export default AddTodo;

{/*  */}